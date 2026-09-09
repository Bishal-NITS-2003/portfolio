import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;

    if (!apiKey) {
      console.error("BREVO_API_KEY is not defined in environment variables.");
      return NextResponse.json(
        { 
          error: "Brevo API key is not configured. Please add BREVO_API_KEY to your .env.local file." 
        },
        { status: 500 }
      );
    }

    // Sender email must be verified in your Brevo account (defaults to your email)
    const senderEmail = process.env.BREVO_SENDER_EMAIL || "dasbishal1717@gmail.com";
    const recipientEmail = "dasbishal1717@gmail.com";

    const emailPayload = {
      sender: {
        name: `Portfolio Contact - ${name}`,
        email: senderEmail,
      },
      to: [
        {
          email: recipientEmail,
          name: "Bishal Das",
        },
      ],
      replyTo: {
        email: email,
        name: name,
      },
      subject: `[Portfolio] ${subject ? subject : "New Contact Inquiry"} from ${name}`,
      htmlContent: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0d0a15; color: #e2e8f0; margin: 0; padding: 24px; }
              .card { background-color: #161224; border: 1px solid rgba(168, 85, 247, 0.3); border-radius: 16px; padding: 32px; max-width: 600px; margin: 0 auto; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
              .badge { display: inline-block; background-color: rgba(168, 85, 247, 0.15); border: 1px solid rgba(168, 85, 247, 0.4); color: #c084fc; font-size: 12px; font-weight: 600; padding: 4px 12px; border-radius: 9999px; margin-bottom: 16px; }
              h2 { color: #ffffff; font-size: 22px; margin-top: 0; margin-bottom: 20px; }
              .meta-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
              .meta-table td { padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.08); font-size: 14px; }
              .meta-label { color: #94a3b8; width: 100px; font-weight: 600; }
              .meta-value { color: #ffffff; }
              .meta-value a { color: #c084fc; text-decoration: none; }
              .message-box { background-color: rgba(0,0,0,0.35); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 18px; color: #f1f5f9; font-size: 14px; line-height: 1.6; white-space: pre-wrap; word-break: break-word; }
              .footer { margin-top: 24px; font-size: 12px; color: #64748b; text-align: center; }
            </style>
          </head>
          <body>
            <div class="card">
              <div class="badge">NEW PORTFOLIO MESSAGE</div>
              <h2>You received a message via your portfolio</h2>
              <table class="meta-table">
                <tr>
                  <td class="meta-label">From:</td>
                  <td class="meta-value"><strong>${name}</strong></td>
                </tr>
                <tr>
                  <td class="meta-label">Email:</td>
                  <td class="meta-value"><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td class="meta-label">Subject:</td>
                  <td class="meta-value">${subject || "N/A"}</td>
                </tr>
              </table>
              <div style="font-weight: 600; font-size: 13px; color: #94a3b8; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;">Message:</div>
              <div class="message-box">${message}</div>
              <div class="footer">
                Hit "Reply" in your email client to respond directly to ${name} (${email}).
              </div>
            </div>
          </body>
        </html>
      `,
      textContent: `New message from ${name} (${email}):\n\nSubject: ${subject || "N/A"}\n\nMessage:\n${message}`,
    };

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Brevo API error:", data);
      return NextResponse.json(
        { 
          error: data.message || "Brevo failed to send email. Please check your API key and verified sender." 
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      messageId: data.messageId,
    });
  } catch (error: unknown) {
    console.error("Error in contact API route:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

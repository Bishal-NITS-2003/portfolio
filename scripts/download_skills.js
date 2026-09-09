const https = require('https');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'skills');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const images = [
  'html.png','css.png','js.png','tailwind.png','react.png','redux.png',
  'reactquery.png','ts.png','next.png','framer.png','stripe.png','node.png',
  'mongodb.png','mui.png','express.png','firebase.png','postgresql.png',
  'mysql.png','prisma.png','graphql.png','reactnative.png','tauri.png',
  'docker.png','figma.png','go.png'
];

async function download(file) {
  const url = `https://raw.githubusercontent.com/sanidhyy/space-portfolio/master/public/skills/${file}`;
  const dest = path.join(targetDir, file);
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      if (res.statusCode !== 200) {
        console.error(`Failed ${file}: ${res.statusCode}`);
        return resolve();
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Saved ${file}`);
        resolve();
      });
    }).on('error', err => {
      console.error(`Error ${file}:`, err.message);
      resolve();
    });
  });
}

(async () => {
  for (const img of images) {
    await download(img);
  }
  console.log('All downloads finished!');
})();

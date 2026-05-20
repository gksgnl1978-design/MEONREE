const https = require('https');
const fs = require('fs');

https.get('https://service-672982773978.asia-east1.run.app/assets/index-BS-IBCKx.js', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    fs.writeFileSync('index.js', data);
    console.log('Downloaded JS');
  });
});

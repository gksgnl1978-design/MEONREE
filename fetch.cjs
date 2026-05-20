const https = require('https');
https.get('https://service-672982773978.asia-east1.run.app/assets/index-BS-IBCKx.js', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const matches = data.match(/["'][^"'\\]*[ㄱ-ㅎㅏ-ㅣ가-힣][^"'\\]*["']/g);
    if (matches) {
      console.log([...new Set(matches)].join('\n'));
    }
  });
});

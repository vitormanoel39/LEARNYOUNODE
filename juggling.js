const http = require('http');

const urls = process.argv.slice(2);
let count = 0;
const results = [];

urls.forEach((url, index) => {
  http.get(url, (response) => {
    let data = '';
    response.setEncoding('utf8');
    response.on('data', (chunk) => {
      data += chunk;
    });
    response.on('end', () => {
      results[index] = data;
      count++;
      if (count === urls.length) {
        results.forEach((result) => {
          console.log(result);
        });
      }
    });
  });
});
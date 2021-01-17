const request = require('request');
const search = "https://api.thecatapi.com/v1/breeds/search?q=" + process.argv[2];

request(search, (error, response, body) => {
  const data = JSON.parse(body);
  if (error) {
    console.log('error:', error);
  } else if (data.length === 0) {
    console.log('error: breed not found');
  } else {
    console.log(data[0].description);
  }
});
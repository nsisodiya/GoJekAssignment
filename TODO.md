* Both APIs should respond within 100ms.
 * Tools to check timings.
 * Tools for firing multiple requests.
 50,000 drivers sending location every 60 seconds.
 So its 50K request per minute.
 1 request takes 100ms, so 600request will take 1 minute.
Concurrnacy - 50,000/600 = 83.3333333 == 84 
### Expected Load: ### - 20 concurrent requests
* eslint ?
* Auto run Test Coverage - Livereload
* https://github.com/adamgruber/mochawesome
* Load Test - https://www.npmjs.com/package/loadtest
https://artillery.io/
https://raygun.com/blog/2014/12/performance-testing-nodejs-api/
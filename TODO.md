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


curl -v -X PUT -H "Content-Type: application/json" -d '{"latitude":12.97161923,"longitude":77.59463452,"accuracy":0.7}' http://localhost:3000/drivers/20/location
curl -v http://localhost:3000/drivers?latitude=12.97161920&longitude=77.59463462&radius=2000&limit=20
//curl -v -X GET http://localhost:3000/drivers?{%22latitude%22:12.9716192,%22longitude%22:77.59463462,%22radius%22:2000,%22limit%22:20}

https://www.npmjs.com/package/eslint-plugin-mocha
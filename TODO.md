====== Remaining Items ======
* BenchMarch/Load Test 
* Test Each file
======= Nice to Have =====
* Auto run Test Coverage - Livereload
==============
* Both APIs should respond within 100ms.
 * Tools to check timings.
 * Tools for firing multiple requests.
 50,000 drivers sending location every 60 seconds.
 So its 50K request per minute.
 1 request takes 100ms, so 600request will take 1 minute.
Concurrnacy - 50,000/600 = 83.3333333 == 84 
### Expected Load: ### - 20 concurrent requests
* Load Test - https://www.npmjs.com/package/loadtest
https://artillery.io/
https://raygun.com/blog/2014/12/performance-testing-nodejs-api/


curl -v -X PUT -H "Content-Type: application/json" -d '{"latitude":12.97161923,"longitude":77.59463452,"accuracy":0.7}' http://localhost:3000/drivers/20/location
curl -v http://localhost:3000/drivers?latitude=12.97161923&longitude=77.59463452&radius=2000&limit=20

https://www.npmjs.com/package/eslint-plugin-mocha
### Artillary Config:
```
config:
  target: 'http://localhost:3000'
  phases:
    - duration: 60
      arrivalRate: 1000
scenarios:
  - flow:
    - get:
        url: "/{{$randomNumber(1, 10000000)}"
```

### Results

```
  Scenarios launched:  60000
  Scenarios completed: 60000
  Requests completed:  180000
  RPS sent: 383.09
  Request latency:
    min: 1.1
    max: 6003.9
    median: 10.6
    p95: 91.8
    p99: 1888.4
  Scenario counts:
    0: 60000 (100%)
  Codes:
    200: 60000
    302: 60000
    404: 60000
```
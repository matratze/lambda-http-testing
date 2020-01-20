# Lambda Testing
This projects demonstrates how to test your lambdas using chai-http plugin.
Before proceeding make sure you have installed Node.js and the SAM-CLI on your system.


### 1. Setup Layer

```bash
cd layer/nodejs
npm install
```

### 2. Build and run api

```bash
cd ..
sam build
sam local start-api
```


### Run tests

```bash
cd tests
npm install
npm run test
```



var testContext = require.context('.', true, /.spec.ts/);
testContext.keys().forEach(testContext);

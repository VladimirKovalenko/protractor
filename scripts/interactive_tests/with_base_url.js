var env = require('../../spec/environment.js');
var InteractiveTest = require('./interactive_test_util').InteractiveTest;
var port = env.interactiveTestPort;
var test = new InteractiveTest(
    'node built/cli.js --baseUrl http://localhost:' + env.webServerDefaultPort + 
    '/ng1 --elementExplorer true', port);

// Check we automatically go to to baseUrl.
test.addCommandExpectation(
    'browser.driver.getCurrentUrl()', 
    'http://localhost:' + env.webServerDefaultPort + '/ng1/#/form');
test.run();

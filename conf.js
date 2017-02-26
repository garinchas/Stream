exports.config = {

    directConnect: true,

    rootElement: 'div',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome',
        'ignoreSynchronization': true,
        'chromeOptions':{
            args: ['--start-maximized']
        }
    },

    framework: 'jasmine2',

    params: {
        "loginName": "auto",
        "passwordValue": "test"
    },


    specs: ['./features/main.js'],


    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
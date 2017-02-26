var MainPage = function() {

    var login = element(by.css('[placeholder="Login"]'));
    var password = element(by.css('[placeholder="Password"]'));
    var enterButton = element(by.css('[type="submit"]'));
    var validationText = element(by.className('tab-heading'));



    this.url = function () {
        browser.get('http://streamtv.net.ua/base/');
    };

    this.login = function(name) {
        login.sendKeys(name);
    };

    this.password = function(name) {
        password.sendKeys(name);
    };

    this.enterButton = function() {
        enterButton.click();
    };

    this.tabWrestlers = function() {
        return validationText.getText();
    };

    this.clickTabWrestlers = function() {
        return validationText.click();
    };

};


module.exports = MainPage;

var BasePage = function() {

    var newButton = element(by.css('[type="button"]'));

    this.clickNewButton = function(name) {
        newButton.click();
    };

    this.clickSearchButton = function () {
       browser.driver.executeScript('document.querySelectorAll("div:nth-child(1) > button.btn.btn-primary")[0].click()');
    };

    this.clickExistingRecord = function (value) {
        var getSelectorExistingRecord = element(by.cssContainingText('.ng-binding', value));
        getSelectorExistingRecord.click();
    }
};


module.exports = BasePage;
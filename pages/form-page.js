var Utils = require('./../pages/utils');

var FormPage = function() {

    this.randomString = Utils.generateRandomString();
    var applyButton = element(by.className('btn-success'));
    var deleteButton = element(by.className('btn-danger'));
    var applyButtonConfirmationWindow = element(by.css('.modal-footer > .btn-success'));
    var getSelectorLastName = element(by.css('[placeholder="Last name"]'));
    var getSelectorFirstName = element(by.css('[placeholder="First name"]'));
    var getSelectorDateOfBirth = element(by.css('[placeholder="Date of Birth"]'));
    var getSelectorMiddleName = element(by.css('[placeholder="Middle name"]'));
    var getSelectorFST = element(by.css('[label="FST"] .ng-invalid'));
    var getSelectorStyle = element(by.css('[label="Style"] .ng-invalid'));
    var getSelectorAge = element(by.css('[label="Age"] .ng-invalid'));
    var getSelectorYear = element(by.css('[label="Year"] .ng-invalid'));
    var getSelectorRegion = element(by.css('[label="Region"] .ng-invalid'));
    var getSelectorSearchFiled = element(by.css('[ng-model="searchFor"]'));

    this.fillFirstName = function(value) {
        getSelectorFirstName.sendKeys(protractor.Key.CONTROL, 'a');
        getSelectorFirstName.sendKeys(value + this.randomString);
    };

    this.fillLastName = function(value) {
        getSelectorLastName.sendKeys(protractor.Key.CONTROL, 'a');
        getSelectorLastName.sendKeys(value + this.randomString);
    };

    this.fillDateOfBirthName = function(value) {
        getSelectorDateOfBirth.sendKeys(value);
    };

    this.fillMiddleName = function(value) {
        getSelectorMiddleName.sendKeys(protractor.Key.CONTROL, 'a');
        getSelectorMiddleName.sendKeys(value + this.randomString);
    };

    this.selectRegion = function(optionNum) {
        getSelectorRegion.$('[label="'+optionNum+'"]').click();
    };

    this.selectFST = function(optionNum) {
        getSelectorFST.$('[label="'+optionNum+'"]').click();
    };

    this.selectStyle = function(optionNum) {
        getSelectorStyle.$('[label="'+optionNum+'"]').click();
    };

    this.selectAge = function(optionNum) {
        getSelectorAge.$('[label="'+optionNum+'"]').click();
    };

    this.selectYear = function(optionNum) {
        getSelectorYear.$('[label="'+optionNum+'"]').click();
    };

    this.clickApply = function() {
        applyButton.click();
    };

    this.clickDelete = function() {
        deleteButton.click();
    };

    this.clickApplyConfirmationWindow = function() {
        applyButtonConfirmationWindow.click();
    };

    this.searchFiled = function (firstName, lastName, middleName) {
        getSelectorSearchFiled.sendKeys(protractor.Key.CONTROL, 'a');
        this.fullName = lastName + this.randomString + ' ' + firstName + this.randomString + ' ' + middleName + this.randomString;
        getSelectorSearchFiled.sendKeys(this.fullName);
    };
};


module.exports = FormPage;
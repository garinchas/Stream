var MainPage = require('./../pages/main-page.js');
var BasePage = require('./../pages/base-page.js');
var FormPage = require('./../pages/form-page.js');

    describe('stream-tv homepage', function() {
        var mainPage = new MainPage();
        var basePage = new BasePage();
        var formPage = new FormPage();

        beforeEach(function() {

            mainPage.url();
            mainPage.login(browser.params.loginName);
            mainPage.password(browser.params.passwordValue);
            mainPage.enterButton();
            expect(element(by.className('tab-heading')).getText()).toEqual('Wrestlers');
        });


        fit('Add a new entry with valid parameters', function() {
            var getTextTabNewWrestler = element(by.cssContainingText('[ng-click="select()"] > .ng-scope > div', "New Wrestler"));
            var getTextTabWrestler = element(by.className('tab-heading'));
            var checkResult = element(by.css('tr.ng-scope > td:nth-child(2)'));

            basePage.clickNewButton();
            expect(getTextTabNewWrestler.getText()).toEqual('New Wrestler');
            formPage.fillFirstName('Denis');
            formPage.fillLastName('Semen');
            formPage.fillDateOfBirthName('04.07.1984');
            formPage.fillMiddleName('Viacheslavovich');
            formPage.selectRegion('Odeska');
            formPage.selectFST('Dinamo');
            formPage.selectStyle('FS');
            formPage.selectAge('Junior');
            formPage.selectYear('2017');
            formPage.clickApply();
            mainPage.clickTabWrestlers();
            expect(getTextTabWrestler.getText()).toEqual('Wrestlers');
            formPage.searchFiled('Denis','Semen','Viacheslavovich');
            basePage.clickSearchButton();
            expect(checkResult.getText()).toEqual(formPage.fullName);
        });

        fit('Delete new entry with valid parameters', function() {
            var getTextTabWrestler = element(by.className('tab-heading'));
            var checkResult = element(by.css('tr.ng-scope > td:nth-child(2)'));

            basePage.clickNewButton();
            formPage.fillFirstName('Slava');
            formPage.fillLastName('Likholetov');
            formPage.fillDateOfBirthName('04.07.1984');
            formPage.fillMiddleName('Vladimirovich');
            formPage.selectRegion('Odeska');
            formPage.selectFST('Dinamo');
            formPage.selectStyle('FS');
            formPage.selectAge('Junior');
            formPage.selectYear('2017');
            formPage.clickApply();
            mainPage.clickTabWrestlers();
            expect(getTextTabWrestler.getText()).toEqual('Wrestlers');
            formPage.searchFiled('Slava','Likholetov','Vladimirovich');
            basePage.clickSearchButton();
            expect(checkResult.getText()).toEqual(formPage.fullName);
            basePage.clickExistingRecord(formPage.fullName);
            formPage.fillFirstName('Vlad');
            formPage.fillLastName('Shevchenko');
            formPage.fillMiddleName('Petrovich');
            formPage.clickApply();
            mainPage.clickTabWrestlers();
            expect(getTextTabWrestler.getText()).toEqual('Wrestlers');
            formPage.searchFiled('Vlad','Shevchenko','Petrovich');
            basePage.clickSearchButton();
            expect(checkResult.getText()).toEqual(formPage.fullName);

        });

        fit('Delete new entry with valid parameters', function() {
            var getTextTabWrestler = element(by.className('tab-heading'));
            var checkEmptyTable = element(by.css('tbody > tr'));
            var EC = protractor.ExpectedConditions;

            basePage.clickNewButton();
            formPage.fillFirstName('Nikita');
            formPage.fillLastName('Likholetov');
            formPage.fillDateOfBirthName('04.07.1984');
            formPage.fillMiddleName('VIacheslav');
            formPage.selectRegion('Odeska');
            formPage.selectFST('Dinamo');
            formPage.selectStyle('FS');
            formPage.selectAge('Junior');
            formPage.selectYear('2017');
            formPage.clickApply();
            mainPage.clickTabWrestlers();
            expect(getTextTabWrestler.getText()).toEqual('Wrestlers');
            formPage.searchFiled('Nikita','Likholetov','VIacheslav');
            basePage.clickSearchButton();
            basePage.clickExistingRecord(formPage.fullName);
            formPage.clickDelete();
            formPage.clickApplyConfirmationWindow();
            formPage.searchFiled('Nikita','Likholetov','VIacheslav');
            basePage.clickSearchButton();
            browser.wait(EC.invisibilityOf(checkEmptyTable), 5000);

        });
    });
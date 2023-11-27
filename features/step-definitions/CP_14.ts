import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';
import Caso from '../pageobjects/CP_14.page';

const pages = {home5: LoginPage}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
    await LoginPage.login('d@d.com', '11111111');
});

When(/^I click$/, async () => {
    await Caso.login()
    await new Promise(resolve => setTimeout(resolve, 10000));

});
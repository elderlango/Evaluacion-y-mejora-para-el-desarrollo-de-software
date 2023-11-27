import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';
import Caso from '../pageobjects/CP_13.page';

const pages = {home3: LoginPage}

const pages1 = {home3: Caso}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
    await LoginPage.login('d@d.com', '11111111');
    await new Promise(resolve => setTimeout(resolve, 2000));
    await pages1[page].open()
});

When(/^I send (.+)$/, async (msn) => {
    await Caso.login(msn)
    await new Promise(resolve => setTimeout(resolve, 2000));
});
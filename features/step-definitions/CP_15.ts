import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';
import Caso from '../pageobjects/CP_15.page';

const pages = {articulos: LoginPage}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
    await LoginPage.login('d@d.com', '11111111');
    await new Promise(resolve => setTimeout(resolve, 5000));

});

When(/^I send (.+)$/, async (cont) => {
    await Caso.login(cont)
    await new Promise(resolve => setTimeout(resolve, 10000));

});
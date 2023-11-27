import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/CP_7.page';

const pages = {
    extrano: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
    await new Promise(resolve => setTimeout(resolve, 8000));
});

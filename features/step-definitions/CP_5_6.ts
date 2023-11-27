import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (.+) and (.+)$/, async (fullname, email) => {
    await LoginPage.login(fullname, email)
});

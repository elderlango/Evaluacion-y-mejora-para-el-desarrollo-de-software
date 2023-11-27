import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import SigninPage from '../pageobjects/signIn.page';

const pages = {
    signin: SigninPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (.+) and (.+) and (.+) and (.+) and (.+)$/, async (fullname, email, phone, password, passwordcon) => {
    await SigninPage.login(fullname, email, phone, password, passwordcon)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SigninPage.flashAlert).toBeExisting();
    await expect(SigninPage.flashAlert).toHaveTextContaining(message);
});
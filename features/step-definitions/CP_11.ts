import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';
import ProductosPage from '../pageobjects/producto.page';
import Caso from '../pageobjects/CP_11.page';

const pages = {home2: LoginPage}

const pages1 = {home2: ProductosPage}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
    await LoginPage.login('d@d.com', '11111111');
    await new Promise(resolve => setTimeout(resolve, 2000));
    await pages1[page].open()
    await new Promise(resolve => setTimeout(resolve, 2000));
});

When(/^I click$/, async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await Caso.login()
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(ProductosPage.flashAlert).toBeExisting();
    await expect(ProductosPage.flashAlert).toHaveTextContaining(message);
});
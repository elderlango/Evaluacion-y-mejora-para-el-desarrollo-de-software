import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';
import ProductosPage from '../pageobjects/producto.page';
import Caso from '../pageobjects/CP_10.page';

const pages = {product: LoginPage}

const pages1 = {product: ProductosPage}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
    await LoginPage.login('d@d.com', '11111111');
    await new Promise(resolve => setTimeout(resolve, 2000));
    await pages1[page].open()
    await new Promise(resolve => setTimeout(resolve, 2000));

});

When(/^I modify (.+) and (.+) and (.+) and (.+) and (.+)$/, async (name, price, amount, desc, img) => {
    await Caso.login(name, price, amount, desc, img)
    await new Promise(resolve => setTimeout(resolve, 2000));

});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(ProductosPage.flashAlert).toBeExisting();
    await expect(ProductosPage.flashAlert).toHaveTextContaining(message);
});
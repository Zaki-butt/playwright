import {test, expect} from '@playwright/test'
import {LoginPage} from '../../pages/login.page'
import {InventoryPage} from '../../pages/inventory.page'
import {CartPage} from '../../pages/cart.page'

let loginPage, inventoryPage, cartPage;

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);

    await page.goto(process.env.TEST_URL);
    await loginPage.login(process.env.TEST_USERNAME, process.env.TEST_PASSWORD);
    await loginPage.isLoginSuccessful();
});

test('e2e shopping', async({page}) =>{
    await inventoryPage.addItem('Sauce Labs Backpack');
    await inventoryPage.addItem('Sauce Labs Bike Light');
    await inventoryPage.addItem('Sauce Labs Bolt T-Shirt');

    await inventoryPage.goToCart();

    await expect(page).toHaveURL(/cart\.html/);

    await cartPage.removeItem('Sauce Labs Bike Light');

    await page.goBack();

    await inventoryPage.addItem('Sauce Labs Fleece Jacket');

    await inventoryPage.goToCart();

    await cartPage.checkout();

    await expect(page).toHaveURL(/checkout-step-one\.html/);

    await cartPage.addInfo('demo', 'user', '123');

    await expect(page).toHaveURL(/checkout-step-two\.html/);

    await cartPage.finish();

    await expect(page).toHaveURL(/checkout-complete\.html/);

    await cartPage.verifyOrderSuccess();

    await cartPage.backHome();

    await expect(page).toHaveURL(/inventory\.html/);

    await cartPage.logout();
    await expect(page).toHaveURL(/saucedemo\.com/);


});
import {expect} from '@playwright/test'

export class CartPage{
    constructor(page){
        this.page = page;
        this.checkoutBtn = page.locator('data-test=checkout');
        this.firstName = page.locator('data-test=firstName');
        this.lastName = page.locator('data-test=lastName');
        this.postalCode = page.locator('data-test=postalCode');
        this.continueBtn = page.getByRole('button', {name: 'Continue'});
        this.finishBtn = page.getByRole('button', {name:'Finish'});
        this.successMssg = page.getByRole('heading', {name : 'Thank you for your order!'});
        this.backHomeBtn = page.getByRole('button', {name: 'Back Home' });
        this.openMenu = page.getByRole('button', {name: 'Open Menu'});
        this.logoutBtn = page.getByRole('link', { name: 'Logout' });
    }

    removeItemByName(name){
        return this.page
            .locator('.cart_item')
            .filter({ hasText: name })
            .locator('button');
    }


    async removeItem(name){
        await this.removeItemByName(name).click();
    }

    async checkout(){
        await this.checkoutBtn.click();
    }

    async addInfo(fname, lname, zip){
        await this.firstName.fill(fname);
        await this.lastName.fill(lname);
        await this.postalCode.fill(zip);
        await this.continueBtn.click();
    }

    async finish(){
        await this.finishBtn.click();
    }

    async verifyOrderSuccess(){
        await expect(this.successMssg).toBeVisible();
    }

    async backHome(){
        await this.backHomeBtn.click();
    }

    async logout() {
        await this.openMenu.click();
        await this.logoutBtn.click();
    }

}
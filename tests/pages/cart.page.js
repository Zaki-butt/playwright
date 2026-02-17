export class CartPage{
    constructor(page){
        this.page = page;
        this.checkoutBtn = page.locator('[data-test=checkout]');
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
}
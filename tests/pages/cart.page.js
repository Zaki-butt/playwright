export class CartPage{
    constructor(page){
        this.page = page;
        this.checkoutBtn = page.locator('[data-test=checkout]');
    }

    // removeItemByname(name){
    //     return this.page.locator(`text=${name}`).locator('..').locator('button');
    // }

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
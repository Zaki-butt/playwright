export class InventoryPage{
    constructor(page){
        this.page = page;
        this.cartIcon = page.locator('[data-test=shopping-cart-link]');
    }

    // addItemByName(name){
    //     return this.page.locator(`text=${name}`).locator('..').locator('button');
    // }

    addItemByName(name){
        return this.page
            .locator('.inventory_item')
            .filter({ hasText: name })
            .locator('button');
    }


    async addItem(name){
        await this.addItemByName(name).click();
    }

    async goToCart(){
        await this.cartIcon.click();
    }
}
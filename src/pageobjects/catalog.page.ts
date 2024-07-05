import {$} from '@wdio/globals'
import Page from "./page.ts";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CatalogPage extends Page {
    public get sauceLabsBackPack() {
        return $('~Sauce Labs Backpack');
    }

    public open() {
        return super.open('login');
    }

    public async clickOnProduct(productName: string) {
       await $(`~${productName}`).click();
    }
}

export default new CatalogPage();

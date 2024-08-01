import CatalogPage from '../pageobjects/catalog.page.ts'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        console.log('hello')

        await CatalogPage.clickOnProduct('Sauce Labs Backpack');
    })
})
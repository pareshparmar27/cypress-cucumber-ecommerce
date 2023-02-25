import { Product } from '../custom-types/Product'

/**
 * A home page class contains all locators and method to perform operations on them
 */
class HomePage {
  readonly menu = '#customer_menu_top'
  readonly menuText = '.menu_text'
  readonly categories = '.categorymenu > li > a'
  readonly subCategories = '.subcategories'
  readonly heading = '.maintext'
  readonly productList = '.list-inline > div:not(.clearfix)'
  readonly checkout = '[data-id="menu_checkout"]'
  readonly returningCustomer = '.returncustomer'
  readonly currency = '.language'
  readonly currencyDropdown = '.currency'
  readonly name = '.prdocutname'
  readonly image = '.thumbnail > a > img'
  readonly view = '.details'
  readonly writeReview = '.compare'
  readonly price = '.price > div'
  readonly outOfStock = '.nostock'
  readonly addToCart = '.productcart'

  /**
   * Performs click operation with given text
   * @param text A button/link name
   */
  doClick(text: string) {
    cy.get(this.getLocator(text)).first().click()
  }

  /**
   * Searches for products as per given category and subcategory
   * @param category A category
   * @param subcategory A subcategory
   */
  search(category: string, subcategory: string) {
    cy.get(this.categories).contains(category).realHover().siblings(this.subCategories).contains(subcategory).click()
  }

  /**
   * Get sub category element
   * @returns A sub category heading element
   */
  getSubCategoryHeading() {
    return cy.get(this.heading)
  }

  /**
   * Select a currency
   * @param currency a name of currency
   */
  selectCurrency(currency: string) {
    cy.get(this.currency).click().find(this.currencyDropdown).contains(currency).click()
  }

  /**
   * Get the locator as per given name
   * @param name A name of the locator
   * @returns A locator as a string
   */
  private getLocator(name: string) {
    switch (name.toLowerCase()) {
      case 'login':
        return this.menu
      case 'checkout':
        return this.checkout
      default:
        throw new Error('locator not found for ' + name)
    }
  }
}
export const homePage = new HomePage()

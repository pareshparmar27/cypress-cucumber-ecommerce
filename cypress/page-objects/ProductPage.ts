/**
 * A product page class contains all locators and method to perform operations on them
 *
 * @format
 */

class ProductPage {
  readonly name = '.prdocutname'
  readonly price = '.oneprice'
  readonly cart = '.productcart'
  readonly image = '.thumbnail > a > img'
  readonly localImage = '#product_details .local_image img'
  readonly sort = '#sort'
  readonly productList = '.list-inline > div:not(.clearfix)'

  /**
   * Get product cart
   * @returns list of products cart
   */
  getCart() {
    return cy.get(this.cart)
  }

  /**
   * Get product images
   * @returns list of product images
   */
  getImages() {
    return cy.get(this.image)
  }

  /**
   * Get product local image
   * @returns list of product local images
   */
  getLocalImages() {
    return cy.get(this.localImage)
  }

  sortBy(type: string) {
    return cy.get(this.sort).select(type)
  }

  getProductsName() {
    let names: string[] = []
    return cy
      .get(this.productList)
      .each((product) => {
        names = Cypress._.concat(names, product.find(this.name).text())
      })
      .then(() => {
        return names
      })
  }

  getProductsPrice() {
    let prices = []
    return cy
      .get(this.productList)
      .each((product) => {
        prices = Cypress._.concat(
          prices,
          product
            .find(this.price)
            .text()
            .replace(/[^\w\s]/gi, '')
        )
      })
      .then(() => {
        return prices.map((price) => {
          return Number(price)
        })
      })
  }
}
export const productPage = new ProductPage()

/**
 * A product page class contains all locators and method to perform operations on them
 */
class ProductPage {
  readonly name = '.prdocutname'
  readonly price = '.oneprice'
  readonly cart = '.productcart'
  readonly image = '.thumbnail > a > img'
  readonly localImage = '#product_details .local_image img'

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
}
export const productPage = new ProductPage()

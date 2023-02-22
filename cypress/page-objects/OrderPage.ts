export class OrderPage {
  readonly confirmOrder = '[title="Confirm Order"]'
  readonly heading = '.maintext'

  /**
   * Performs click operation with given text
   * @param text A button/link name
   */
  doClick(text: string) {
    cy.get(this.getLocator(text)).click()
  }

  /**
   * Get the locator as per given name
   * @param name A name of the locator
   * @returns A locator as a string
   */
  private getLocator(name: string) {
    switch (name.toLowerCase()) {
      case 'confirm order':
        return this.confirmOrder
      default:
        throw new Error('locator not found for ' + name)
    }
  }
}
export const orderPage = new OrderPage()

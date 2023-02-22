/**
 * A login page class contains all locators and method to perform operations on them
 */
class LoginPage {
  readonly loginName = '#loginFrm_loginname'
  readonly password = '#loginFrm_password'
  readonly loginButton = '[title="Login"]'
  readonly alertError = '.alert-error'
  readonly continue = '[title="Continue"]'
  readonly radioButtonList = '[type="radio"]'

  /**
   * login to the application with user credentails
   * @param username A username of the customer
   * @param password A password of the customer
   */
  doLogin(username: string, password: string) {
    cy.get(this.loginName).type(username)
    cy.get(this.password).type(password)
    cy.get(this.loginButton).click()
  }

  /**
   * Performs click operation with given text
   * @param text A button/link name
   */
  doClick(text: string) {
    return cy.contains(text).click()
  }

  /**
   * Get the locator as per given name
   * @param name A name of the locator
   * @returns A locator as a string
   */
  private getLocator(name: string) {
    switch (name.toLowerCase()) {
      case 'confirm order':
        return this.continue
      case 'continue':
        return this.continue
      default:
        throw new Error('locator not found for ' + name)
    }
  }
}
export const loginPage = new LoginPage()

import { faker } from '@faker-js/faker'

/**
 * A guest page class contains all locators and method to perform operations on them
 */
export class GuestPage {
  readonly firstname = '#guestFrm_firstname'
  readonly lastname = '#guestFrm_lastname'
  readonly email = '#guestFrm_email'
  readonly address_one = '#guestFrm_address_1'
  readonly city = '#guestFrm_city'
  readonly state = '#guestFrm_zone_id'
  readonly zipcode = '#guestFrm_postcode'
  readonly country = '#guestFrm_country_id'
  readonly continue = '[title="Continue"]'

  /**
   * add user details
   */
  addDetails() {
    this.enterPersonalDetails()
    this.enterAddress()
  }

  /**
   *  enter personal details using faker-js
   */
  enterPersonalDetails() {
    cy.get(this.firstname).type(faker.name.firstName())
    cy.get(this.lastname).type(faker.name.lastName())
    cy.get(this.email).type(faker.internet.email())
  }

  /**
   * enter address using faker-js
   */
  enterAddress() {
    cy.get(this.address_one).type(faker.address.streetAddress())
    cy.get(this.city).type(faker.address.city())
    cy.get(this.state).select('Aberdeen')
    cy.get(this.zipcode).type(faker.address.zipCode())
    cy.get(this.country).select('Austria')
    this.doClick('Continue')
  }

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
      case 'continue':
        return this.continue
      default:
        throw new Error('locator not found for ' + name)
    }
  }
}
export const guestPage = new GuestPage()

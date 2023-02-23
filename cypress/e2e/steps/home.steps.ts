import { Then, When } from '@badeball/cypress-cucumber-preprocessor'
import { sortBy } from '../../operations/product.operations'
import { guestPage } from '../../page-objects/GuestPage'
import { homePage } from '../../page-objects/HomePage'
import { loginPage } from '../../page-objects/LoginPage'
import { orderPage } from '../../page-objects/OrderPage'
import { productPage } from '../../page-objects/ProductPage'

When('a user searches for product {string} under {string}', (subcategory: string, category: string) => {
  homePage.search(category, subcategory)
})

Then('a user gets list of desired {string} product', (subcategory: string) => {
  homePage.getSubCategoryHeading().should('have.text', subcategory)
  cy.get(homePage.productList).should('have.length.greaterThan', 0)
})

Then('a user can order a product with registered account', () => {
  productPage.getCart().first().click()
  homePage.doClick('Checkout')
  cy.get(loginPage.radioButtonList).check('register')
  loginPage.doLogin('username', 'password')
  orderPage.doClick('Confirm Order')
  cy.contains('Your Order Has Been Processed!').should('be.visible')
})

Then('a user can order a product with guest account', () => {
  productPage.getCart().first().click()
  homePage.doClick('Checkout')
  cy.get(loginPage.radioButtonList).check('guest')
  loginPage.doClick('Continue')
  guestPage.addDetails()
  orderPage.doClick('Confirm Order')
  cy.contains('Your Order Has Been Processed!').should('be.visible')
})

Then('a user gets list of products sorted by {string}', (option: string) => {
  sortBy(option)
})

import { Then, When } from '@badeball/cypress-cucumber-preprocessor'
import { homePage } from '../../page-objects/HomePage'

When('a user searches for product {string} under {string}', (subcategory: string, category: string) => {
  homePage.search(category, subcategory)
})

Then('a user gets list of desired {string} product', (subcategory: string) => {
  homePage.getSubCategoryHeading().should('have.text', subcategory)
  cy.get(homePage.productList).should('have.length.greaterThan', 0)
})

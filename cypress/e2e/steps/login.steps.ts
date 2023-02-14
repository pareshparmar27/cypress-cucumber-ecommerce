import { Given } from '@badeball/cypress-cucumber-preprocessor'

Given('a user launches an application', () => {
  cy.visit('https://automationteststore.com/')
})

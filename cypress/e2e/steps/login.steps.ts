import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import { loginPage } from '../../page-objects/LoginPage'

Given('a user launches an application', () => {
  cy.visit('https://automationteststore.com/')
})

When('a user enters valid credentials', () => {
  loginPage.doClick('Login')
  loginPage.doLogin('username', 'password')
})

When('a user enters invalid credentials', () => {
  loginPage.doClick('Login')
  loginPage.doLogin('username', 'password123')
})

Then('a user gets logged in', () => {
  cy.contains('Welcome back test').should('be.visible')
})

Then('a user gets error message', () => {
  cy.contains('Error: Incorrect login or password provided.').should('be.visible')
})

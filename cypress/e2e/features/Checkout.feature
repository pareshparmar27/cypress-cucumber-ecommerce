Feature: Product Checkout Test

    Background: Launch an application
        Given a user launches an application

    @checkout @registered-account @regression
    Scenario: Order a shampoo product with register account
        When  a user searches for product "Shampoo" under "Hair Care"
        Then  a user can order a product with registered account

    @checkout @guest-account @regression
    Scenario: Order a eyes product with guest account
        When  a user searches for product "Eyes" under "Skincare"
        Then  a user can order a product with guest account
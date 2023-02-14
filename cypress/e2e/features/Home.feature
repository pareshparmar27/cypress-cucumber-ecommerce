Feature: Home Test

    Background: Launch an application
        Given a user launches an application

    Scenario Outline: Search <sub-category> under <category> category
        When  a user searches for product "<sub-category>" under "<category>"
        Then  a user gets list of desired "<sub-category>" product
        Examples:
            | category              | sub-category  |
            | Apparel & accessories | Shoes         |
            | Makeup                | Eyes          |
            | Skincare              | Sun           |
            | Fragrance             | Women         |
            | Men                   | Body & Shower |
            | Hair Care             | Shampoo       |
            | Books                 | Audio CD      |
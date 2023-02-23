Feature: Product Test

    Background: Launch an application
        Given a user launches an application

    Scenario Outline: Sort <sub-category> by <option> under <category> category
        When  a user searches for product "<sub-category>" under "<category>"
        Then  a user gets list of desired "<sub-category>" product
        And   a user gets list of products sorted by "<option>"
        Examples:
            | option           | category              | sub-category |
            | Price Low > High | Apparel & accessories | Shoes        |
            | Price High > Low | Apparel & accessories | Shoes        |
# | Name A - Z       | Apparel & accessories | Shoes        |
# | Name Z - A       | Apparel & accessories | Shoes        |
import { homePage } from '../page-objects/HomePage'

/**
 * Check the product currency
 * @param currency A name of currency
 */
export function checkProductsCurrency(currency: string) {
  const currencyCode = getCurrencyCode(currency)
  cy.get(homePage.productList).each((product) => {
    expect(product.find(homePage.price).text()).to.have.string(currencyCode)
  })
}

/**
 * Get the code of the currency
 * @param currency A name of currency
 * @returns the code of the currency
 */
function getCurrencyCode(currency: string) {
  switch (currency) {
    case 'Euro':
      return '€'
    case 'US Dollar':
      return '$'
    case 'Pound Sterling':
      return '£'
    default:
      throw new Error("Sorry, We don't support " + currency + ' currency at the moment!!!')
  }
}

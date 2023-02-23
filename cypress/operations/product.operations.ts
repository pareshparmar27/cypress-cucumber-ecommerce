import { productPage } from '../page-objects/ProductPage'

export function sortBy(option: string) {
  productPage.sortBy(option)
  checkProductsDetail(option)
}

function checkProductsDetail(option: string) {
  switch (option) {
    case 'Price Low > High':
      checkProductPriceOrder('ASC')
      break
    case 'Price High > Low':
      checkProductPriceOrder('DESC')
      break
    case 'Name A - Z':
      checkProductNameOrder('ASC')
      break
    case 'Name Z - A':
      checkProductNameOrder('DESC')
      break
    default:
      throw new Error('Invalid sorting option applied!!!')
  }
}

function checkProductPriceOrder(order: string) {
  productPage.getProductsPrice().then((prices) => {
    expect(prices).to.have.ordered.members(performNumberSort(order, prices))
  })
}

function checkProductNameOrder(order: string) {
  productPage.getProductsName().then((names) => {
    cy.log('Actual', JSON.stringify(names))
    cy.log('Expected', JSON.stringify(performStringSort(order, names)))
    expect(names).to.equal(performStringSort(order, names))
  })
}

function performNumberSort(order: string, list: number[]) {
  switch (order) {
    case 'ASC':
      return list.sort((x, y) => {
        return x - y
      })
    case 'DESC':
      return list.sort((x, y) => {
        return y - x
      })
  }
}

function performStringSort(order: string, list: string[]) {
  switch (order) {
    case 'ASC':
      return list.sort()
    case 'DESC':
      return list.reverse()
  }
}

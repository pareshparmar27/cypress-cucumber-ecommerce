import { productPage } from '../page-objects/ProductPage'

/**
 * Checks products details in sorted order
 * @param option sort by option
 */
export function checkSortedProductsDetail(option: string) {
  sortBy(option)
}

/**
 * perform sorting on the products list
 * @param option sort by option
 */
function sortBy(option: string) {
  switch (option) {
    case 'Price Low > High':
      checkProductPriceOrder(option, 'ASC')
      break
    case 'Price High > Low':
      checkProductPriceOrder(option, 'DESC')
      break
    case 'Name A - Z':
      checkProductNameOrder(option, 'ASC')
      break
    case 'Name Z - A':
      checkProductNameOrder(option, 'DESC')
      break
    default:
      throw new Error('Invalid sorting option applied!!!')
  }
}

/**
 * Checks products price in sorted order
 * @param option sort by option
 * @param order sort order
 */
function checkProductPriceOrder(option: string, order: string) {
  productPage.getProductsPrice().then((currentList) => {
    productPage.sortBy(option)
    productPage.getProductsPrice().then((actualList) => {
      expect(actualList).to.have.ordered.members(performNumberSort(order, currentList))
    })
  })
}

/**
 * Checks products name in sorted order
 * @param option sort by option
 * @param order sort order
 */
function checkProductNameOrder(option: string, order: string) {
  productPage.getProductsName().then((currentList) => {
    productPage.sortBy(option)
    productPage.getProductsName().then((actualList) => {
      expect(actualList).to.have.ordered.members(performStringSort(order, currentList))
    })
  })
}

/**
 * perofrm number sort
 * @param order sort order
 * @param list A list to be sorted
 * @returns
 */
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

/**
 * perofrm string sort
 * @param order sort order
 * @param list A list to be sorted
 * @returns
 */
function performStringSort(order: string, list: string[]) {
  switch (order) {
    case 'ASC':
      return list.sort()
    case 'DESC':
      return list.sort().reverse()
  }
}

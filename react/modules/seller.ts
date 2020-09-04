import { Item } from 'vtex.product-context'

export function getSeller(item: Item) {
  const availableSeller = item.sellers.find((seller) => {
    return seller?.commertialOffer?.AvailableQuantity > 0
  })

  if (!availableSeller) {
    return item.sellers[0]
  }

  return availableSeller
}

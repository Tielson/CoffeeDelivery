/* eslint-disable no-unused-vars */
import { CartProps } from '../../hook/cart'
import { ActionTypes } from './Actions'

export function CartReducers(state: CartProps[], action: any) {
  if (action.type === ActionTypes.ADD_NEW_ITEM) {
    const containsCoffeeInTheCart = state.findIndex(
      (coffee: CartProps) => coffee.coffes.id === action.payload.coffes.id,
    )
    if (containsCoffeeInTheCart === -1) {
      return [
        ...state,
        { coffes: action.payload.coffes, quantity: action.payload.quantity },
      ]
    } else {
      const existingItem: any = state[containsCoffeeInTheCart]
      const updatedItem: any = {
        ...existingItem,
        quantity: action.payload.quantity + existingItem.quantity,
      }
      return [
        ...state.slice(0, containsCoffeeInTheCart),
        updatedItem,
        ...state.slice(containsCoffeeInTheCart + 1),
      ]
    }
  }
  if (action.type === ActionTypes.REMOVE_ITEM) {
    const foundItemIndex = state.findIndex(
      (item: CartProps) => item.coffes.id === action.payload.productId,
    )
    if (foundItemIndex !== -1) {
      return [
        ...state.slice(0, foundItemIndex),
        ...state.slice(foundItemIndex + 1),
      ]
    }
  }
  if (action.type === ActionTypes.INCREMENT_ITEM) {
    return state.map((item) =>
      item.coffes.id === action.payload.productId
        ? { ...item, quantity: item.quantity + 1 }
        : item,
    )
  }

  if (action.type === ActionTypes.DECREMENT_ITEM) {
    return state.map((item) =>
      item.coffes.id === action.payload.productId
        ? item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
        : item,
    )
  }
  if (action.type === ActionTypes.DELETE_CART) {
    return []
  }
  return state
}

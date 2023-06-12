import { CartProps } from '../../hook/cart'

export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_ITEM = 'INCREMENT_ITEM',
  DECREMENT_ITEM = 'DECREMENT_ITEM',
  DELETE_CART = 'DELETE_CART',
}

export function addNewItemAction(newCoffee: CartProps) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      coffes: newCoffee.coffes,
      quantity: newCoffee.quantity,
    },
  }
}
export function incrementItemAction(productId: string) {
  return {
    type: ActionTypes.INCREMENT_ITEM,
    payload: {
      productId,
    },
  }
}
export function decrementItemAction(productId: string) {
  return {
    type: ActionTypes.DECREMENT_ITEM,
    payload: {
      productId,
    },
  }
}
export function RemoveItemAction(productId: string) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      productId,
    },
  }
}
export function DeleteItemAction() {
  return {
    type: ActionTypes.DELETE_CART,
  }
}

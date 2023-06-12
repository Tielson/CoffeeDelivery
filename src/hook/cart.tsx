import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import {
  DeleteItemAction,
  RemoveItemAction,
  addNewItemAction,
  decrementItemAction,
  incrementItemAction,
} from '../Reduces/Cart/Actions'
import { CartReducers } from '../Reduces/Cart/Reducer'

export interface CoffeProps {
  id: string
  image: string | undefined
  price: number
  title: string
}
export interface CartProps {
  coffes: CoffeProps
  quantity: number
}

interface CartProviderProps {
  cart: CartProps[]
  addCoffeToCart: (product: CoffeProps, quantity: number) => void
  result: number
  deleteCart: () => void
  removeFromCart: (productId: string) => void
  increaseQuantity: (productId: string) => void
  decreaseQuantity: (productId: string) => void
}

interface Props {
  children: React.ReactNode
}

const CartContext = createContext({} as CartProviderProps)

function CartProvider({ children }: Props) {
  const [cart, dispacth] = useReducer(CartReducers, [] as CartProps[])
  const [result, setResult] = useState(0)

  function addCoffeToCart(coffes: CoffeProps, quantity: number) {
    dispacth(addNewItemAction({ coffes, quantity }))
  }

  function removeFromCart(productId: string) {
    dispacth(RemoveItemAction(productId))
  }

  function increaseQuantity(productId: string) {
    dispacth(incrementItemAction(productId))
  }

  function decreaseQuantity(productId: string) {
    dispacth(decrementItemAction(productId))
  }

  function deleteCart() {
    dispacth(DeleteItemAction())
  }

  useEffect(() => {
    const quantities = cart?.map((item) => item.quantity)
    const totalQuantity = quantities.reduce((acc, curr) => acc + curr, 0)
    setResult(totalQuantity)
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        addCoffeToCart,
        result,
        deleteCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

function Cart() {
  const context = useContext(CartContext)
  return context
}

export { Cart, CartProvider }

import React, { createContext, useState, useContext } from 'react'

interface CoffeProps {
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
  quantityOfCoffees: () => number
  apagarCart: () => void
  removeFromCart: (productId: string) => void
  increaseQuantity: (productId: string) => void
  decreaseQuantity: (productId: string) => void
}

interface Props {
  children: React.ReactNode
}

const CartContext = createContext({} as CartProviderProps)

function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<CartProps[]>([])
  console.log(cart)
  function addCoffeToCart(coffes: CoffeProps, quantity: number) {
    const containsCoffeeInTheCart = cart.findIndex(
      (coffe) => coffe.coffes.id === coffes.id,
    )
    if (containsCoffeeInTheCart === -1) {
      return setCart((prevState: any) => [...prevState, { coffes, quantity }])
    } else {
      const existingItem = cart[containsCoffeeInTheCart]
      const updatedItem = { ...existingItem, quantity }
      setCart((prevState) => [
        ...prevState.slice(0, containsCoffeeInTheCart),
        updatedItem,
        ...prevState.slice(containsCoffeeInTheCart + 1),
      ])
    }
  }

  function quantityOfCoffees() {
    const quantities = cart.map((item) => item.quantity)
    const totalQuantity = quantities.reduce((acc, curr) => acc + curr, 0)

    return totalQuantity
  }

  function removeFromCart(productId: string) {
    const foundItemIndex = cart.findIndex(
      (item) => item.coffes.id === productId,
    )
    if (foundItemIndex !== -1) {
      setCart((prevState) => [
        ...prevState.slice(0, foundItemIndex),
        ...prevState.slice(foundItemIndex + 1),
      ])
    }
  }

  function increaseQuantity(productId: string) {
    setCart((prevState) =>
      prevState.map((item) =>
        item.coffes.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    )
  }

  function decreaseQuantity(productId: string) {
    setCart((prevState) =>
      prevState.map((item) =>
        item.coffes.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    )
  }

  function apagarCart() {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addCoffeToCart,
        quantityOfCoffees,
        apagarCart,
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

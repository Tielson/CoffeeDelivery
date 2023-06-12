import { Container } from './styles'
import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { Cart } from '../../../../hook/cart'

interface CoffeeProps {
  img: string
  tags: string
  title: string
  description: string
  id: string
}

export function CoffeeCard({ img, id, tags, title, description }: CoffeeProps) {
  const { addCoffeToCart, cart } = Cart()
  const [image, setImage] = useState<string | undefined>(undefined)
  const [quantity, setQuantity] = useState(
    cart.find((coffe) => coffe?.coffes?.id === id)?.quantity || 1,
  )

  function handleToRemove() {
    if (quantity <= 1) {
      // const confirm = window.confirm(
      //   `Certeza que deseja remover ${title} do carrinho`,
      // )
      // if (confirm) {
      //   return removeFromCart(id)
      // }
      return
    }
    setQuantity(quantity - 1)
  }

  useEffect(() => {
    import(`../../../../assets/${img}.svg`)
      .then((module) => setImage(module.default))
      .catch((error) => console.error(error))
  }, [img])
  return (
    <Container>
      <img src={image} alt="" />
      <div className="listTags">
        {tags.split(',').map((tag, index) => (
          <div className="tags" key={index}>
            {tag}
          </div>
        ))}
      </div>
      <div className="title">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="buy">
        <p>
          R$ <span>9,90</span>
        </p>
        <div className="buttons">
          <button type="button" onClick={() => handleToRemove()}>
            <Minus size={14} weight="bold" />
          </button>
          <span>{quantity}</span>
          <button type="button" onClick={() => setQuantity(quantity + 1)}>
            <Plus size={14} weight="bold" />
          </button>
        </div>
        <div className="go">
          <button
            type="button"
            onClick={() => {
              addCoffeToCart({ id, image, title, price: 9.9 }, quantity)
            }}
          >
            <ShoppingCartSimple size={19.74} weight="fill" />
          </button>
        </div>
      </div>
    </Container>
  )
}

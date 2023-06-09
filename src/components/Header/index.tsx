import { Container } from './styles'
import logo from '../../assets/Logo.png'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import { Cart } from '../../hook/cart'

export function Header() {
  const { quantityOfCoffees } = Cart()
  return (
    <Container>
      <NavLink to="/" title="Cart">
        <div className="home">
          <img src={logo} alt="" />
        </div>
      </NavLink>
      <div>
        <h1>
          <MapPin size={22} weight="fill" />
          Feira de Santana, BA
        </h1>
        <div className="cart">
          <NavLink to="/checkout" title="Catalogo">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
          {quantityOfCoffees() > 0 && (
            <div className="length">{quantityOfCoffees()}</div>
          )}
        </div>
      </div>
    </Container>
  )
}

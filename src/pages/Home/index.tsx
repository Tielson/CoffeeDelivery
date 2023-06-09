import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { Container, Span, TypesOfCoffee } from './styles'
import img from '../../assets/Coffe.svg'
import { CoffeeCard } from './components/CoffeeCard'

export function Home() {
  return (
    <Container>
      <div className="intro">
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <div className="qualities">
            <div>
              <Span statuscolor={'yellowdark'}>
                <ShoppingCart />
              </Span>
              <p>Compra simples e segura</p>
            </div>
            <div>
              <Span statuscolor="yellow">
                <Timer size={16} weight="fill" />
              </Span>
              <p>Entrega rápida e rastreada</p>
            </div>
            <div>
              <Span statuscolor="text">
                <Package size={16} weight="fill" />
              </Span>
              <p> Embalagem mantém o café intacto</p>
            </div>
            <div>
              <Span statuscolor="purple">
                <Coffee size={16} weight="fill" />
              </Span>
              <p>O café chega fresquinho até você</p>
            </div>
          </div>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      <TypesOfCoffee>
        <h1>Nossos cafés</h1>
        <div className="list">
          <CoffeeCard
            id="1"
            img="image1"
            tags="Tradicional"
            title="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
          />
          <CoffeeCard
            id="2"
            img="Image2"
            tags="Tradicional"
            title="Expresso Americano"
            description="Expresso diluído, menos intenso que o tradicional"
          />
          <CoffeeCard
            id="3"
            img="Image3"
            tags="Tradicional"
            title="Expresso Cremoso"
            description="Café expresso tradicional com espuma cremosa"
          />
          <CoffeeCard
            id="4"
            img="Image4"
            tags="Tradicional, gelado"
            title="Expresso Gelado"
            description="Bebida preparada com café expresso e cubos de gelo"
          />
          <CoffeeCard
            id="5"
            img="Image5"
            tags="Tradicional, com leite"
            title="Café com Leite"
            description="Meio a meio de expresso tradicional com leite vaporizado"
          />
          <CoffeeCard
            id="6"
            img="Image6"
            tags="Tradicional, com leite"
            title="Latte"
            description="Uma dose de café expresso com o dobro de leite e espuma cremosa"
          />
          <CoffeeCard
            id="7"
            img="Image7"
            tags="especial, alcoólico,gelado"
            title="Capuccino"
            description="Bebida com canela feita de doses iguais de café, leite e espuma"
          />
          <CoffeeCard
            id="8"
            img="Image8"
            tags="Tradicional, com leite"
            title="Macchiato"
            description="Café expresso misturado com um pouco de leite quente e espuma"
          />
          <CoffeeCard
            id="9"
            img="Image9"
            tags="Tradicional, com leite"
            title="Mocaccino"
            description="Café expresso com calda de chocolate, pouco leite e espuma"
          />
          <CoffeeCard
            id="10"
            img="Image10"
            tags="especial, com leite"
            title="Chocolate Quente"
            description="Bebida feita com chocolate dissolvido no leite quente e café"
          />
          <CoffeeCard
            id="11"
            img="Image11"
            tags="especial,alcoólico,gelado"
            title="Cubano"
            description="Drink gelado de café expresso com rum, creme de leite e hortelã"
          />
          <CoffeeCard
            id="12"
            img="Image12"
            tags="especial"
            title="Havaiano"
            description="Bebida adocicada preparada com café e leite de coco"
          />
          <CoffeeCard
            id="13"
            img="Image13"
            tags="especial"
            title="Árabe"
            description="Bebida preparada com grãos de café árabe e especiarias"
          />
          <CoffeeCard
            id="14"
            img="Image14"
            tags="especial,alcoólico"
            title="Irlandês"
            description="Bebida a base de café, uísque irlandês, açúcar e chantilly"
          />
        </div>
      </TypesOfCoffee>
    </Container>
  )
}

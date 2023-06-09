import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Timer,
  Trash,
} from '@phosphor-icons/react'
import img from '../../assets/Illustration.svg'
import { Container, Span } from './styles'
import { useEffect, useState } from 'react'
import { Cart } from '../../hook/cart'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const newFormValidationSchema = zod.object({
  cep: zod.string().min(6, 'Informe o cep'),
  rua: zod.string().min(6, 'Informe nome da rua'),
  num: zod.string().min(1, 'Informe o cep'),
  complemento: zod.string().min(4, 'Informe o complemento'),
  bairro: zod.string().min(4, 'Informe nome do bairro'),
  cidade: zod.string().min(6, 'Informe nome da cidade'),
  uf: zod.string().min(2, 'Informe o cep'),
  paymentMethod: zod.string().min(1, 'Adicione o metodo de pamento'),
})

type newFormData = zod.infer<typeof newFormValidationSchema>

export function Checkout() {
  const [info, setInfo] = useState<newFormData>(() => {
    const savedData = localStorage.getItem('@valuesForms-001')
    return savedData ? JSON.parse(savedData) : ({} as newFormData)
  })
  const { register, handleSubmit, setValue, watch, reset } =
    useForm<newFormData>({
      resolver: zodResolver(newFormValidationSchema),
      defaultValues: info,
    })

  const [isFormValid, setIsFormValid] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  const [formSubmitted, setFormSubmitted] = useState(false)
  const {
    cart,
    decreaseQuantity,
    increaseQuantity,
    quantityOfCoffees,
    removeFromCart,
    apagarCart,
  } = Cart()

  const selectedFields = watch()

  const handleOptionChange = (option: string) => {
    setSelectedOption(option)
    setValue('paymentMethod', option)
  }

  function handleSubmitForm(event: newFormData) {
    setInfo(event)
    localStorage.setItem('@valuesForms-001', JSON.stringify(event))
    setFormSubmitted(true)
    apagarCart()
    reset()
  }

  useEffect(() => {
    const isFieldsFilled = Object.values(selectedFields).every(
      (field) => field !== '',
    )
    if (cart.length > 0) {
      setIsFormValid(isFieldsFilled)
    }
  }, [selectedFields, cart])
  return (
    <Container>
      {formSubmitted === false ? (
        <form onSubmit={handleSubmit(handleSubmitForm)} action="">
          <div>
            <h1>Complete seu pedido</h1>
            <div className="formgroup">
              <div className="address">
                <div>
                  <MapPinLine size={32} />
                </div>
                <div>
                  <h2>Endereço de Entrega</h2>
                  <h3>Informe o endereço onde deseja receber seu pedido</h3>
                </div>
              </div>
              <div className="forms">
                <input type="text" placeholder="CEP" {...register('cep')} />
                <input
                  type="text"
                  placeholder="RUA"
                  id="rua"
                  {...register('rua')}
                />
                <input
                  type="text"
                  placeholder="NUMERO"
                  id="numero"
                  {...register('num')}
                />
                <input
                  type="text"
                  placeholder="COMPLEMENTO                                               opcional"
                  id="complemento"
                  {...register('complemento')}
                />

                <input
                  type="text"
                  placeholder="BAIRRO"
                  {...register('bairro')}
                />
                <input
                  type="text"
                  placeholder="CIDADE"
                  id="cidade"
                  {...register('cidade')}
                />
                <input
                  type="text"
                  placeholder="UF"
                  id="uf"
                  {...register('uf')}
                />
              </div>
              <div className="payment">
                <div>
                  <CurrencyDollar size={32} />
                </div>
                <div>
                  <h2>Endereço de Entrega</h2>
                  <h3>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </h3>
                </div>
              </div>
              <div className="buttonstypes">
                <input
                  value={selectedOption}
                  type="hidden"
                  {...register('paymentMethod')}
                />
                <button
                  type="button"
                  onClick={() => handleOptionChange('credit')}
                  className={selectedOption === 'credit' ? 'selected' : ''}
                >
                  <CreditCard size={16} />
                  Cartão de Crédito
                </button>
                <button
                  type="button"
                  onClick={() => handleOptionChange('debit')}
                  className={selectedOption === 'debit' ? 'selected' : ''}
                >
                  <Bank size={16} />
                  Cartão de Débito
                </button>
                <button
                  type="button"
                  onClick={() => handleOptionChange('cash')}
                  className={selectedOption === 'cash' ? 'selected' : ''}
                >
                  <Money size={16} />
                  Dinheiro
                </button>
              </div>
            </div>
          </div>
          <div>
            <h1>Cafés selecionados</h1>
            <div className="coffes">
              <div className="boxCoffees">
                {cart &&
                  cart.map((item) => {
                    const total = item.coffes.price * item.quantity
                    return (
                      <div className="item" key={item.coffes.id}>
                        <img src={item.coffes.image} alt="" />
                        <div className="title">
                          <h2>{item.coffes.title}</h2>
                          <div className="re_inc_dec">
                            <div className="buttons">
                              <button
                                type="button"
                                onClick={() => decreaseQuantity(item.coffes.id)}
                              >
                                <Minus size={14} weight="bold" />
                              </button>
                              <span>{item.quantity}</span>
                              <button
                                type="button"
                                onClick={() => increaseQuantity(item.coffes.id)}
                              >
                                <Plus size={14} weight="bold" />
                              </button>
                            </div>
                            <div className="remove">
                              <button
                                type="button"
                                onClick={() => removeFromCart(item.coffes.id)}
                              >
                                <Trash size={16} />
                                REMOVER
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="value">R$ {total.toFixed(2)}</div>
                      </div>
                    )
                  })}
              </div>
              <div className="result">
                <h3>Total de itens</h3>
                <h3>R$ {(9.9 * quantityOfCoffees()).toFixed(2)}</h3>
              </div>
              <div className="result">
                <h3>Entrega</h3>
                <h3>{isFormValid === false ? `R$ 00.00` : `R$ 10.00`}</h3>
              </div>
              <div className="result">
                <h4>Total</h4>
                <h4>
                  R$
                  {(
                    9.9 * quantityOfCoffees() +
                    (isFormValid === false ? 0 : 10)
                  ).toFixed(2)}
                </h4>
              </div>
              <div className="finished">
                <button type="submit" disabled={!isFormValid}>
                  CONFIRMAR PEDIDO
                </button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <div>
          <div>
            <h5>Uhu! Pedido confirmado</h5>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          </div>
          <div className="imgText">
            <div className="box">
              <div className="grad">
                <div className="separator">
                  <Span statuscolor={'purple'}>
                    <MapPin size={16} />
                  </Span>
                  <div className="text">
                    <h6>
                      Entrega em{' '}
                      <strong>
                        {info.rua}, {info.num}
                      </strong>{' '}
                    </h6>
                    {info.bairro} - {info.cidade}, {info.uf}
                  </div>
                </div>
                <div className="separator">
                  <Span statuscolor={'yellow'}>
                    <Timer size={16} color="#e8dede" weight="fill" />
                  </Span>
                  <div className="text">
                    <h6>Previsão de entrega </h6>
                    <strong>20 min - 30 min</strong>
                  </div>
                </div>
                <div className="separator">
                  <Span statuscolor={'yellowdark'}>
                    <CurrencyDollar size={16} color="#fafafa" />
                  </Span>
                  <div className="text">
                    <h6>Pagamento na entrega </h6>
                    <strong>
                      {info.paymentMethod === 'credit'
                        ? 'Cartão de Crédito'
                        : info.paymentMethod === 'debit'
                        ? 'Cartão de Débito'
                        : 'Dinheiro'}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      )}
    </Container>
  )
}

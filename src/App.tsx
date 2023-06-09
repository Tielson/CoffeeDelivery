import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { CartProvider } from './hook/cart'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartProvider>
          <Router />
        </CartProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
margin: 0;
padding: 0;
box-sizing: border-box;
}

:root{
  font-size: 62.5%;
}

input:focus{
  outline: 0;
  box-shadow: 0 0 0 .2rem ${(props) => props.theme.YELLOW_DARK};
}
select:focus{
  outline: 0;
  box-shadow: 0 0 0 .2rem ${(props) => props.theme.PURPLE_DARK};
}

body{
  background: ${(props) => props.theme.BACKGROUND};
  color:  ${(props) => props.theme.BASE_TEXT};
  font-size: 1.6rem;
}

body, input, textarea, button{
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}

button {
      background: none;
      border: none;
      cursor: pointer;
      svg {
        color: ${({ theme }) => theme.PURPLE};
      }
    }

body, input, button, textarea{
     outline: none;
}

a{
    text-decoration: none;
}
`

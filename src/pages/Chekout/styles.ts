import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-top: 40px;

  form {
    display: grid;
    grid-template-columns: 640px auto;
    gap: 32px;
  }

  .formgroup {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 32px;

    width: 640px;

    background: ${({ theme }) => theme.BASE_CARD};
    border-radius: 6px;
  }

  .address svg {
    color: ${({ theme }) => theme.YELLOW_DARK};
  }
  .address {
    display: flex;
    gap: 8px;
  }

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;

    color: ${({ theme }) => theme.BASE_SUBTITLE};
  }

  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;

    color: ${({ theme }) => theme.BASE_TEXT};
  }

  /* .form {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  } */

  .forms {
    gap: 12px;
    display: flex;
    flex-wrap: wrap;
  }

  #rua {
    width: 100%;
  }
  #complemento {
    width: 348px;
  }
  #cidade {
    width: 276px;
  }

  #uf {
    width: 60px;
  }

  h1 {
    margin-bottom: 15px;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;

    color: ${({ theme }) => theme.BASE_SUBTITLE};
  }

  input {
    padding: 12px;
    background: ${({ theme }) => theme.BASE_INPUT};
    border: 1px solid #e6e5e5;
    border-radius: 4px;
    width: 200px;
  }

  .payment {
    display: flex;
    gap: 8px;
  }

  .payment svg {
    color: ${({ theme }) => theme.PURPLE};
  }

  .buttonstypes {
    display: flex;
    gap: 12px;

    button {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;

      text-transform: uppercase;

      color: ${({ theme }) => theme.BASE_TEXT};
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 16px;
      gap: 12px;

      width: 178.67px;
      height: 51px;

      background: ${({ theme }) => theme.BASE_BUTTON};
      border-radius: 6px;
    }
    button:hover {
      background: #d7d5d5;
    }
  }

  .coffes {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 24px;

    background: ${({ theme }) => theme.BASE_CARD};
    border-radius: 6px 44px;
  }

  .item {
    display: flex;
    gap: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e6e5e5;
    width: 100%;
    justify-content: space-between;

    img {
      width: 64px;
    }
    .buttons {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      gap: 4px;

      width: 72px;
      height: 32px;

      background: ${({ theme }) => theme.BASE_BUTTON};
      border-radius: 0.6rem;
    }
    .buttons button {
      width: 72px;
      height: 32px;
      padding: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        color: ${({ theme }) => theme.PURPLE};
      }
      svg:hover {
        color: ${({ theme }) => theme.PURPLE_DARK};
      }
      button:hover {
        background: #d7d5d5;
      }
    }
  }

  .title {
    gap: 8px;
    display: flex;
    flex-direction: column;
  }
  .remove button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 8px;
    gap: 4px;

    width: 91px;
    height: 32px;

    background: ${({ theme }) => theme.BASE_BUTTON};
    border-radius: 6px;
    svg {
      color: ${({ theme }) => theme.PURPLE};
    }

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;

    text-transform: uppercase;

    color: ${({ theme }) => theme.BASE_TEXT};
  }

  .remove button:hover {
    background: #d7d5d5;
    svg {
      color: ${({ theme }) => theme.PURPLE_DARK};
    }
  }
  .re_inc_dec {
    display: flex;
    gap: 8px;
  }

  .value {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;

    color: ${({ theme }) => theme.BASE_TEXT};
  }
  .result {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    h4 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;

      color: ${({ theme }) => theme.BASE_SUBTITLE};
    }
  }

  .finished {
    width: 100%;
  }
  .finished button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 8px;
    gap: 4px;

    width: 100%;
    height: 46px;

    background: ${({ theme }) => theme.YELLOW};
    border-radius: 6px;
  }

  .finished button:hover {
    background: ${({ theme }) => theme.YELLOW_DARK};
  }

  .finished button:hover:disabled {
    background: ${({ theme }) => theme.YELLOW};
  }

  .selected {
    button {
    }
    background: ${(props) => props.theme.PURPLE_LIGHT} !important;
    box-shadow: 0 0 0 0.2rem ${(props) => props.theme.PURPLE};
  }

  h5 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;

    color: ${(props) => props.theme.YELLOW_DARK};
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 4rem;

    color: ${(props) => props.theme.BASE_SUBTITLE};
    font-stretch: 100;
  }
  .box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 32px;
    width: 525px;
    height: 264px;
    border-radius: 6px 36px;
    border: 1px solid;
    background: 5px 10px
      linear-gradient(102.89deg, #dbac2c9c 2.61%, #8047f8a6 98.76%);
  }
  .grad {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 32px;
    position: relative;
    width: 521px;
    left: -39px;
    top: -39px;
    height: 266px;
    border-radius: 6px 33px;
    border: 1px solid;
    background: ${(props) => props.theme.WHITE};
  }

  .separator {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 12px;

    h6 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;

      color: ${(props) => props.theme.BASE_TEXT};
    }
    .text {
      display: flex;
      flex-direction: column;
    }
  }

  .imgText {
    display: flex;
    align-items: center;
    gap: 102px;
  }

  .boxCoffees {
    overflow: auto;
    max-height: 350px;
  }
  .boxCoffees > div:nth-child(n + 2) {
    margin-top: 2.4rem;
  }
`

interface ColorProps {
  statuscolor: 'yellowdark' | 'yellow' | 'purple'
}

const STATUS_COLOR = {
  yellowdark: 'YELLOW_DARK',
  yellow: 'YELLOW',
  purple: 'PURPLE',
} as const

export const Span = styled.span<ColorProps>`
  flex-direction: row;
  justify-content: center;
  padding: 0.8rem;

  width: 3.2rem;
  height: 3.2rem;

  background: ${(props) => props.theme[STATUS_COLOR[props.statuscolor]]};
  border-radius: 100rem;

  svg {
    color: ${({ theme }) => theme.WHITE};
  }
`

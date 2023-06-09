import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 3.2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  h1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.8rem;
    gap: 0.4rem;
    border-radius: 0.6rem;
    background: ${({ theme }) => theme.PURPLE_LIGHT};
    color: ${({ theme }) => theme.PURPLE_DARK};

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 130%;

    svg {
      color: ${({ theme }) => theme.PURPLE};
    }
  }

  .cart a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.8rem;
    gap: 0.4rem;

    width: 3.8rem;
    height: 3.8rem;

    background: ${({ theme }) => theme.YELLOW_LIGHT};
    border-radius: 0.6rem;

    svg {
      color: ${({ theme }) => theme.YELLOW_DARK};
    }
  }

  .cart a:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem ${(props) => props.theme.YELLOW_DARK};
  }

  .length {
    justify-content: center;
    position: relative;
    right: 3.3rem;
    bottom: 1.6rem;
    width: 2rem;
    height: 2rem;
    background: #c47f17;
    border-radius: 100rem;
    font-weight: 700;
    font-size: 1.2rem;
    color: #ffffff;

    color: ${({ theme }) => theme.WHITE};
  }
`

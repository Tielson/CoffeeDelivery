import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  max-width: 25.6rem;
  height: 31rem;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
  padding: 0 2rem 2rem;

  background: ${({ theme }) => theme.BASE_CARD};
  border-radius: 0.6rem 3.6rem;

  img {
    position: relative;
    top: -2rem;
  }

  .tags {
    margin: 1.2rem 0 1.6rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.4rem 0.8rem;
    border-radius: 10rem;

    background: ${({ theme }) => theme.YELLOW_LIGHT};

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;
    /* identical to box height, or 1.3rem */

    text-transform: uppercase;
    color: ${({ theme }) => theme.YELLOW_DARK};
  }

  .listTags {
    display: flex;
    gap: 0.4rem;
  }
  .title {
    h1 {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 700;
      font-size: 2rem;
      line-height: 130%;
      text-align: center;

      color: ${({ theme }) => theme.BASE_SUBTITLE};
      padding-bottom: 0.8rem;
    }

    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 130%;
      padding-bottom: 3.3rem;

      text-align: center;
    }
  }

  .buy {
    display: flex;
    align-items: center;

    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 130%;

      color: ${({ theme }) => theme.BASE_TEXT};

      span {
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 2.4rem;
        line-height: 130%;

        text-align: right;
      }
    }
  }

  .buttons {
    margin: 0 0.8rem 0 2.3rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.8rem;
    gap: 0.4rem;

    width: 7.2rem;
    height: 3.8rem;

    background: ${({ theme }) => theme.BASE_BUTTON};
    border-radius: 0.6rem;

    svg {
      color: ${({ theme }) => theme.PURPLE};
    }
    svg:hover {
      color: ${({ theme }) => theme.PURPLE_DARK};
    }
  }

  .go {
    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0.8rem;

      background: ${({ theme }) => theme.PURPLE};
      border-radius: 0.6rem;

      svg {
        color: ${({ theme }) => theme.WHITE};
      }
    }
    button:focus {
      outline: 0;
      box-shadow: 0 0 0 0.2rem ${(props) => props.theme.PURPLE_DARK};
    }
    button:focus:hover {
      outline: 0;
      box-shadow: 0 0 0 0.2rem ${(props) => props.theme.YELLOW};
    }
    button:hover {
      background: ${({ theme }) => theme.PURPLE_DARK};
    }
  }
`

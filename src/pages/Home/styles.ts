import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  .intro {
    display: flex;
    align-items: center;
    height: 54.4rem;

    h1 {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 4.8rem;
      line-height: 130%;
      padding-bottom: 1.6rem;

      color: ${({ theme }) => theme.BASE_TITLE};
    }
    h2 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 2rem;
      line-height: 130%;
      padding-bottom: 6.6rem;

      color: ${({ theme }) => theme.BASE_SUBTITLE};
      font-stretch: 100;
    }
    .qualities {
      display: grid;
      grid: repeat(2, 6rem) / auto-flow;
    }

    div > * {
      display: flex;
      align-items: center;
      gap: 1.2rem;
      p {
        align-items: center;
        gap: 1.2rem;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 130%;

        color: ${({ theme }) => theme.BASE_TEXT};
      }
    }
  }
`

interface ColorProps {
  statuscolor: 'yellowdark' | 'text' | 'yellow' | 'purple'
}

const STATUS_COLOR = {
  yellowdark: 'YELLOW_DARK',
  text: 'BASE_TEXT',
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

export const TypesOfCoffee = styled.div`
  display: flex;
  width: 100%;
  gap: 5rem;
  flex-direction: column;
  .list {
    display: flex;
    flex-wrap: wrap;
    gap: 3.2rem;
  }

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 130%;
    color: ${({ theme }) => theme.BASE_SUBTITLE};
  }
`

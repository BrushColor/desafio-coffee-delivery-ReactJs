import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
  background: ${(props) => props.theme['white']};
  border-radius: 0.5rem 2.25rem;
  padding: 1.5rem;
  text-align: center;
  width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  img {
    width: 7.5rem;
    margin-top: -3.125rem;
  }

  h3 {
    font:
      700 1.25rem / 1.3 'Baloo 2',
      sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font:
      400 0.875rem / 1.3 'Roboto',
      sans-serif;
    color: ${(props) => props.theme['base-label']};
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.25rem;

  span {
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    font:
      700 0.625rem / 1.3 'Roboto',
      sans-serif;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    text-transform: uppercase;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.625rem;
  width: auto;

  strong {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font:
      800 1.5rem / 1.3 'Baloo 2',
      sans-serif;
    color: ${(props) => props.theme['base-text']};

    span {
      font:
        400 0.875rem / 1.3 'Roboto',
        sans-serif;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background: ${(props) => props.theme['base-button']};
    padding: 0.5rem;
    border-radius: 0.5rem;

    button {
      display: flex;
      height: 1.375rem;
      padding: 0.5rem;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
      border-radius: 0.375rem;
      cursor: pointer;
      background: none;
      overflow: hidden;

      svg {
        color: ${(props) => props.theme['purple']};
        transition: all 0.1s ease-in-out;

        &:hover {
          color: ${(props) => props.theme['purple-dark']};
        }

        filter: brightness(0.8);
      }
    }
  }

  span {
    font:
      400 1rem / 1.3 'Roboto',
      sans-serif;
    color: ${(props) => props.theme['base-title']};
  }

  .cart-button {
    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme.white};
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.375rem;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme['purple']};
    }
  }
`;

export const CartContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;

  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
  width: 17.5rem;

  p {
    font:
      700 1rem / 1.3 'Roboto',
      sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.5rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  border-radius: 0.5rem;

  button {
    display: flex;
    height: 1.375rem;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    border-radius: 0.375rem;
    cursor: pointer;
    background: none;
    overflow: hidden;
  }

  svg {
    color: ${(props) => props.theme['purple']};
    transition: all 0.1s ease-in-out;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }

    filter: brightness(0.8);
  }

  span {
    font:
      400 1rem / 1.3 'Roboto',
      sans-serif;
    color: ${(props) => props.theme['base-title']};
  }
`;

export const ButtonSelection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const RemoveButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;

  button {
    display: flex;
    height: 1.375rem;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    border-radius: 0.375rem;
    background: none;
    overflow: hidden;
  }

  svg {
    color: ${(props) => props.theme['purple']};
    transition: all 0.1s ease-in-out;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }

    filter: brightness(0.8);
  }
`;

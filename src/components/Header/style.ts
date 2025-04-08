import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0; 
  width: 100%;
`;

export const Location = styled.div`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  gap: 0.25rem;
  background-color: ${(props) => props.theme['purple-light']};
  border-radius: 0.375rem;
  color: ${(props) => props.theme['purple-dark']};
  font:
    400 0.875rem / 1.3 'Roboto',
    sans-serif;

  svg {
    color: ${(props) => props.theme['purple-dark']};
  }
`;

export const CartButton = styled(Link)`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme['yellow-light']};
  position: relative;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    position: absolute;
    top: -0.5625rem;
    right: -0.5625rem;
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};

    width: 1.375rem;
    height: 1.375rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    font:
      700 0.875rem / 1.3 'Roboto',
      sans-serif;
    text-align: center;
  }
`;

export const NavActions = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;


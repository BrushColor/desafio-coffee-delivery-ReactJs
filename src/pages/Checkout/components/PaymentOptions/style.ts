import styled, { css } from 'styled-components';

interface PaymentCardItemProps {
  isSelected: boolean;
}

export const PaymentCardContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const PaymentCardItem = styled.button<PaymentCardItemProps>`
  flex: 1;
  padding: 1rem;
  background-color: ${({ theme }) => theme['base-button']};
  border-radius: 0.375rem;
  border: 1px solid transparent;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  font:
    400 0.75rem / 1.6 'Roboto',
    sans-serif;
  color: ${({ theme }) => theme['base-text']};
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;

  svg {
    color: ${({ theme }) => theme['purple']};
  }

  &:hover {
    background-color: ${({ theme }) => theme['base-hover']};
  }

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      background-color: ${theme['purple-light']};
      border: 1px solid ${theme.purple};
    `}
`;

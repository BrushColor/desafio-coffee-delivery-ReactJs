import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  max-width: 90rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 2rem;

  h2 {
    font:
      700 1.125rem/1.3 'Baloo 2',
      sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.9375rem;
  }
`;

export const CheckoutFormContainer = styled.form`
  background-color: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;
  border-radius: 0.375rem;
  width: 40rem;
`;

export const TitleSectionYellow = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
    width: 1.375rem;
    height: 1.375rem;
  }

  div {
    h3 {
      color: ${(props) => props.theme['base-subtitle']};
      font:
        400 1rem/1.3 'Roboto',
        sans-serif;
      margin-bottom: 0.125rem;
    }

    p {
      color: ${(props) => props.theme['base-text']};
      font:
        400 0.875rem/1.3 'Roboto',
        sans-serif;
    }
  }
`;

export const TitleSectionPurple = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['purple-dark']};
    width: 1.375rem;
    height: 1.375rem;
  }

  div {
    h3 {
      color: ${(props) => props.theme['base-subtitle']};
      font:
        400 1rem/1.3 'Roboto',
        sans-serif;
      margin-bottom: 0.125rem;
    }

    p {
      color: ${(props) => props.theme['base-text']};
      font:
        400 0.875rem/1.3 'Roboto',
        sans-serif;
    }
  }
`;

export const AddressFields = styled.div`
  display: grid;
  gap: 1rem;

  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 0.25rem;
    font:
      400 0.875rem/1.3 'Roboto',
      sans-serif;
    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-label']};

    &:focus {
      outline: none;
      border-color: ${(props) => props.theme['yellow-dark']};

      &::placeholder {
        opacity: 0;
      }
    }

    &.active {
      color: ${(props) => props.theme['base-text']};
    }
  }

  input:nth-child(1) {
    grid-column: span 1;
  }

  input:nth-child(2) {
    grid-column: span 3;
  }

  div:nth-child(3) {
    display: grid;
    grid-template-columns: 12.5rem 1fr;
    gap: 0.75rem;
    grid-column: span 3;
  }

  div:nth-child(4) {
    display: flex;
    gap: 0.75rem;
    grid-column: span 3;

    input:nth-child(1) {
      flex: 0 0 12.5rem;
    }

    input:nth-child(2) {
      flex: 1 1 auto;
      min-width: 17.25rem;
    }

    input:nth-child(3) {
      max-width: 3.75rem;
      padding: 0.75rem;
      display: flex;
      text-align: center;
    }
  }
`;

export const LastInputWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  grid-column: span 3;

  input:nth-child(1) {
    flex: 0 0 12.5rem;
  }

  input:nth-child(2) {
    flex: 1;
    min-width: 17.25rem;
  }

  div {
    max-width: 3.75rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    input {
      width: 3.75rem;
      padding: 0.75rem;
      text-align: center;
    }

    span {
      font-size: 0.75rem;
      color: red;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  flex: 1;
`;

export const InputWithOptional = styled.div`
  position: relative;
  flex: 1;

  input {
    width: 100%;
    padding-right: 3.75rem;
  }

  span {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    font:
      400 0.875rem/1.3 'Roboto',
      sans-serif;
    color: ${(props) => props.theme['base-label']};
    font-style: italic;
  }
`;

export const PaymentMethod = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 1.25rem;
  border-radius: 0.375rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.75rem;
`;

export const PaymentReview = styled.div`
  width: 28rem;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 0.375rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 0.5rem 2.25rem;
`;

export const PaymentOptionsWrapper = styled.div``;

export const Divider = styled.hr`
  border: 1px solid ${({ theme }) => theme['base-button']};
`;

export const OrderSummary = styled.div``;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font:
    400 0.875rem / 1.3 'Roboto',
    sans-serif;
  color: ${({ theme }) => theme['base-text']};
`;

export const SummaryTotal = styled(SummaryRow)`
  font:
    700 1.25rem / 1.3 'Roboto',
    sans-serif;
  color: ${(props) => props.theme['base-subtitle']};
`;

export const ConfirmButton = styled.button`
  background-color: ${({ theme }) => theme['yellow']};
  color: ${({ theme }) => theme['white']};
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 0.375rem;
  font-weight: bold;
  margin-top: 1.5rem;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: ${({ theme }) => theme['yellow-dark']};
  }
`;

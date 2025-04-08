import styled, { keyframes } from 'styled-components';

const vrum = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(0.375rem); }
  50% { transform: translateX(0); }
  75% { transform: translateX(-0.375rem); }
  100% { transform: translateX(0); }
`;

export const SuccessContainer = styled.div`
  margin-top: 7.5rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
  width: 100%;
  max-width: 70rem;
  margin-left: auto;
  margin-right: auto;
`;

export const OrderInfoContainer = styled.div`
  flex: 1;
  min-width: 18.75rem;
  max-width: 35rem;
  margin-right: 6.25rem;

  display: flex;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme['yellow-dark']};
    font:
      800 2rem / 1.3 'Baloo 2',
      sans-serif;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font:
      400 1.25rem / 1.3 'Roboto',
      sans-serif;
  }
`;

export const StyledSection = styled.section`
  flex: 1;
  min-width: 18.75rem;
  max-width: 30.625rem;
  height: auto;
  position: relative;
`;

export const StyledMotoca = styled.img`
  position: absolute;
  bottom: -23.4375rem;
  left: 9.375rem;
  z-index: 2;
  animation: ${vrum} 1.2s ease-in-out infinite;
  width: 100%;
  max-width: 18.75rem;
`;

export const StyledBackground = styled.img`
  position: absolute;
  bottom: -23.4375rem;
  left: 0;
  width: 100%;
  z-index: 1;
`;

export const GradientBorder = styled.div`
  padding: 0.0625rem;
  border-radius: 0.375rem 2.25rem;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.yellow},
    ${(props) => props.theme.purple}
  );
  margin-top: 2.5rem;
  width: fit-content;
`;

export const OrderInfo = styled.div`
  background: ${(props) => props.theme.background};
  border-radius: 0.375rem 2.25rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

import styled from 'styled-components';
import BgHero from '../../assets/bg-hero.png';

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 6.75rem;
  position: relative;

  max-width: 90rem;
  width: 100%;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    left: -10rem;
    width: calc(100% + 20rem);
    height: 100%;
    background: url(${BgHero}) center/cover no-repeat;
    z-index: -1;

    left: 50%;
    transform: translateX(-50%);

    @media (min-width: 90rem) {
      left: 50%;
      transform: translateX(-50%);
      width: 100vw;
    }
  }
`;

export const TitleIntro = styled.div`
  margin: 5.875rem 0 3rem 0; 

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font: 800 3rem / 1.3 'Baloo 2', sans-serif;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font: 400 1.25rem / 1.3 'Roboto', sans-serif;
  }
`;

export const PurchaseBenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: 16rem 18.4375rem;
  gap: 1rem 2rem;
  align-items: start;
  width: fit-content;
`;

export const BenefitItem = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    background-color: ${(props) => props.theme[props.color]};
    color: white;
    border-radius: 50%;
    padding: 0.5rem;
  }

  span {
    font:
      400 1rem / 1.3 'Roboto',
      sans-serif;
    color: ${(props) => props.theme['base-text']};
  }
`;

export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CoffeeHeroWrapper = styled.div`
  margin-left: 4rem;
  margin-top: 5.875rem;
`;

export const CoffeeTitle = styled.h2`
  font:
    800 2rem / 1.3 'Baloo 2',
    sans-serif;
  color: ${(props) => props.theme['base-subtitle']};
  margin: 2rem 0 3.375rem;
`;

export const CoffeeListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4.375rem 0;

  max-width: 90rem;
  width: 100%;
  margin: 0 auto;
`;

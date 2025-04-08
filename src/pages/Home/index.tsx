import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';

import {
  BenefitItem,
  CoffeeTitle,
  CoffeeHeroWrapper,
  CoffeeListContainer,
  IntroContainer,
  IntroContent,
  PurchaseBenefitsContainer,
  TitleIntro,
} from './style';

import CoffeeHero from '../../assets/coffee-hero.png';
import { coffees } from '../../../coffees.json';
import { CoffeeItem } from '../../components/CoffeeItem';
import { CoffeeImageKeys } from '../../utils/coffeeImages';

const benefits = [
  {
    icon: <ShoppingCart size={32} weight="fill" />,
    text: 'Compra simples e segura',
    color: 'yellow-dark',
  },
  {
    icon: <Package size={32} weight="fill" />,
    text: 'Embalagem mantém o café intacto',
    color: 'base-text',
  },
  {
    icon: <Timer size={32} weight="fill" />,
    text: 'Entrega rápida e rastreada',
    color: 'yellow',
  },
  {
    icon: <Coffee size={32} weight="fill" />,
    text: 'O café chega fresquinho até você',
    color: 'purple',
  },
];

export function Home() {
  return (
    <>
      <IntroContainer>
        <IntroContent>
          <TitleIntro>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </TitleIntro>
          <PurchaseBenefitsContainer>
            {benefits.map((benefit, index) => (
              <BenefitItem key={index} color={benefit.color}>
                {benefit.icon}
                <span>{benefit.text}</span>
              </BenefitItem>
            ))}
          </PurchaseBenefitsContainer>
        </IntroContent>
        <CoffeeHeroWrapper>
          <img src={CoffeeHero} alt="Imagem ilustrativa de um copo de café" />
        </CoffeeHeroWrapper>
      </IntroContainer>

      <CoffeeTitle>Nossos Cafés</CoffeeTitle>
      <CoffeeListContainer>
        {coffees.map((coffee) => (
          <CoffeeItem
            key={coffee.id}
            {...coffee}
            image={coffee.image as CoffeeImageKeys}
          />
        ))}
      </CoffeeListContainer>
    </>
  );
}

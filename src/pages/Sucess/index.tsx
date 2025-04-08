import {
  GradientBorder,
  OrderInfo,
  OrderInfoContainer,
  StyledBackground,
  StyledMotoca,
  StyledSection,
  SuccessContainer,
} from './style';

import PlantAndRoad from '../../assets/success-img/PlantAndRoad.svg';
import DeliveryMan from '../../assets/success-img/delivery-man.svg';

import { MapPin, Timer, CurrencyDollar } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import { SuccessInfoItem } from './SuccessInfoItem';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Success() {
  const theme = useTheme();
  const navigate = useNavigate();

  const lastOrder = JSON.parse(localStorage.getItem('lastOrder') || 'null');

  useEffect(() => {
    if (!lastOrder) {
      navigate('/');
    }
  }, [lastOrder, navigate]);

  const paymentMethodLabel = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    money: 'Dinheiro',
  };

  const payment =
    paymentMethodLabel[
      lastOrder?.paymentMethod as keyof typeof paymentMethodLabel
    ] || '';

  return (
    <SuccessContainer>
      <OrderInfoContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <GradientBorder>
          <OrderInfo>
            <SuccessInfoItem
              icon={<MapPin weight="fill" size={16} color={theme.white} />}
              deliveryLabel="Entrega em"
              address={`${lastOrder?.address?.rua}, ${lastOrder?.address?.numero}`}
              cityInfo={`${lastOrder?.address?.bairro} - ${lastOrder?.address?.cidade}, ${lastOrder?.address?.uf}`}
              color="purple"
            />

            <SuccessInfoItem
              icon={<Timer weight="fill" size={16} color={theme.white} />}
              deliveryLabel="Previsão de entrega"
              address="20 min - 30 min"
              cityInfo=""
              color="yellow"
            />

            <SuccessInfoItem
              icon={
                <CurrencyDollar weight="fill" size={16} color={theme.white} />
              }
              deliveryLabel="Pagamento na entrega"
              address={payment}
              cityInfo=""
              color="yellow-dark"
            />
          </OrderInfo>
        </GradientBorder>
      </OrderInfoContainer>

      <StyledSection>
        <StyledMotoca src={DeliveryMan} alt="Entregador na moto" />
        <StyledBackground src={PlantAndRoad} alt="Planta e Estrada" />
      </StyledSection>
    </SuccessContainer>
  );
}

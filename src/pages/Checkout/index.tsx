import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MapPinLine, CurrencyDollar } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

import {
  AddressFields,
  CheckoutContainer,
  CheckoutFormContainer,
  ConfirmButton,
  Divider,
  InputWithOptional,
  InputWrapper,
  LastInputWrapper,
  OrderSummary,
  PaymentMethod,
  PaymentOptionsWrapper,
  PaymentReview,
  SummaryRow,
  SummaryTotal,
  TitleSectionPurple,
  TitleSectionYellow,
} from './style';

import { stateAbbreviations } from '../../utils/stateAbbreviations';
import { CartContext } from '../../contexts/CartContext';
import { CoffeeItem } from '../../components/CoffeeItem';
import { PaymentOptions } from './components/PaymentOptions';
import { CheckoutFormData } from '../../@types/checkout-form-data';

export function Checkout() {
  const { cart, updateQuantity, removeFromCart, clearCart } =
    useContext(CartContext);
  const navigate = useNavigate();
  const validUFs = Object.values(stateAbbreviations);

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CheckoutFormData>({ mode: 'onSubmit' });

  const deliveryFee = 3.5;
  const itemsTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const total = itemsTotal + deliveryFee;

  const onSubmit = (data: CheckoutFormData) => {
    if (!selectedPaymentMethod) {
      alert('⚠️ Por favor, selecione uma forma de pagamento.');
      return;
    }

    if (cart.length === 0) {
      alert('🛒 Seu carrinho está vazio!');
      return;
    }

    const orderData = {
      address: data,
      paymentMethod: selectedPaymentMethod,
      items: cart,
      total,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem('lastOrder', JSON.stringify(orderData));
    localStorage.removeItem('cart');
    clearCart();
    navigate('/success');
  };

  const onError = (errors: any) => {
    const mensagens = Object.values(errors)
      .map((error: any) => error.message)
      .filter(Boolean);

    if (mensagens.length > 0) {
      alert(
        '🚫  Por favor, corrija os campos abaixo::\n\n' + mensagens.join('\n'),
      );
    }
  };

  const renderAddressInputs = () => {
    const cep = watch('cep');
    const rua = watch('rua');
    const numero = watch('numero');
    const complemento = watch('complemento');
    const bairro = watch('bairro');
    const cidade = watch('cidade');
    const ufValue = watch('uf');

    return (
      <AddressFields>
        <input
          type="number"
          placeholder="CEP"
          className={cep ? 'active' : ''}
          {...register('cep', { required: 'O campo CEP é obrigatório' })}
        />

        <input
          type="text"
          placeholder="Rua"
          className={rua ? 'active' : ''}
          {...register('rua', { required: 'O campo Rua é obrigatório' })}
        />

        <InputWrapper>
          <input
            type="number"
            placeholder="Número"
            className={numero ? 'active' : ''}
            {...register('numero', {
              required: 'O campo Número é obrigatório',
              valueAsNumber: true,
            })}
          />

          <InputWithOptional>
            <input
              type="text"
              placeholder="Complemento"
              className={complemento ? 'active' : ''}
              {...register('complemento')}
            />
            <span>Opcional</span>
          </InputWithOptional>
        </InputWrapper>

        <LastInputWrapper>
          <input
            type="text"
            placeholder="Bairro"
            className={bairro ? 'active' : ''}
            {...register('bairro', {
              required: 'O campo Bairro é obrigatório',
            })}
          />

          <input
            type="text"
            placeholder="Cidade"
            className={cidade ? 'active' : ''}
            {...register('cidade', {
              required: 'O campo Cidade é obrigatório',
            })}
          />

          <div>
            <input
              type="text"
              placeholder="UF"
              maxLength={2}
              className={ufValue ? 'active' : ''}
              {...register('uf', {
                required: 'O campo UF é obrigatório',
              })}
              onInput={(e) => {
                const input = e.target as HTMLInputElement;
                input.value = input.value.toUpperCase();
              }}
              onBlur={(e) => {
                const value = e.target.value.toUpperCase();
                if (value && !validUFs.includes(value)) {
                  alert('UF inválida');
                  e.target.value = '';
                }
              }}
            />
          </div>
        </LastInputWrapper>
      </AddressFields>
    );
  };

  return (
    <CheckoutContainer>
      <section>
        <h2>Complete seu pedido</h2>

        <form id="checkout-form" onSubmit={handleSubmit(onSubmit, onError)}>
          <CheckoutFormContainer>
            <TitleSectionYellow as="header">
              <MapPinLine size={24} />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </TitleSectionYellow>

            {renderAddressInputs()}
          </CheckoutFormContainer>

          <PaymentMethod>
            <TitleSectionPurple as="header">
              <CurrencyDollar size={24} />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </TitleSectionPurple>

            <PaymentOptionsWrapper>
              <PaymentOptions
                selected={selectedPaymentMethod}
                onSelect={setSelectedPaymentMethod}
              />
            </PaymentOptionsWrapper>
          </PaymentMethod>
        </form>
      </section>

      <section>
        <h2>Cafés selecionados</h2>

        <PaymentReview>
          {cart.map((item) => (
            <React.Fragment key={item.id}>
              <CoffeeItem
                {...item}
                variant="cart"
                onQuantityChange={(newQty) => updateQuantity(item.id, newQty)}
                onRemove={() => removeFromCart(item.id)}
              />
              <Divider />
            </React.Fragment>
          ))}

          <OrderSummary>
            <SummaryRow>
              <span>Total de itens</span>
              <span>R$ {itemsTotal.toFixed(2).replace('.', ',')}</span>
            </SummaryRow>
            <SummaryRow>
              <span>Entrega</span>
              <span>R$ {deliveryFee.toFixed(2).replace('.', ',')}</span>
            </SummaryRow>
            <SummaryTotal>
              <strong>Total</strong>
              <strong>R$ {total.toFixed(2).replace('.', ',')}</strong>
            </SummaryTotal>

            <ConfirmButton type="submit" form="checkout-form">
              Confirmar pedido
            </ConfirmButton>
          </OrderSummary>
        </PaymentReview>
      </section>
    </CheckoutContainer>
  );
}

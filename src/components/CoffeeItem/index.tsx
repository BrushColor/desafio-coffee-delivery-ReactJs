import { useContext, useState } from 'react';
import { ShoppingCart, Minus, Plus, Trash } from '@phosphor-icons/react';

import {
  CoffeeCardContainer,
  TagsContainer,
  PriceContainer,
  CartContainer,
  CardHeader,
  ButtonWrapper,
  ButtonSelection,
  RemoveButton,
} from './style';

import { CoffeeImageKeys, coffeeImages } from '../../utils/coffeeImages';
import { Coffee } from '../../@types/coffee';
import { CartContext } from '../../contexts/CartContext';

interface CoffeeItemProps extends Coffee {
  variant?: 'card' | 'cart';
  quantity?: number;
  onQuantityChange?: (quantity: number) => void;
  onRemove?: () => void;
}

export function CoffeeItem({
  id,
  image,
  tags,
  name,
  description,
  price,
  variant = 'card',
  quantity: propQuantity,
  onQuantityChange,
  onRemove,
}: CoffeeItemProps) {
  const { addToCart } = useContext(CartContext);
  const [internalQuantity, setInternalQuantity] = useState(1);

  const quantity = variant === 'card' ? internalQuantity : (propQuantity ?? 1);

  function handleIncrease() {
    if (variant === 'card') {
      setInternalQuantity((prev) => prev + 1);
    } else {
      onQuantityChange?.(quantity + 1);
    }
  }

  function handleDecrease() {
    if (quantity > 1) {
      if (variant === 'card') {
        setInternalQuantity((prev) => prev - 1);
      } else {
        onQuantityChange?.(quantity - 1);
      }
    } else if (quantity === 1 && variant === 'cart') {
      const confirm = window.confirm('Deseja remover este item do carrinho?');
      if (confirm) onRemove?.(); 
    }
  }

  function handleAddToCart() {
    addToCart({ id, image, tags, name, description, price }, quantity);
    setInternalQuantity(1);
  }

  if (variant === 'cart') {
    return (
      <CartContainer>
        <img src={coffeeImages[image as CoffeeImageKeys]} alt={name} />
        <div>
          <CardHeader>
            <p>{name}</p>
            <strong>R$ {price.toFixed(2)}</strong>
          </CardHeader>
          <ButtonSelection>
            <ButtonWrapper>
              <button onClick={handleDecrease}>
                <Minus size={16} />
              </button>
              <span>{quantity}</span>
              <button onClick={handleIncrease}>
                <Plus size={16} />
              </button>
            </ButtonWrapper>
            <RemoveButton onClick={onRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ButtonSelection>
        </div>
      </CartContainer>
    );
  }

  return (
    <CoffeeCardContainer>
      <img src={coffeeImages[image as CoffeeImageKeys]} alt={name} />
      <TagsContainer>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagsContainer>
      <h3>{name}</h3>
      <p>{description}</p>
      <PriceContainer>
        <strong>
          <span>R$</span> {price.toFixed(2)}
        </strong>
        <div>
          <button onClick={handleDecrease}>
            <Minus size={16} />
          </button>
          <span>{quantity}</span>
          <button onClick={handleIncrease}>
            <Plus size={16} />
          </button>
        </div>
        <button className="cart-button" onClick={handleAddToCart}>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </PriceContainer>
    </CoffeeCardContainer>
  );
}

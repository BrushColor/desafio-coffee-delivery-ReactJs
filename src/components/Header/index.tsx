import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import logoImg from '../../assets/icons/logo.svg';
import { HeaderContent, Location, CartButton, NavActions } from './style';
import { useLocation } from '../../hooks/useLocation';
import { CartContext } from '../../contexts/CartContext'; 

export function Header() {
  const location = useLocation();
  const { cart } = useContext(CartContext); 
  
  return (
    <HeaderContent>
      <Link to="/">
        <img src={logoImg} alt="Logo do Coffee Delivery" />
      </Link>

      <NavActions>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>
            {location ? `${location.city}, ${location.state}` : 'Buscando...'}
          </span>
        </Location>
        <CartButton to="/checkout">
          <ShoppingCart size={22} weight="fill" />
          {cart.length > 0 && (
            <span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
          )}
        </CartButton>
      </NavActions>
    </HeaderContent>
  );
}

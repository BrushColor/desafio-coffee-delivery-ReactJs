import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { ThemeProvider } from 'styled-components';
import { AppRoutes } from './router/router';
import { CartProvider } from './contexts/CartContext';
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <GlobalStyle />
        <AppRoutes />
      </CartProvider>
    </ThemeProvider>
  );
}

import Americano from '../assets/americano.png';
import Arabe from '../assets/arabe.png';
import CafeComLeite from '../assets/cafe-com-leite.png';
import CafeGelado from '../assets/cafe-gelado.png';
import Capuccino from '../assets/capuccino.png';
import ChocolateQuente from '../assets/chocolate-quente.png';
import Cubano from '../assets/cubano.png';
import Expresso from '../assets/expresso.png';
import ExpressoCremoso from '../assets/expresso-cremoso.png';
import Havaiano from '../assets/havaiano.png';
import Irlandes from '../assets/irlandes.png';
import Latte from '../assets/latte.png';
import Macchiato from '../assets/macchiato.png';
import Mochaccino from '../assets/mochaccino.png';

export const coffeeImages = {
  'americano': Americano,
  'arabe': Arabe,
  'cafe-com-leite': CafeComLeite,
  'cafe-gelado': CafeGelado,
  'capuccino': Capuccino,
  'chocolate-quente': ChocolateQuente,
  'cubano': Cubano,
  'expresso': Expresso,
  'expresso-cremoso': ExpressoCremoso,
  'havaiano': Havaiano,
  'irlandes': Irlandes,
  'latte': Latte,
  'macchiato': Macchiato,
  'mochaccino': Mochaccino,
} as const;

export type CoffeeImageKeys = keyof typeof coffeeImages;
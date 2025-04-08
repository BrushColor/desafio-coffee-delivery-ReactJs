import { CoffeeImageKeys } from '../utils/coffeeImages';

export interface Coffee {
  id: number;
  image: CoffeeImageKeys; 
  tags: string[];
  name: string;
  description: string;
  price: number;
}

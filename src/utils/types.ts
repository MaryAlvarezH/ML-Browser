export interface Item {
  id: string;
  title: string;
  price: {
    amount: number;
    currency: string;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
}

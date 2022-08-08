export interface ItemPreview {
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

export interface ItemDetails extends ItemPreview {
  sold_quantity: number;
  description: string;
}

export interface SearchResults {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: ItemPreview[];
}

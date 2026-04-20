export interface PricingCategory {
  item_tier: number[];
  price: (number | string)[];
  discount: number;
}
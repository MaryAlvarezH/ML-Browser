import { ItemConnditions } from "./enums";

export const parseToCurrency = (
  num: number = 0,
  currency: string = "ARG",
  locale: string = "es-AR"
): any => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(num);
};

export const parseItemConditions = (value: string = "") => {
  switch (value) {
    case ItemConnditions.new:
      return "Nuevo";

    default:
      return value.charAt(0).toLocaleUpperCase() + value.slice(1);
  }
};

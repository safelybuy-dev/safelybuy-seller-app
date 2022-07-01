const GET_CURRENCY = new Intl.NumberFormat(undefined, {
  currency: 'NGN',
  style: 'currency',
});

export const convertToNaira = (number) => GET_CURRENCY.format(number);

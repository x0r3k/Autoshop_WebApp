export default function prepareTotalPrice(amount, price, currency) {
  let total = amount * price;
  total = total.toString();
  let [mainPart, floatPart] = total.split('.');
  return `${currency}${mainPart.slice(0, -3)},${mainPart.slice(-3)}.${floatPart || '00'}`;
}
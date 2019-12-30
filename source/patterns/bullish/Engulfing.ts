import { ICandle } from "../../types";

export default (candles: ICandle[]): boolean => {
  const firstOpen = candles[candles.length - 1].open;
  const firstClose = candles[candles.length - 1].close;
  const secondOpen = candles[candles.length - 0].open;
  const secondClose = candles[candles.length - 0].close;

  return (
    firstClose < firstOpen &&
    firstOpen > secondOpen &&
    firstClose > secondOpen &&
    firstOpen < secondClose
  );
};

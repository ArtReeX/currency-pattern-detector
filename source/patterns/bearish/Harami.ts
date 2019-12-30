import { ICandle } from "../../types";

export default (candles: ICandle[]): boolean => {
  const firstOpen = candles[candles.length - 1].open;
  const firstClose = candles[candles.length - 1].close;
  const firstHigh = candles[candles.length - 1].high;
  const secondOpen = candles[candles.length - 0].open;
  const secondClose = candles[candles.length - 0].close;
  const secondHigh = candles[candles.length - 0].high;
  const secondLow = candles[candles.length - 0].low;

  return (
    firstOpen < secondOpen &&
    firstClose > secondOpen &&
    firstClose > secondClose &&
    firstOpen < secondLow &&
    firstHigh > secondHigh
  );
};

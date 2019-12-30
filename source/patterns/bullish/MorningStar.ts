import { ICandle } from "../../types";

export default (candles: ICandle[]): boolean => {
  const firstOpen = candles[candles.length - 3].open;
  const firstClose = candles[candles.length - 3].close;
  const firstLow = candles[candles.length - 3].low;
  const secondClose = candles[candles.length - 2].close;
  const secondHigh = candles[candles.length - 2].high;
  const secondLow = candles[candles.length - 2].low;
  const thirdOpen = candles[candles.length - 1].open;
  const thirdClose = candles[candles.length - 1].close;

  const firstMidpoint = (firstOpen + firstClose) / 2;
  const isFirstBearish = firstClose < firstOpen;
  const isSmallBodyExists = firstLow > secondLow && firstLow > secondHigh;
  const isThirdBullish = thirdOpen < thirdClose;

  const gapExists =
    secondHigh < firstLow &&
    secondLow < firstLow &&
    thirdOpen > secondHigh &&
    secondClose < thirdOpen;
  const doesCloseAboveFirstMidpoint = thirdClose > firstMidpoint;

  return (
    isFirstBearish &&
    isSmallBodyExists &&
    gapExists &&
    isThirdBullish &&
    doesCloseAboveFirstMidpoint
  );
};

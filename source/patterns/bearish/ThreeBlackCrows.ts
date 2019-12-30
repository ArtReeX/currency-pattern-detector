import { ICandle } from "../../types";

export default (candles: ICandle[]): boolean => {
  const firstOpen = candles[candles.length - 2].open;
  const firstClose = candles[candles.length - 2].close;
  const firstLow = candles[candles.length - 2].low;
  const secondOpen = candles[candles.length - 1].open;
  const secondClose = candles[candles.length - 1].close;
  const secondLow = candles[candles.length - 1].low;
  const thirdOpen = candles[candles.length - 0].open;
  const thirdClose = candles[candles.length - 0].close;
  const thirdLow = candles[candles.length - 0].low;

  const isDownTrend = firstLow > secondLow && secondLow > thirdLow;
  const isAllBearish =
    firstOpen > firstClose &&
    secondOpen > secondClose &&
    thirdOpen > thirdClose;
  const doesOpenWithinPreviousBody =
    firstOpen > secondOpen &&
    secondOpen > firstClose &&
    secondOpen > thirdOpen &&
    thirdOpen > secondClose;

  return isDownTrend && isAllBearish && doesOpenWithinPreviousBody;
};

import { ICandle } from "../../types";

export default (candles: ICandle[]): boolean => {
  const first = candles[candles.length - 3];
  const second = candles[candles.length - 2];
  const third = candles[candles.length - 1];

  const firstMidpoint = (first.open + first.close) / 2;
  const isFirstBullish = first.close > first.open;
  const isSmallBodyExists = first.high < second.low && first.high < second.high;
  const isThirdBearish = third.open > third.close;
  const gapExists =
    second.high > first.high &&
    second.low > first.high &&
    third.open < second.low &&
    second.close > third.open;
  const doesCloseBelowFirstMidpoint = third.close < firstMidpoint;

  return (
    isFirstBullish &&
    isSmallBodyExists &&
    gapExists &&
    isThirdBearish &&
    doesCloseBelowFirstMidpoint
  );
};

import { ICandle } from "../../types";

export default (candles: ICandle[]): boolean => {
  const first = candles[candles.length - 3];
  const secound = candles[candles.length - 2];
  const third = candles[candles.length - 1];

  const isFirstBearish = first.close < first.open;
  const isSecondBearish = secound.close < secound.open;
  const isThirdBullish = third.close > third.open;
  const isFirstGapExists = secound.high < first.low;
  const isDownsideTasukiGap =
    secound.open > third.open &&
    secound.close < third.open &&
    third.close > secound.open &&
    third.close < first.close;

  return (
    isFirstBearish &&
    isSecondBearish &&
    isThirdBullish &&
    isFirstGapExists &&
    isDownsideTasukiGap
  );
};

import { ICandle } from "../../types";
import { isApproximateEqual } from "../../utilities";

export default (candles: ICandle[]): boolean => {
  const first = candles[candles.length - 2];
  const second = candles[candles.length - 1];

  const firstdayMidpoint = (first.close + first.open) / 2;
  const isFirstBullish = first.close > first.open;
  const isSecondBearish = second.close < second.open;
  const isDarkCloudPattern =
    second.open > first.high &&
    second.close < firstdayMidpoint &&
    second.close > first.open;

  return isFirstBullish && isSecondBearish && isDarkCloudPattern;
};

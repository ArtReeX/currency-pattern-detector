import { ICandle } from "../../types";
import Doji from "../common/Doji";
import { is } from "../../checker";

export default (candles: ICandle[]): boolean => {
  const first = candles[candles.length - 3];
  const second = candles[candles.length - 2];
  const third = candles[candles.length - 1];

  const firstMidpoint = (first.open + first.close) / 2;
  const isFirstBullish = is(first, { trend: "UP" });
  const dojiExists = Doji([second]);
  const isThirdBearish = is(third, { trend: "DOWN" });
  const gapExists =
    second.high > first.high &&
    second.low > first.high &&
    third.open < second.low &&
    second.close > third.open;
  const doesCloseBelowFirstMidpoint = third.close < firstMidpoint;

  return (
    isFirstBullish &&
    dojiExists &&
    gapExists &&
    isThirdBearish &&
    doesCloseBelowFirstMidpoint
  );
};

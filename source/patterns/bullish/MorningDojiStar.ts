import { ICandle } from "../../types";
import Doji from "../common/Doji";
import { is } from "../../checker";

export default (candles: ICandle[]): boolean => {
  const first = candles[candles.length - 3];
  const second = candles[candles.length - 2];
  const third = candles[candles.length - 1];

  const firstMidpoint = (first.open + first.close) / 2;
  const isFirstBearish = is(first, { trend: "DOWN" });
  const dojiExists = Doji([second]);
  const isThirdBullish = is(third, { trend: "UP" });
  const gapExists =
    second.high < first.low &&
    second.low < first.low &&
    third.open > second.high &&
    second.close < third.open;
  const doesCloseAboveFirstMidpoint = third.close > firstMidpoint;

  return (
    isFirstBearish &&
    dojiExists &&
    isThirdBullish &&
    gapExists &&
    doesCloseAboveFirstMidpoint
  );
};

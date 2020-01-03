import { ICandle } from "../../types";
import Doji from "./Doji";

export default (candles: ICandle[]): boolean => {
  const first = candles[candles.length - 3];
  const second = candles[candles.length - 2];
  const third = candles[candles.length - 1];

  const isFirstBearish = first.close < first.open;
  const dojiExists = Doji([second]);
  const gapExists =
    second.high < first.low &&
    third.low > second.high &&
    third.close > third.open;
  const isThirdBullish = third.high < first.open;

  return isFirstBearish && dojiExists && gapExists && isThirdBullish;
};

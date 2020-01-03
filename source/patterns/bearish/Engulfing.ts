import { ICandle } from "../../types";

export default (candles: ICandle[]): boolean => {
  const first = candles[candles.length - 2];
  const second = candles[candles.length - 1];

  return (
    first.close > first.open &&
    first.open < second.open &&
    first.close < second.open &&
    first.open > second.close
  );
};

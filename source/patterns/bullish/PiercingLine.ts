import { ICandle } from "../../types";

export default (candles: ICandle[]): boolean => {
  const first = candles[candles.length - 2];
  const second = candles[candles.length - 1];

  const firstMidpoint = (first.open + first.close) / 2;
  const isDowntrend = second.low < first.low;
  const isFirstBearish = first.close < first.open;
  const isSecondBullish = second.close > second.open;
  const isPiercingLinePattern =
    first.low > second.open && second.close > firstMidpoint;

  return (
    isDowntrend && isFirstBearish && isPiercingLinePattern && isSecondBullish
  );
};

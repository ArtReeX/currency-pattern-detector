import { ICandle } from "../../types";
import { percentageOf, isApproximateEqual } from "../../utilities";

export default (candles: ICandle[]): boolean => {
  const open = candles[candles.length - 1].open;
  const close = candles[candles.length - 1].close;
  const high = candles[candles.length - 1].high;
  const low = candles[candles.length - 1].low;

  const longEnough = percentageOf(open - close, high - low) > 10;
  const isEqualSegments = isApproximateEqual(
    percentageOf(high - open, high - low) -
      percentageOf(close - low, high - low),
    100
  );

  return open > close && longEnough && isEqualSegments;
};

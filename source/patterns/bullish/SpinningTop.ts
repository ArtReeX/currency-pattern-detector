import { ICandle } from "../../types";
import { percentageOfNumber, approximateEqual } from "../../utilities";

export default (candles: ICandle[]): boolean => {
  const open = candles[candles.length - 1].open;
  const close = candles[candles.length - 1].close;
  const high = candles[candles.length - 1].high;
  const low = candles[candles.length - 1].low;

  const longEnough = percentageOfNumber(open - close, high - low) > 10;
  const isEqualSegments = approximateEqual(
    percentageOfNumber(high - open, high - low) -
      percentageOfNumber(close - low, high - low),
    100
  );

  return open < close && longEnough && isEqualSegments;
};

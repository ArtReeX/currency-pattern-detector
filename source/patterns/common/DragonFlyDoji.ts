import { ICandle } from "../../types";
import { approximateEqual, percentageOfNumber } from "../../utilities";

export default (candles: ICandle[]): boolean => {
  const open = candles[candles.length - 1].open;
  const close = candles[candles.length - 1].close;
  const high = candles[candles.length - 1].high;
  const low = candles[candles.length - 1].low;

  const isOpenEqualsClose = approximateEqual(open - close, high - low);
  const isHighEqualsOpen = approximateEqual(open - high, high - low);
  const isEqualSegments = approximateEqual(
    percentageOfNumber(high - open, high - low) -
      percentageOfNumber(close - low, high - low),
    100
  );

  return isOpenEqualsClose && isHighEqualsOpen && !isEqualSegments;
};

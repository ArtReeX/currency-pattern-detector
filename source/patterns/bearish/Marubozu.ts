import { ICandle } from "../../types";
import { isApproximateEqual } from "../../utilities";

export default (candles: ICandle[]): boolean => {
  const open = candles[candles.length - 1].open;
  const close = candles[candles.length - 1].close;
  const high = candles[candles.length - 1].high;
  const low = candles[candles.length - 1].low;

  return (
    isApproximateEqual(open - high, high - low) &&
    isApproximateEqual(low - close, high - low) &&
    open > close &&
    open > low
  );
};

import { ICandle } from "../../types";
import { isApproximateEqual } from "../../utilities";

export default (candles: ICandle[]): boolean => {
  const open = candles[candles.length - 1].open;
  const close = candles[candles.length - 1].close;
  const high = candles[candles.length - 1].high;
  const low = candles[candles.length - 1].low;

  return (
    open > close &&
    isApproximateEqual(close - low, high - low) &&
    open - close <= 2 * (high - open)
  );
};

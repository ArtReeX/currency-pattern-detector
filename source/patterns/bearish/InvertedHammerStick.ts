import { ICandle } from "../../types";
import { approximateEqual } from "../../utilities";

export default (candles: ICandle[]): boolean => {
  const open = candles[candles.length].open;
  const close = candles[candles.length].close;
  const high = candles[candles.length].high;
  const low = candles[candles.length].low;

  return (
    open > close &&
    approximateEqual(close, low) &&
    open - close <= 2 * (high - open)
  );
};

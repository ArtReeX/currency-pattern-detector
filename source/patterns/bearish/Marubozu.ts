import { ICandle } from "../../types";
import { approximateEqual } from "../../utilities";

export default (candles: ICandle[]): boolean => {
  const open = candles[candles.length - 1].open;
  const close = candles[candles.length - 1].close;
  const high = candles[candles.length - 1].high;
  const low = candles[candles.length - 1].low;

  return (
    approximateEqual(open - high, high - low) &&
    approximateEqual(low - close, high - low) &&
    open > close &&
    open > low
  );
};

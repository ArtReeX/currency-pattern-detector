import { ICandle } from "../../types";
import { approximateEqual } from "../../utilities";

export default (candles: ICandle[]): boolean => {
  const open = candles[candles.length].open;
  const close = candles[candles.length].close;
  const high = candles[candles.length].high;
  const low = candles[candles.length].low;

  const isOpenEqualsClose = approximateEqual(open, close);
  const isHighEqualsOpen = isOpenEqualsClose && approximateEqual(open, high);
  const isLowEqualsClose = isOpenEqualsClose && approximateEqual(close, low);

  return isOpenEqualsClose && isHighEqualsOpen && !isLowEqualsClose;
};

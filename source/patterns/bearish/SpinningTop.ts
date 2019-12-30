import { ICandle } from "../../types";

export default (candles: ICandle[]): boolean => {
  const open = candles[candles.length].open;
  const close = candles[candles.length].close;
  const high = candles[candles.length].high;
  const low = candles[candles.length].low;

  const bodyLength = Math.abs(close - open);
  const upperShadowLength = Math.abs(high - open);
  const lowerShadowLength = Math.abs(high - low);

  return bodyLength < upperShadowLength && bodyLength < lowerShadowLength;
};

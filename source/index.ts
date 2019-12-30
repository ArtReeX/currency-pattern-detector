import patterns from "./patterns";
import { ICandle, Trend } from "./types";

export default (candles: ICandle[]): Trend => {
  const bullish = Object.values(patterns.bullish).reduce(
    (prev, detector) => (prev += Number(detector(candles))),
    0
  );

  const bearish = Object.values(patterns.bearish).reduce(
    (prev, detector) => (prev += Number(detector(candles))),
    0
  );

  if (bullish > bearish) {
    return Trend.BULLISH;
  }
  if (bullish < bearish) {
    return Trend.BEARISH;
  }

  return Trend.NEUTRAL;
};

import { ICandle } from "../../types";

export default (candles: ICandle[]): boolean => {
  const firstOpen = candles[candles.length - 3].open;
  const firstClose = candles[candles.length - 3].close;
  const firstLow = candles[candles.length - 3].low;
  const secoundOpen = candles[candles.length - 2].open;
  const secoundClose = candles[candles.length - 2].close;
  const secoundHigh = candles[candles.length - 2].high;
  const thirdOpen = candles[candles.length - 1].open;
  const thirdClose = candles[candles.length - 1].close;

  const isFirstBearish = firstClose < firstOpen;
  const isSecondBearish = secoundClose < secoundOpen;
  const isThirdBullish = thirdClose > thirdOpen;
  const isFirstGapExists = secoundHigh < firstLow;
  const isDownsideTasukiGap =
    secoundOpen > thirdOpen &&
    secoundClose < thirdOpen &&
    thirdClose > secoundOpen &&
    thirdClose < firstClose;

  return (
    isFirstBearish &&
    isSecondBearish &&
    isThirdBullish &&
    isFirstGapExists &&
    isDownsideTasukiGap
  );
};

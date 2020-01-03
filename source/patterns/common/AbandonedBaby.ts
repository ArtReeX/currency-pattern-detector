import { ICandle } from "../../types";
import Doji from "./Doji";

export default (candles: ICandle[]): boolean => {
  const firstOpen = candles[candles.length - 3].open;
  const firstClose = candles[candles.length - 3].close;
  const firstLow = candles[candles.length - 3].low;
  const secondOpen = candles[candles.length - 2].open;
  const secondClose = candles[candles.length - 2].close;
  const secondHigh = candles[candles.length - 2].high;
  const secondLow = candles[candles.length - 2].low;
  const thirdOpen = candles[candles.length - 1].open;
  const thirdClose = candles[candles.length - 1].close;
  const thirdHigh = candles[candles.length - 1].high;
  const thirdLow = candles[candles.length - 1].low;

  const isFirstBearish = firstClose < firstOpen;
  const dojiExists = Doji([
    {
      open: secondOpen,
      close: secondClose,
      high: secondHigh,
      low: secondLow
    }
  ]);
  const gapExists =
    secondHigh < firstLow && thirdLow > secondHigh && thirdClose > thirdOpen;
  const isThirdBullish = thirdHigh < firstOpen;

  return isFirstBearish && dojiExists && gapExists && isThirdBullish;
};

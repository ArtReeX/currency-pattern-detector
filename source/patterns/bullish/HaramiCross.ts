import { ICandle } from "../../types";
import { approximateEqual } from "../../utilities";

export default (candles: ICandle[]): boolean => {
  const firstOpen = candles[candles.length - 2].open;
  const firstClose = candles[candles.length - 2].close;
  const firstHigh = candles[candles.length - 2].high;
  const secondOpen = candles[candles.length - 1].open;
  const secondClose = candles[candles.length - 1].close;
  const secondHigh = candles[candles.length - 1].high;
  const secondLow = candles[candles.length - 1].low;

  const isBullishHaramiCrossPattern =
    firstOpen > secondOpen &&
    firstClose < secondOpen &&
    firstClose < secondClose &&
    firstOpen > secondLow &&
    firstHigh > secondHigh;
  const isSecondDayDoji = approximateEqual(secondOpen, secondClose);

  return isBullishHaramiCrossPattern && isSecondDayDoji;
};

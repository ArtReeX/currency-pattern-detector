import { ICandle } from "../../types";
import { isApproximateEqual } from "../../utilities";
import Doji from "../common/Doji";

export default (candles: ICandle[]): boolean => {
  const first = candles[candles.length - 2];
  const second = candles[candles.length - 1];

  const isBearishHaramiCrossPattern =
    first.open > second.open &&
    first.close < second.open &&
    first.close < second.close &&
    first.open > second.low &&
    first.high > second.high;
  const isSecondDayDoji = Doji([second]);

  return isBearishHaramiCrossPattern && isSecondDayDoji;
};

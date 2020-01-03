import { ICandle } from "../../types";
import { averageGain, averageLoss, approximateEqual } from "../../utilities";
import _ from "lodash";

export default (candles: ICandle[]): boolean => {
  const secondLow = candles[candles.length - 2].low;
  const thirdLow = candles[candles.length - 1].low;

  return downwardTrend(candles) && approximateEqual(secondLow, thirdLow);
};

const downwardTrend = (candles: ICandle[]): boolean => {
  const closes = candles.map(c => c.close);
  const sequence = closes.slice(candles.length - 3, candles.length);

  const gains = averageGain(sequence, 2);
  const losses = averageLoss(sequence, 2);

  return _.sum(losses) > _.sum(gains);
};

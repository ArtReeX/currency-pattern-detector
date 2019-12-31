import { ICandle } from "../../types";
import { averageGain, averageLoss } from "../../utilities";
import _ from "lodash";

export default (candles: ICandle[]): boolean => {
  const secondHigh = candles[candles.length - 2].high;
  const thirdHigh = candles[candles.length - 1].high;

  return upwardTrend(candles) && secondHigh === thirdHigh;
};

const upwardTrend = (candles: ICandle[]): boolean => {
  const closes = candles.map(c => c.close);
  const sequence = closes.slice(candles.length - 3, candles.length);

  const gains = averageGain(sequence, 2);
  const losses = averageLoss(sequence, 2);

  return _.sum(gains) > _.sum(losses);
};

import { ICandle } from "../../types";
import { averageGain, averageLoss, isApproximateEqual } from "../../utilities";
import _ from "lodash";

export default (candles: ICandle[]): boolean => {
  const secondHigh = candles[candles.length - 2].high;
  const secondLow = candles[candles.length - 2].low;
  const thirdHigh = candles[candles.length - 1].high;
  const thirdLow = candles[candles.length - 1].low;

  return (
    downwardTrend(candles) &&
    isApproximateEqual(
      secondLow - thirdLow,
      Math.max(secondHigh, thirdHigh) - Math.min(secondLow, thirdLow)
    )
  );
};

const downwardTrend = (candles: ICandle[]): boolean => {
  const closes = candles.map(c => c.close);
  const sequence = closes.slice(candles.length - 3, candles.length);

  const gains = averageGain(sequence, 2);
  const losses = averageLoss(sequence, 2);

  return _.sum(losses) > _.sum(gains);
};

import { ICandle } from "../../types";
import { averageGain, averageLoss, isApproximateEqual } from "../../utilities";
import _ from "lodash";
import { is } from "../../checker";

export default (candles: ICandle[]): boolean => {
  const second = candles[candles.length - 2];
  const third = candles[candles.length - 1];

  return (
    downwardTrend(candles) &&
    is(second, {
      bodySizeMinPercents: 10,
      bodySizeMaxPercents: 50,
      bodyPosition: "TOP",
      trend: "DOWN"
    }) &&
    is(third, {
      bodySizeMinPercents: 10,
      bodySizeMaxPercents: 50,
      bodyPosition: "TOP",
      trend: "UP"
    }) &&
    isApproximateEqual(
      second.close - third.open,
      Math.max(second.high, third.high) - Math.min(second.low, third.low)
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

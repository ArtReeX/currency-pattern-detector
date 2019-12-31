import { ICandle } from "../../types";
import { averageGain, averageLoss } from "../../utilities";
import _ from "lodash";
import BearishHammerStick from "./HammerStick";
import BullishHammerStick from "../bullish/HammerStick";

export default (candles: ICandle[]): boolean =>
  upwardTrend(candles) && includesHammer(candles);

const upwardTrend = (candles: ICandle[]) => {
  const end = 4;

  const closes = candles.map(c => c.close);
  const sequence = closes.slice(closes.length - 5, closes.length - 5 + end);

  const gains = averageGain(sequence, end - 1);
  const losses = averageLoss(sequence, end - 1);

  return _.sum(gains) > _.sum(losses);
};

const includesHammer = (candles: ICandle[]) => {
  const start = 4;
  const end = 5;

  const possibleHammerData = candles.slice(
    candles.length - 5 + start,
    candles.length - 5 + end
  );

  return (
    BearishHammerStick(possibleHammerData) ||
    BullishHammerStick(possibleHammerData)
  );
};

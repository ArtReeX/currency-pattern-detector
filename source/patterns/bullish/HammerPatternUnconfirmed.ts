import _ from "lodash";
import { ICandle } from "../../types";
import { averageGain, averageLoss } from "../../utilities";
import BearishHammerStick from "../bearish/HammerStick";
import BearishInvertedHammerStick from "../bearish/InvertedHammerStick";
import BullishHammerStick from "../bullish/HammerStick";
import BullishInvertedHammerStick from "../bullish/InvertedHammerStick";

export default (candles: ICandle[]): boolean =>
  downwardTrend(candles) && includesHammer(candles);

export const downwardTrend = (candles: ICandle[]) => {
  const end = 4;

  const closes = candles.map(c => c.close);
  const sequence = closes.slice(closes.length - 5, closes.length - 5 + end);

  const gains = averageGain(sequence, end - 1);
  const losses = averageLoss(sequence, end - 1);

  return _.sum(losses) > _.sum(gains);
};

export const includesHammer = (candles: ICandle[]) => {
  const start = 4;
  const end = 5;

  const possibleHammerData = candles.slice(
    candles.length - 5 + start,
    candles.length - 5 + end
  );

  return (
    BearishHammerStick(possibleHammerData) ||
    BearishInvertedHammerStick(possibleHammerData) ||
    BullishHammerStick(possibleHammerData) ||
    BullishInvertedHammerStick(possibleHammerData)
  );
};

import { ICandle } from "../../types";
import { averageGain, averageLoss } from "../../utilities";
import _ from "lodash";
import BearishHammerStick from "../bearish/HammerStick";
import BullishHammerStick from "../bullish/HammerStick";
import BearishInvertedHammerStick from "../bearish/InvertedHammerStick";
import BullishInvertedHammerStick from "../bullish/InvertedHammerStick";

export default (candles: ICandle[]): boolean =>
  downwardTrend(candles) && includesHammer(candles) && hasConfirmation(candles);

const downwardTrend = (candles: ICandle[]) => {
  const end = 3;

  const closes = candles.map(c => c.close);
  const sequence = closes.slice(closes.length - 5, closes.length - 5 + end);

  const gains = averageGain(sequence, end - 1);
  const losses = averageLoss(sequence, end - 1);

  return _.sum(losses) > _.sum(gains);
};

const includesHammer = (candles: ICandle[]) => {
  const start = 3;
  const end = 4;

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

const hasConfirmation = (candles: ICandle[]) => {
  const possibleHammer = candles[candles.length - 2];
  const possibleConfirmation = candles[candles.length - 1];

  return (
    possibleConfirmation.open < possibleConfirmation.close &&
    possibleHammer.close < possibleConfirmation.close
  );
};

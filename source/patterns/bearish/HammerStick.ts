import { ICandle } from "../../types";
import { isApproximateEqual } from "../../utilities";
import { is } from "../../checker";

export default (candles: ICandle[]): boolean =>
  is(candles[candles.length - 1], {
    bodySizeMinPercents: 5,
    bodySizeMaxPercents: 40,
    bodyPosition: "TOP",
    trend: "DOWN",
    attached: true
  });

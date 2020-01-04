import { ICandle } from "../../types";
import { percentageOf, isApproximateEqual } from "../../utilities";
import { is } from "../../checker";

export default (candles: ICandle[]): boolean =>
  is(candles[candles.length - 1], {
    bodySizeMinPercents: 20,
    bodySizeMaxPercents: 50,
    bodyPosition: "CENTER",
    trend: "UP"
  });

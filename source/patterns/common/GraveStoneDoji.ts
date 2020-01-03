import { ICandle } from "../../types";
import { isApproximateEqual, percentageOf } from "../../utilities";
import { is } from "../../checker";

export default (candles: ICandle[]): boolean =>
  is(candles[candles.length - 1], {
    bodySizeMaxPercents: 5,
    bodyPosition: "BOTTOM",
    attached: true
  });

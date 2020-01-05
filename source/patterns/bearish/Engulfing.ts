import { ICandle } from "../../types";
import { is } from "../../checker";
import { percentageOf } from "../../utilities";

export default (candles: ICandle[]): boolean => {
  const first = candles[candles.length - 2];
  const second = candles[candles.length - 1];

  return (
    is(first, {
      bodySizeMinPercents: 30,
      bodySizeMaxPercents: 90,
      trend: "UP",
      bodyInside: second
    }) &&
    is(second, {
      bodySizeMinPercents: 30,
      bodySizeMaxPercents: 90,
      trend: "DOWN"
    })
  );
};

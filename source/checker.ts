import { ICandle } from "./types";
import { percentageOf } from "./utilities";

export type BodyPosition =
  | "TOP"
  | "ABOVE_CENTER"
  | "CENTER"
  | "BELOW_CENTER"
  | "BOTTOM";

export type Trend = "UP" | "NEUTRAL" | "DOWN";

export interface IConditions {
  bodySizeMinPercents?: number;
  bodySizeMaxPercents?: number;
  bodyPosition?: BodyPosition;
  attached?: boolean;
  trend?: Trend;
  bodyInside?: ICandle;
  bodyOutside?: ICandle;
}

export const is = (
  candle: ICandle,
  {
    bodySizeMinPercents,
    bodySizeMaxPercents,
    bodyPosition,
    attached,
    trend,
    bodyInside,
    bodyOutside
  }: IConditions
): boolean => {
  if (bodySizeMinPercents && size(candle) < bodySizeMinPercents) {
    return false;
  }
  if (bodySizeMaxPercents && size(candle) > bodySizeMaxPercents) {
    return false;
  }

  if (bodyPosition && !isPosition(candle, bodyPosition)) {
    return false;
  }

  if (attached && !isAttached(candle)) {
    return false;
  }

  if (trend && !isTrend(candle, trend)) {
    return false;
  }

  if (bodyInside && !isBodyInside(candle, bodyInside)) {
    return false;
  }

  if (bodyOutside && !isBodyOutside(candle, bodyOutside)) {
    return false;
  }

  return true;
};

export const size = ({ open, close, high, low }: ICandle): number =>
  percentageOf(open - close, high - low);

export const isBodyOutside = (first: ICandle, second: ICandle): boolean =>
  Math.min(first.open, first.close) < Math.min(second.open, second.close) &&
  Math.max(first.open, first.close) > Math.max(second.open, second.close);

export const isBodyInside = (first: ICandle, second: ICandle): boolean =>
  Math.min(first.open, first.close) > Math.min(second.open, second.close) &&
  Math.max(first.open, first.close) < Math.max(second.open, second.close);

export const isPosition = (
  { open, close, high, low }: ICandle,
  position: BodyPosition
) => {
  const min = Math.min(open, close);
  const max = Math.max(open, close);
  const fourth = (high + low) / 4;

  switch (position) {
    case "TOP": {
      const center = high - fourth;
      if (!(max >= center)) {
        return false;
      }
      break;
    }
    case "ABOVE_CENTER": {
      const center = high - fourth;
      if (!(max >= center && center >= min)) {
        return false;
      }
      break;
    }
    case "CENTER": {
      const center = (high + low) / 2;
      if (!(max >= center && center >= min)) {
        return false;
      }
      break;
    }
    case "BELOW_CENTER": {
      const center = low + fourth;
      if (!(max >= center && center >= min)) {
        return false;
      }
      break;
    }
    case "BOTTOM": {
      const center = low + fourth;
      if (!(center >= min)) {
        return false;
      }
      break;
    }
  }

  return true;
};

export const isAttached = ({ open, close, high, low }: ICandle) => {
  const min = Math.min(open, close);
  const max = Math.max(open, close);

  return high === max || low === min;
};

export const isTrend = ({ open, close }: ICandle, trend: Trend): boolean => {
  switch (trend) {
    case "UP": {
      if (!(close > open)) {
        return false;
      }
      break;
    }
    case "NEUTRAL": {
      if (!(close === open)) {
        return false;
      }
      break;
    }
    case "DOWN": {
      if (!(close < open)) {
        return false;
      }
      break;
    }
  }

  return true;
};

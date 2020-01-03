export interface IResult {
  bullish: string[];
  bearish: string[];
}

export enum Trend {
  BULLISH = 1,
  NEUTRAL = 0,
  BEARISH = -1
}

export interface ICandle {
  open: number;
  close: number;
  high: number;
  low: number;
}

export type Detector = (candles: ICandle[]) => boolean;

import { ICandle } from "./types";
export declare type BodyPosition = "TOP" | "ABOVE_CENTER" | "CENTER" | "BELOW_CENTER" | "BOTTOM";
export declare type Trend = "UP" | "NEUTRAL" | "DOWN";
export interface IConditions {
    bodySizeMinPercents?: number;
    bodySizeMaxPercents?: number;
    bodyPosition?: BodyPosition;
    attached?: boolean;
    trend?: Trend;
    bodyInside?: ICandle;
    bodyOutside?: ICandle;
}
export declare const is: (candle: ICandle, { bodySizeMinPercents, bodySizeMaxPercents, bodyPosition, attached, trend, bodyInside, bodyOutside }: IConditions) => boolean;
export declare const size: ({ open, close, high, low }: ICandle) => number;
export declare const isBodyOutside: (first: ICandle, second: ICandle) => boolean;
export declare const isBodyInside: (first: ICandle, second: ICandle) => boolean;
export declare const isPosition: ({ open, close, high, low }: ICandle, position: BodyPosition) => boolean;
export declare const isAttached: ({ open, close, high, low }: ICandle) => boolean;
export declare const isTrend: ({ open, close }: ICandle, trend: Trend) => boolean;
//# sourceMappingURL=checker.d.ts.map
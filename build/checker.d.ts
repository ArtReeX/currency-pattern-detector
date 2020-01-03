import { ICandle } from "./types";
export declare type BodyPosition = "TOP" | "ABOVE_CENTER" | "CENTER" | "BELOW_CENTER" | "BOTTOM";
export declare type Trend = "UP" | "NEUTRAL" | "DOWN";
export interface IConditions {
    bodySizeMinPercents?: number;
    bodySizeMaxPercents?: number;
    bodyPosition?: BodyPosition;
    attached?: boolean;
    trend?: Trend;
}
export declare const is: ({ open, close, high, low }: ICandle, conditions: IConditions) => boolean;
//# sourceMappingURL=checker.d.ts.map
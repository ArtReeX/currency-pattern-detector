export interface IResult {
    bullish: string[];
    bearish: string[];
}
export declare enum Trend {
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
export declare type Detector = (candles: ICandle[]) => boolean;
//# sourceMappingURL=types.d.ts.map
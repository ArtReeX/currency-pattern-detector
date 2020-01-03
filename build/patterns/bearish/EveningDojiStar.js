"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Doji_1 = __importDefault(require("../common/Doji"));
exports.default = (candles) => {
    const first = candles[candles.length - 3];
    const second = candles[candles.length - 2];
    const third = candles[candles.length - 1];
    const firstMidpoint = (first.open + first.close) / 2;
    const isFirstBullish = first.close > first.open;
    const dojiExists = Doji_1.default([
        {
            open: second.open,
            close: second.close,
            high: second.high,
            low: second.low
        }
    ]);
    const isThirdBearish = third.open > third.close;
    const gapExists = second.high > first.high &&
        second.low > first.high &&
        third.open < second.low &&
        second.close > third.open;
    const doesCloseBelowFirstMidpoint = third.close < firstMidpoint;
    return (isFirstBullish &&
        dojiExists &&
        gapExists &&
        isThirdBearish &&
        doesCloseBelowFirstMidpoint);
};
//# sourceMappingURL=EveningDojiStar.js.map
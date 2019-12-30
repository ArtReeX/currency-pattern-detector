"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Doji_1 = __importDefault(require("../common/Doji"));
exports.default = (candles) => {
    const firstOpen = candles[candles.length - 2].open;
    const firstClose = candles[candles.length - 2].close;
    const firstLow = candles[candles.length - 2].low;
    const secondOpen = candles[candles.length - 1].open;
    const secondClose = candles[candles.length - 1].close;
    const secondHigh = candles[candles.length - 1].high;
    const secondLow = candles[candles.length - 1].low;
    const thirdOpen = candles[candles.length - 0].open;
    const thirdClose = candles[candles.length - 0].close;
    const firstMidpoint = (firstOpen + firstClose) / 2;
    const isFirstBearish = firstClose < firstOpen;
    const dojiExists = Doji_1.default([
        {
            open: secondOpen,
            close: secondClose,
            high: secondHigh,
            low: secondLow
        }
    ]);
    const isThirdBullish = thirdOpen < thirdClose;
    const gapExists = secondHigh < firstLow &&
        secondLow < firstLow &&
        thirdOpen > secondHigh &&
        secondClose < thirdOpen;
    const doesCloseAboveFirstMidpoint = thirdClose > firstMidpoint;
    return (isFirstBearish &&
        dojiExists &&
        isThirdBullish &&
        gapExists &&
        doesCloseAboveFirstMidpoint);
};
//# sourceMappingURL=MorningDojiStar.js.map
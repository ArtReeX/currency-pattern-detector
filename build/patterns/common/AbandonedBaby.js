"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Doji_1 = __importDefault(require("./Doji"));
exports.default = (candles) => {
    const firstOpen = candles[candles.length - 3].open;
    const firstClose = candles[candles.length - 3].close;
    const firstLow = candles[candles.length - 3].low;
    const secondOpen = candles[candles.length - 2].open;
    const secondClose = candles[candles.length - 2].close;
    const secondHigh = candles[candles.length - 2].high;
    const secondLow = candles[candles.length - 2].low;
    const thirdOpen = candles[candles.length - 1].open;
    const thirdClose = candles[candles.length - 1].close;
    const thirdHigh = candles[candles.length - 1].high;
    const thirdLow = candles[candles.length - 1].low;
    let isFirstBearish = firstClose < firstOpen;
    let dojiExists = Doji_1.default([
        {
            open: secondOpen,
            close: secondClose,
            high: secondHigh,
            low: secondLow
        }
    ]);
    let gapExists = secondHigh < firstLow && thirdLow > secondHigh && thirdClose > thirdOpen;
    let isThirdBullish = thirdHigh < firstOpen;
    return isFirstBearish && dojiExists && gapExists && isThirdBullish;
};
//# sourceMappingURL=AbandonedBaby.js.map
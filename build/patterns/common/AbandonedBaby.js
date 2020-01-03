"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Doji_1 = __importDefault(require("./Doji"));
exports.default = (candles) => {
    const first = candles[candles.length - 3];
    const second = candles[candles.length - 2];
    const third = candles[candles.length - 1];
    const isFirstBearish = first.close < first.open;
    const dojiExists = Doji_1.default([second]);
    const gapExists = second.high < first.low &&
        third.low > second.high &&
        third.close > third.open;
    const isThirdBullish = third.high < first.open;
    return isFirstBearish && dojiExists && gapExists && isThirdBullish;
};
//# sourceMappingURL=AbandonedBaby.js.map
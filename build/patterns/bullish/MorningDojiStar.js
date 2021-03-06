"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Doji_1 = __importDefault(require("../common/Doji"));
const checker_1 = require("../../checker");
exports.default = (candles) => {
    const first = candles[candles.length - 3];
    const second = candles[candles.length - 2];
    const third = candles[candles.length - 1];
    const firstMidpoint = (first.open + first.close) / 2;
    const isFirstBearish = checker_1.is(first, { trend: "DOWN" });
    const dojiExists = Doji_1.default([second]);
    const isThirdBullish = checker_1.is(third, { trend: "UP" });
    const gapExists = second.high < first.low &&
        second.low < first.low &&
        third.open > second.high &&
        second.close < third.open;
    const doesCloseAboveFirstMidpoint = third.close > firstMidpoint;
    return (isFirstBearish &&
        dojiExists &&
        isThirdBullish &&
        gapExists &&
        doesCloseAboveFirstMidpoint);
};
//# sourceMappingURL=MorningDojiStar.js.map
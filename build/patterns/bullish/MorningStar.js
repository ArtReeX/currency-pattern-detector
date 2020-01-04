"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (candles) => {
    const first = candles[candles.length - 3];
    const second = candles[candles.length - 2];
    const third = candles[candles.length - 1];
    const firstMidpoint = (first.open + first.close) / 2;
    const isFirstBearish = first.close < first.open;
    const isSmallBodyExists = first.low > second.low && first.low > second.high;
    const isThirdBullish = third.open < third.close;
    const gapExists = second.high < first.low &&
        second.low < first.low &&
        third.open > second.high &&
        second.close < third.open;
    const doesCloseAboveFirstMidpoint = third.close > firstMidpoint;
    return (isFirstBearish &&
        isSmallBodyExists &&
        gapExists &&
        isThirdBullish &&
        doesCloseAboveFirstMidpoint);
};
//# sourceMappingURL=MorningStar.js.map
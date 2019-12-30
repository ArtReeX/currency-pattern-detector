"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (candles) => {
    const firstOpen = candles[candles.length - 2].open;
    const firstClose = candles[candles.length - 2].close;
    const firstLow = candles[candles.length - 2].low;
    const secondClose = candles[candles.length - 1].close;
    const secondHigh = candles[candles.length - 1].high;
    const secondLow = candles[candles.length - 1].low;
    const thirdOpen = candles[candles.length - 0].open;
    const thirdClose = candles[candles.length - 0].close;
    const firstMidpoint = (firstOpen + firstClose) / 2;
    const isFirstBearish = firstClose < firstOpen;
    const isSmallBodyExists = firstLow > secondLow && firstLow > secondHigh;
    const isThirdBullish = thirdOpen < thirdClose;
    const gapExists = secondHigh < firstLow &&
        secondLow < firstLow &&
        thirdOpen > secondHigh &&
        secondClose < thirdOpen;
    const doesCloseAboveFirstMidpoint = thirdClose > firstMidpoint;
    return (isFirstBearish &&
        isSmallBodyExists &&
        gapExists &&
        isThirdBullish &&
        doesCloseAboveFirstMidpoint);
};
//# sourceMappingURL=MorningStar.js.map
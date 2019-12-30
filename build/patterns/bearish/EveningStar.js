"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (candles) => {
    const firstOpen = candles[candles.length - 3].open;
    const firstClose = candles[candles.length - 3].close;
    const firstHigh = candles[candles.length - 3].high;
    const secondClose = candles[candles.length - 2].close;
    const secondHigh = candles[candles.length - 2].high;
    const secondLow = candles[candles.length - 2].low;
    const thirdOpen = candles[candles.length - 1].open;
    const thirdClose = candles[candles.length - 1].close;
    const firstMidpoint = (firstOpen + firstClose) / 2;
    const isFirstBullish = firstClose > firstOpen;
    const isSmallBodyExists = firstHigh < secondLow && firstHigh < secondHigh;
    const isThirdBearish = thirdOpen > thirdClose;
    const gapExists = secondHigh > firstHigh &&
        secondLow > firstHigh &&
        thirdOpen < secondLow &&
        secondClose > thirdOpen;
    const doesCloseBelowFirstMidpoint = thirdClose < firstMidpoint;
    return (isFirstBullish &&
        isSmallBodyExists &&
        gapExists &&
        isThirdBearish &&
        doesCloseBelowFirstMidpoint);
};
//# sourceMappingURL=EveningStar.js.map
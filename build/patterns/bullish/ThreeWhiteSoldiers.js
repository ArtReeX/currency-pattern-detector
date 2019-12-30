"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (candles) => {
    const firstOpen = candles[candles.length - 3].open;
    const firstClose = candles[candles.length - 3].close;
    const firstHigh = candles[candles.length - 3].high;
    const secondOpen = candles[candles.length - 2].open;
    const secondClose = candles[candles.length - 2].close;
    const secondHigh = candles[candles.length - 2].high;
    const thirdOpen = candles[candles.length - 1].open;
    const thirdClose = candles[candles.length - 1].close;
    const thirdHigh = candles[candles.length - 1].high;
    const isUpTrend = secondHigh > firstHigh && thirdHigh > secondHigh;
    const isAllBullish = firstOpen < firstClose &&
        secondOpen < secondClose &&
        thirdOpen < thirdClose;
    const doesOpenWithinPreviousBody = firstClose > secondOpen &&
        secondOpen < firstHigh &&
        secondHigh > thirdOpen &&
        thirdOpen < secondClose;
    return isUpTrend && isAllBullish && doesOpenWithinPreviousBody;
};
//# sourceMappingURL=ThreeWhiteSoldiers.js.map
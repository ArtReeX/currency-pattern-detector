"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (candles) => {
    const firstOpen = candles[candles.length - 2].open;
    const firstClose = candles[candles.length - 2].close;
    const firstLow = candles[candles.length - 2].low;
    const secondOpen = candles[candles.length - 1].open;
    const secondClose = candles[candles.length - 1].close;
    const secondLow = candles[candles.length - 1].low;
    const firstMidpoint = (firstOpen + firstClose) / 2;
    const isDowntrend = secondLow < firstLow;
    const isFirstBearish = firstClose < firstOpen;
    const isSecondBullish = secondClose > secondOpen;
    const isPiercingLinePattern = firstLow > secondOpen && secondClose > firstMidpoint;
    return (isDowntrend && isFirstBearish && isPiercingLinePattern && isSecondBullish);
};
//# sourceMappingURL=PiercingLine.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (candles) => {
    const first = candles[candles.length - 3];
    const second = candles[candles.length - 2];
    const third = candles[candles.length - 1];
    const isUpTrend = second.high > first.high && third.high > second.high;
    const isAllBullish = first.open < first.close &&
        second.open < second.close &&
        third.open < third.close;
    const doesOpenWithinPreviousBody = first.close > second.open &&
        second.open < first.high &&
        second.high > third.open &&
        third.open < second.close;
    return isUpTrend && isAllBullish && doesOpenWithinPreviousBody;
};
//# sourceMappingURL=ThreeWhiteSoldiers.js.map
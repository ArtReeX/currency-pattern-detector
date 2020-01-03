"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (candles) => {
    const first = candles[candles.length - 3];
    const second = candles[candles.length - 2];
    const third = candles[candles.length - 1];
    const isDownTrend = first.low > second.low && second.low > third.low;
    const isAllBearish = first.open > first.close &&
        second.open > second.close &&
        third.open > third.close;
    const doesOpenWithinPreviousBody = first.open > second.open &&
        second.open > first.close &&
        second.open > third.open &&
        third.open > second.close;
    return isDownTrend && isAllBearish && doesOpenWithinPreviousBody;
};
//# sourceMappingURL=ThreeBlackCrows.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../utilities");
exports.default = (candles) => {
    const open = candles[candles.length - 1].open;
    const close = candles[candles.length - 1].close;
    const high = candles[candles.length - 1].high;
    const low = candles[candles.length - 1].low;
    const isOpenEqualsClose = utilities_1.approximateEqual(open - close, high - low);
    const isLowEqualsClose = utilities_1.approximateEqual(close - low, high - low);
    const isEqualSegments = utilities_1.approximateEqual(utilities_1.percentageOfNumber(high - open, high - low) -
        utilities_1.percentageOfNumber(close - low, high - low), 100);
    return isOpenEqualsClose && isLowEqualsClose && !isEqualSegments;
};
//# sourceMappingURL=GraveStoneDoji.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../utilities");
exports.default = (candles) => {
    const open = candles[candles.length - 1].open;
    const close = candles[candles.length - 1].close;
    const high = candles[candles.length - 1].high;
    const low = candles[candles.length - 1].low;
    const longEnough = utilities_1.percentageOf(open - close, high - low) > 10;
    const isEqualSegments = utilities_1.isApproximateEqual(utilities_1.percentageOf(high - open, high - low) -
        utilities_1.percentageOf(close - low, high - low), 100);
    return open < close && longEnough && isEqualSegments;
};
//# sourceMappingURL=SpinningTop.js.map
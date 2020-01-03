"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../utilities");
exports.default = (candles) => {
    const open = candles[candles.length - 1].open;
    const close = candles[candles.length - 1].close;
    const high = candles[candles.length - 1].high;
    const low = candles[candles.length - 1].low;
    return (utilities_1.approximateEqual(close - high, high - low) &&
        utilities_1.approximateEqual(low - open, high - low) &&
        open < close &&
        open < high);
};
//# sourceMappingURL=Marubozu.js.map
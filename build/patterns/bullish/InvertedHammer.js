"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../utilities");
exports.default = (candles) => {
    const open = candles[candles.length].open;
    const close = candles[candles.length].close;
    const high = candles[candles.length].high;
    const low = candles[candles.length].low;
    return (close > open &&
        utilities_1.approximateEqual(open, low) &&
        close - open <= 2 * (high - close));
};
//# sourceMappingURL=InvertedHammer.js.map
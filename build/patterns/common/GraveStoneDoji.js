"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../utilities");
exports.default = (candles) => {
    const open = candles[candles.length].open;
    const close = candles[candles.length].close;
    const high = candles[candles.length].high;
    const low = candles[candles.length].low;
    const isOpenEqualsClose = utilities_1.approximateEqual(open, close);
    const isHighEqualsOpen = isOpenEqualsClose && utilities_1.approximateEqual(open, high);
    const isLowEqualsClose = isOpenEqualsClose && utilities_1.approximateEqual(close, low);
    return isOpenEqualsClose && isLowEqualsClose && !isHighEqualsOpen;
};
//# sourceMappingURL=GraveStoneDoji.js.map
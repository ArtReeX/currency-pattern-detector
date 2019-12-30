"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
exports.default = (candles) => {
    let open = candles[candles.length].open;
    let close = candles[candles.length].close;
    let high = candles[candles.length].high;
    let low = candles[candles.length].low;
    let isOpenEqualsClose = utilities_1.approximateEqual(open, close);
    let isHighEqualsOpen = isOpenEqualsClose && utilities_1.approximateEqual(open, high);
    let isLowEqualsClose = isOpenEqualsClose && utilities_1.approximateEqual(close, low);
    return isOpenEqualsClose && isHighEqualsOpen == isLowEqualsClose;
};
//# sourceMappingURL=Doji.js.map
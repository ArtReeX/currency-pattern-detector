"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../utilities");
exports.default = (candles) => {
    const open = candles[candles.length - 1].open;
    const close = candles[candles.length - 1].close;
    const high = candles[candles.length - 1].high;
    const low = candles[candles.length - 1].low;
    return (open > close &&
        utilities_1.approximateEqual(open - high, high - low) &&
        open - close <= 2 * (close - low));
};
//# sourceMappingURL=HammerStick.js.map
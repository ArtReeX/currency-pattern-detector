"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checker_1 = require("../../checker");
const utilities_1 = require("../../utilities");
exports.default = (candles) => {
    const first = candles[candles.length - 2];
    const second = candles[candles.length - 1];
    return (checker_1.is(first, {
        bodySizeMinPercents: 30,
        bodySizeMaxPercents: 90,
        trend: "DOWN"
    }) &&
        checker_1.is(second, {
            bodySizeMinPercents: 30,
            bodySizeMaxPercents: 90,
            trend: "UP"
        }) &&
        utilities_1.percentageOf(first.close - first.open, first.high - first.low) >
            utilities_1.percentageOf(second.close - second.open, second.high - second.low) - 20);
};
//# sourceMappingURL=Engulfing.js.map
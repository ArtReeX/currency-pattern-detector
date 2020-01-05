"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checker_1 = require("../../checker");
exports.default = (candles) => {
    const first = candles[candles.length - 2];
    const second = candles[candles.length - 1];
    return (checker_1.is(first, {
        bodySizeMinPercents: 30,
        bodySizeMaxPercents: 90,
        trend: "DOWN",
        bodyInside: second
    }) &&
        checker_1.is(second, {
            bodySizeMinPercents: 30,
            bodySizeMaxPercents: 90,
            trend: "UP"
        }));
};
//# sourceMappingURL=Engulfing.js.map
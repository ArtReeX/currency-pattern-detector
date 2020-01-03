"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checker_1 = require("../../checker");
exports.default = (candles) => checker_1.is(candles[candles.length - 1], {
    bodySizeMinPercents: 20,
    bodySizeMaxPercents: 50,
    bodyPosition: "CENTER",
    trend: "DOWN"
});
//# sourceMappingURL=SpinningTop.js.map
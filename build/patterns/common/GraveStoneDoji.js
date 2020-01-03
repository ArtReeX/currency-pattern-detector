"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checker_1 = require("../../checker");
exports.default = (candles) => checker_1.is(candles[candles.length - 1], {
    bodySizeMaxPercents: 5,
    bodyPosition: "BOTTOM",
    attached: true
});
//# sourceMappingURL=GraveStoneDoji.js.map
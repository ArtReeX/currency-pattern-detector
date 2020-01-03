"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checker_1 = require("../../checker");
exports.default = (candles) => checker_1.is(candles[candles.length - 1], {
    bodySizeMinPercents: 5,
    bodySizeMaxPercents: 40,
    bodyPosition: "TOP",
    attached: true
});
//# sourceMappingURL=HammerStick.js.map
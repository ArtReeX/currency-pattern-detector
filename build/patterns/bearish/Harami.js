"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (candles) => {
    const first = candles[candles.length - 2];
    const second = candles[candles.length - 1];
    return (first.open < second.open &&
        first.close > second.open &&
        first.close > second.close &&
        first.open < second.low &&
        first.high > second.high);
};
//# sourceMappingURL=Harami.js.map
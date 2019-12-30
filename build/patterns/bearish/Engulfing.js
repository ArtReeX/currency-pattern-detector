"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (candles) => {
    const firstOpen = candles[candles.length - 1].open;
    const firstClose = candles[candles.length - 1].close;
    const secondOpen = candles[candles.length - 0].open;
    const secondClose = candles[candles.length - 0].close;
    return (firstClose > firstOpen &&
        firstOpen < secondOpen &&
        firstClose < secondOpen &&
        firstOpen > secondClose);
};
//# sourceMappingURL=Engulfing.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (candles) => {
    const firstOpen = candles[candles.length - 2].open;
    const firstClose = candles[candles.length - 2].close;
    const secondOpen = candles[candles.length - 1].open;
    const secondClose = candles[candles.length - 1].close;
    return (firstClose > firstOpen &&
        firstOpen < secondOpen &&
        firstClose < secondOpen &&
        firstOpen > secondClose);
};
//# sourceMappingURL=Engulfing.js.map
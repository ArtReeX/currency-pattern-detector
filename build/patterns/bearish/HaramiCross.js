"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../utilities");
exports.default = (candles) => {
    const firstOpen = candles[candles.length - 2].open;
    const firstClose = candles[candles.length - 2].close;
    const firstHigh = candles[candles.length - 2].high;
    const secondOpen = candles[candles.length - 1].open;
    const secondClose = candles[candles.length - 1].close;
    const secondHigh = candles[candles.length - 1].high;
    const secondLow = candles[candles.length - 1].low;
    const isBearishHaramiCrossPattern = firstOpen < secondOpen &&
        firstClose > secondOpen &&
        firstClose > secondClose &&
        firstOpen < secondLow &&
        firstHigh > secondHigh;
    const isSecondDayDoji = utilities_1.approximateEqual(secondOpen - secondClose, secondHigh - secondLow);
    return isBearishHaramiCrossPattern && isSecondDayDoji;
};
//# sourceMappingURL=HaramiCross.js.map
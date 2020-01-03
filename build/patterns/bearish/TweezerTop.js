"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../utilities");
const lodash_1 = __importDefault(require("lodash"));
exports.default = (candles) => {
    const secondHigh = candles[candles.length - 2].high;
    const secondLow = candles[candles.length - 2].low;
    const thirdHigh = candles[candles.length - 1].high;
    const thirdLow = candles[candles.length - 1].low;
    return (upwardTrend(candles) &&
        utilities_1.approximateEqual(secondHigh - thirdHigh, Math.max(secondHigh, thirdHigh) - Math.min(secondLow, thirdLow)));
};
const upwardTrend = (candles) => {
    const closes = candles.map(c => c.close);
    const sequence = closes.slice(candles.length - 3, candles.length);
    const gains = utilities_1.averageGain(sequence, 2);
    const losses = utilities_1.averageLoss(sequence, 2);
    return lodash_1.default.sum(gains) > lodash_1.default.sum(losses);
};
//# sourceMappingURL=TweezerTop.js.map
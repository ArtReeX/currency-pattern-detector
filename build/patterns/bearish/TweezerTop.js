"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../utilities");
const lodash_1 = __importDefault(require("lodash"));
const checker_1 = require("../../checker");
exports.default = (candles) => {
    const second = candles[candles.length - 2];
    const third = candles[candles.length - 1];
    return (upwardTrend(candles) &&
        checker_1.is(second, {
            bodySizeMinPercents: 10,
            bodySizeMaxPercents: 50,
            bodyPosition: "BOTTOM",
            trend: "UP"
        }) &&
        checker_1.is(third, {
            bodySizeMinPercents: 10,
            bodySizeMaxPercents: 50,
            bodyPosition: "BOTTOM",
            trend: "DOWN"
        }) &&
        utilities_1.isApproximateEqual(second.close - third.open, Math.max(second.high, third.high) - Math.min(second.low, third.low)));
};
const upwardTrend = (candles) => {
    const closes = candles.map(c => c.close);
    const sequence = closes.slice(candles.length - 3, candles.length);
    const gains = utilities_1.averageGain(sequence, 2);
    const losses = utilities_1.averageLoss(sequence, 2);
    return lodash_1.default.sum(gains) > lodash_1.default.sum(losses);
};
//# sourceMappingURL=TweezerTop.js.map
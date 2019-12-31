"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const utilities_1 = require("../../utilities");
const InvertedHammerStick_1 = __importDefault(require("../bullish/InvertedHammerStick"));
const InvertedHammerStick_2 = __importDefault(require("./InvertedHammerStick"));
exports.default = (candles) => upwardTrend(candles) && includesHammer(candles);
const upwardTrend = (candles) => {
    const end = 4;
    const closes = candles.map(c => c.close);
    const sequence = closes.slice(closes.length - 5, closes.length - 5 + end);
    const gains = utilities_1.averageGain(sequence, end - 1);
    const losses = utilities_1.averageLoss(sequence, end - 1);
    return lodash_1.default.sum(gains) > lodash_1.default.sum(losses);
};
const includesHammer = (candles) => {
    const start = 4;
    const end = 5;
    const possibleHammerData = candles.slice(candles.length - 5 + start, candles.length - 5 + end);
    return (InvertedHammerStick_2.default(possibleHammerData) ||
        InvertedHammerStick_1.default(possibleHammerData));
};
//# sourceMappingURL=ShootingStarUnconfirmed.js.map
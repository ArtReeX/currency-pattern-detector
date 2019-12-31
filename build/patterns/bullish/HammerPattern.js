"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../utilities");
const lodash_1 = __importDefault(require("lodash"));
const HammerStick_1 = __importDefault(require("../bearish/HammerStick"));
const HammerStick_2 = __importDefault(require("../bullish/HammerStick"));
const InvertedHammerStick_1 = __importDefault(require("../bearish/InvertedHammerStick"));
const InvertedHammerStick_2 = __importDefault(require("../bullish/InvertedHammerStick"));
exports.default = (candles) => downwardTrend(candles) && includesHammer(candles) && hasConfirmation(candles);
const downwardTrend = (candles) => {
    const end = 3;
    const closes = candles.map(c => c.close);
    const sequence = closes.slice(closes.length - 5, closes.length - 5 + end);
    const gains = utilities_1.averageGain(sequence, end - 1);
    const losses = utilities_1.averageLoss(sequence, end - 1);
    return lodash_1.default.sum(losses) > lodash_1.default.sum(gains);
};
const includesHammer = (candles) => {
    const start = 3;
    const end = 4;
    const possibleHammerData = candles.slice(candles.length - 5 + start, candles.length - 5 + end);
    return (HammerStick_1.default(possibleHammerData) ||
        InvertedHammerStick_1.default(possibleHammerData) ||
        HammerStick_2.default(possibleHammerData) ||
        InvertedHammerStick_2.default(possibleHammerData));
};
const hasConfirmation = (candles) => {
    const possibleHammer = candles[candles.length - 2];
    const possibleConfirmation = candles[candles.length - 1];
    return (possibleConfirmation.open < possibleConfirmation.close &&
        possibleHammer.close < possibleConfirmation.close);
};
//# sourceMappingURL=HammerPattern.js.map
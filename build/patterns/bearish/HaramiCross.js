"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Doji_1 = __importDefault(require("../common/Doji"));
exports.default = (candles) => {
    const first = candles[candles.length - 2];
    const second = candles[candles.length - 1];
    const isBearishHaramiCrossPattern = first.open < second.open &&
        first.close > second.open &&
        first.close > second.close &&
        first.open < second.low &&
        first.high > second.high;
    const isSecondDayDoji = Doji_1.default([second]);
    return isBearishHaramiCrossPattern && isSecondDayDoji;
};
//# sourceMappingURL=HaramiCross.js.map
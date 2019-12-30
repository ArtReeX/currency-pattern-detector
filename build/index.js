"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patterns_1 = __importDefault(require("./patterns"));
const types_1 = require("./types");
exports.default = (candles) => {
    const bullish = Object.values(patterns_1.default.bullish).reduce((prev, detector) => (prev += Number(detector(candles))), 0);
    const bearish = Object.values(patterns_1.default.bearish).reduce((prev, detector) => (prev += Number(detector(candles))), 0);
    if (bullish > bearish) {
        return types_1.Trend.BULLISH;
    }
    if (bullish < bearish) {
        return types_1.Trend.BEARISH;
    }
    return types_1.Trend.NEUTRAL;
};
//# sourceMappingURL=index.js.map
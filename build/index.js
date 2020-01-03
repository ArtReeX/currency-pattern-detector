"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patterns_1 = __importDefault(require("./patterns"));
exports.default = (candles) => {
    const result = {
        bullish: [],
        bearish: []
    };
    for (const name in patterns_1.default.bullish) {
        const exist = patterns_1.default.bullish[name](candles);
        if (exist) {
            result.bullish.push(name);
        }
    }
    for (const name in patterns_1.default.bearish) {
        const exist = patterns_1.default.bullish[name](candles);
        if (exist) {
            result.bearish.push(name);
        }
    }
    return result;
};
//# sourceMappingURL=index.js.map
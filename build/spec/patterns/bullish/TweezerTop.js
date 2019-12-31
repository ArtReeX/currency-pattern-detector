"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
const TweezerTop_1 = __importDefault(require("../../../patterns/bullish/TweezerTop"));
describe("TweezerTop (bullish)", () => {
    it("default", () => {
        const input = [
            { open: 29.5, high: 35.9, close: 33.1, low: 26.9 },
            { open: 33.1, high: 37.6, close: 36.0, low: 27.7 },
            { open: 36.0, high: 41.8, close: 40.9, low: 28.0 },
            { open: 40.9, high: 43.1, close: 42.8, low: 39.1 },
            { open: 42.8, high: 43.1, close: 38.05, low: 37.5 }
        ];
        expect(TweezerTop_1.default(input)).toBeTrue();
    });
});
//# sourceMappingURL=TweezerTop.js.map
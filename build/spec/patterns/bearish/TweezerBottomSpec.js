"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
const TweezerBottom_1 = __importDefault(require("../../../patterns/bearish/TweezerBottom"));
describe("TweezerBottom (bearish)", () => {
    it("default", () => {
        const input = [
            { open: 40.9, high: 41.8, close: 36.0, low: 28.0 },
            { open: 36.0, high: 37.6, close: 33.1, low: 27.7 },
            { open: 33.1, high: 35.9, close: 29.5, low: 26.9 },
            { open: 30.1, high: 31.6, close: 26.13, low: 25.9 },
            { open: 26.13, high: 33.6, close: 31.0, low: 25.9 }
        ];
        expect(TweezerBottom_1.default(input)).toBeTrue();
    });
});
//# sourceMappingURL=TweezerBottomSpec.js.map
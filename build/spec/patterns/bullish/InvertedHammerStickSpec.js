"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
const InvertedHammerStick_1 = __importDefault(require("../../../patterns/bullish/InvertedHammerStick"));
describe("InvertedHammerStick (bullish)", () => {
    it("default", () => {
        const input = [
            { open: 26.13, high: 52.06, close: 30.1, low: 26.13 }
        ];
        expect(InvertedHammerStick_1.default(input)).toBeTrue();
    });
});
//# sourceMappingURL=InvertedHammerStickSpec.js.map
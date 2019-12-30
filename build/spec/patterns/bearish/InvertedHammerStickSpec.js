"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
const InvertedHammerStick_1 = __importDefault(require("../../../patterns/bearish/InvertedHammerStick"));
describe("InvertedHammerStick (bearish)", () => {
    it("default", () => {
        const input = [
            { open: 30.1, high: 52.06, close: 26.13, low: 26.13 }
        ];
        expect(InvertedHammerStick_1.default(input)).toBeTrue();
    });
});
//# sourceMappingURL=InvertedHammerStickSpec.js.map
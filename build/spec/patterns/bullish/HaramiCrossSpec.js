"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
const HaramiCross_1 = __importDefault(require("../../../patterns/bullish/HaramiCross"));
describe("HaramiCross (bullish)", () => {
    it("default", () => {
        const input = [
            { open: 25.13, high: 25.8, close: 22.14, low: 21.7 },
            { open: 23.83, high: 24.59, close: 23.84, low: 23.07 }
        ];
        expect(HaramiCross_1.default(input)).toBeTrue();
    });
});
//# sourceMappingURL=HaramiCrossSpec.js.map
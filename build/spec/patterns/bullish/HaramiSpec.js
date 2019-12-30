"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
const Harami_1 = __importDefault(require("../../../patterns/bullish/Harami"));
describe("Harami (bullish)", () => {
    it("default", () => {
        const input = [
            { open: 25.13, high: 25.8, close: 22.14, low: 21.7 },
            { open: 23.45, high: 24.59, close: 24.1, low: 23.07 }
        ];
        expect(Harami_1.default(input)).toBeTrue();
    });
});
//# sourceMappingURL=HaramiSpec.js.map
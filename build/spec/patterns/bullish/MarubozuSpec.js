"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
const Marubozu_1 = __importDefault(require("../../../patterns/bullish/Marubozu"));
describe("Marubozu (bullish)", () => {
    it("default", () => {
        const input = [
            { open: 30.5, high: 31.23, close: 31.23, low: 30.5 }
        ];
        expect(Marubozu_1.default(input)).toBeTrue();
    });
});
//# sourceMappingURL=MarubozuSpec.js.map
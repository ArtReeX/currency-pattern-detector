"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
const PiercingLine_1 = __importDefault(require("../../../patterns/bullish/PiercingLine"));
describe("PiercingLine (bullish)", () => {
    it("default", () => {
        const input = [
            { open: 42.7, high: 42.82, close: 41.6, low: 41.45 },
            { open: 41.33, high: 42.5, close: 42.34, low: 41.15 }
        ];
        expect(PiercingLine_1.default(input)).toBeTrue();
    });
});
//# sourceMappingURL=PiercingLineSpec.js.map
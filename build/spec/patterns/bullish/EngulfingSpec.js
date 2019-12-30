"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
const Engulfing_1 = __importDefault(require("../../../patterns/bullish/Engulfing"));
describe("Engulfing (bullish)", () => {
    it("default", () => {
        const input = [
            { open: 23.25, high: 25.1, close: 21.44, low: 20.82 },
            { open: 15.36, high: 30.87, close: 27.89, low: 14.93 }
        ];
        expect(Engulfing_1.default(input)).toBeTrue();
    });
});
//# sourceMappingURL=EngulfingSpec.js.map
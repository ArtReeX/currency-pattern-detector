"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
const ThreeWhiteSoldiers_1 = __importDefault(require("../../../patterns/bullish/ThreeWhiteSoldiers"));
describe("ThreeWhiteSoldiers (bullish)", () => {
    it("default", () => {
        const input = [
            { open: 21.12, high: 21.65, close: 21.83, low: 20.85 },
            { open: 21.48, high: 22.2, close: 22.4, low: 21.36 },
            { open: 21.8, high: 22.65, close: 22.8, low: 21.66 }
        ];
        expect(ThreeWhiteSoldiers_1.default(input)).toBeTrue();
    });
});
//# sourceMappingURL=ThreeWhiteSoldiersSpec.js.map
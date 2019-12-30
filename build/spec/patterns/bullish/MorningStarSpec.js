"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
const MorningStar_1 = __importDefault(require("../../../patterns/bullish/MorningStar"));
describe("MorningStar (bullish)", () => {
    it("default", () => {
        const input = [
            { open: 22.2, high: 22.5, close: 20.8, low: 20.65 },
            { open: 20.3, high: 20.45, close: 19.8, low: 19.6 },
            { open: 20.7, high: 21.82, close: 21.58, low: 20.4 }
        ];
        expect(MorningStar_1.default(input)).toBeTrue();
    });
});
//# sourceMappingURL=MorningStarSpec.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
const ThreeBlackCrows_1 = __importDefault(require("../../../patterns/bearish/ThreeBlackCrows"));
describe("ThreeBlackCrows (bearish)", () => {
    it("default", () => {
        const input = [
            { open: 21.65, high: 21.82, close: 21.32, low: 21.25 },
            { open: 21.48, high: 21.57, close: 21.1, low: 20.97 },
            { open: 21.25, high: 21.35, close: 20.7, low: 20.6 }
        ];
        expect(ThreeBlackCrows_1.default(input)).toBeTrue();
    });
});
//# sourceMappingURL=ThreeBlackCrowsSpec.js.map
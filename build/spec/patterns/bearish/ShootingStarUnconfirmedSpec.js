"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
const ShootingStarUnconfirmed_1 = __importDefault(require("../../../patterns/bearish/ShootingStarUnconfirmed"));
describe("ShootingStarUnconfirmed (bullish)", () => {
    it("Bearish", () => {
        const input = [
            { open: 28.9, high: 36.1, close: 29.5, low: 27.0 },
            { open: 29.5, high: 35.9, close: 33.1, low: 26.9 },
            { open: 33.1, high: 37.6, close: 36.0, low: 27.7 },
            { open: 36.0, high: 41.8, close: 40.9, low: 28.0 },
            { open: 42.8, high: 48.8, close: 40.9, low: 40.9 }
        ];
        expect(ShootingStarUnconfirmed_1.default(input)).toBeTrue();
    });
    it("Bullish", () => {
        const input = [
            { open: 28.9, high: 36.1, close: 29.5, low: 27.0 },
            { open: 29.5, high: 35.9, close: 33.1, low: 26.9 },
            { open: 33.1, high: 37.6, close: 36.0, low: 27.7 },
            { open: 36.0, high: 41.8, close: 40.9, low: 28.0 },
            { open: 40.9, high: 48.8, close: 42.8, low: 40.9 }
        ];
        expect(ShootingStarUnconfirmed_1.default(input)).toBeTrue();
    });
});
//# sourceMappingURL=ShootingStarUnconfirmedSpec.js.map
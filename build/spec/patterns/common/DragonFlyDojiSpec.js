"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
const DragonFlyDoji_1 = __importDefault(require("../../../patterns/common/DragonFlyDoji"));
describe("DragonFlyDoji (common)", () => {
    it("default", () => {
        const trueInput = [
            { open: 30.1, high: 30.1, close: 30.13, low: 28.1 }
        ];
        const falseInput = [
            { open: 30.1, high: 30.11, close: 30.1, low: 30.09 }
        ];
        expect(DragonFlyDoji_1.default(trueInput)).toBeTrue();
        expect(DragonFlyDoji_1.default(falseInput)).toBeFalse();
    });
});
//# sourceMappingURL=DragonFlyDojiSpec.js.map
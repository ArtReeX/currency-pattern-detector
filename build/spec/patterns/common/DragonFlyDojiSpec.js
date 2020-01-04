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
            { open: 30.13, high: 30.13, close: 29.9, low: 25.1 }
        ];
        expect(DragonFlyDoji_1.default(trueInput)).toBeTrue();
    });
});
//# sourceMappingURL=DragonFlyDojiSpec.js.map
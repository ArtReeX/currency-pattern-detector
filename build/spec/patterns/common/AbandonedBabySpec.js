"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
const AbandonedBaby_1 = __importDefault(require("../../../patterns/common/AbandonedBaby"));
describe("AbandonedBaby (common)", () => {
    it("default", () => {
        const input = [
            { open: 31.1, high: 31.8, close: 28.1, low: 27.5 },
            { open: 26.18, high: 26.91, close: 26.18, low: 25.4 },
            { open: 27.47, high: 30.94, close: 30.62, low: 27.02 }
        ];
        expect(AbandonedBaby_1.default(input)).toBeTrue();
    });
});
//# sourceMappingURL=AbandonedBabySpec.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
const DarkCloudCover_1 = __importDefault(require("../../../patterns/common/DarkCloudCover"));
describe("DarkCloudCover (common)", () => {
    it("default", () => {
        const input = [
            { open: 30.1, high: 37.4, close: 35.36, low: 28.3 },
            { open: 39.45, high: 41.45, close: 32.5, low: 31.25 }
        ];
        expect(DarkCloudCover_1.default(input)).toBeTrue();
    });
});
//# sourceMappingURL=DarkCloudCoverSpec.js.map
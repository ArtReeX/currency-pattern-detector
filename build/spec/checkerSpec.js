"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
const checker_1 = require("../checker");
describe("checker", () => {
    it("isBodyInside", () => {
        const first = {
            low: 0,
            open: 20,
            close: 60,
            high: 100
        };
        const second = {
            low: 0,
            open: 10,
            close: 80,
            high: 100
        };
        expect(checker_1.isBodyInside(first, second)).toBeTrue();
    });
    it("isBodyOutside", () => {
        const first = {
            low: 0,
            open: 10,
            close: 80,
            high: 100
        };
        const second = {
            low: 0,
            open: 20,
            close: 60,
            high: 100
        };
        expect(checker_1.isBodyOutside(first, second)).toBeTrue();
    });
    it("size", () => {
        const candle = {
            low: 0,
            open: 10,
            close: 80,
            high: 100
        };
        expect(checker_1.size(candle)).toBe(70);
    });
    it("isPosition", () => {
        const top = {
            high: 100,
            close: 95,
            open: 90,
            low: 0
        };
        const aboveCenter = {
            high: 100,
            close: 90,
            open: 70,
            low: 0
        };
        const center = {
            high: 100,
            close: 60,
            open: 40,
            low: 0
        };
        const belowCenter = {
            high: 100,
            close: 40,
            open: 20,
            low: 0
        };
        const bottom = {
            high: 100,
            close: 15,
            open: 5,
            low: 0
        };
        expect(checker_1.isPosition(top, "TOP")).toBeTrue();
        expect(checker_1.isPosition(aboveCenter, "ABOVE_CENTER")).toBeTrue();
        expect(checker_1.isPosition(center, "CENTER")).toBeTrue();
        expect(checker_1.isPosition(belowCenter, "BELOW_CENTER")).toBeTrue();
        expect(checker_1.isPosition(bottom, "BOTTOM")).toBeTrue();
    });
    it("isAttached", () => {
        const first = {
            low: 0,
            open: 10,
            close: 100,
            high: 100
        };
        const second = {
            low: 0,
            open: 0,
            close: 60,
            high: 100
        };
        const third = {
            low: 0,
            open: 100,
            close: 10,
            high: 100
        };
        const fourth = {
            low: 0,
            open: 40,
            close: 0,
            high: 100
        };
        expect(checker_1.isAttached(first)).toBeTrue();
        expect(checker_1.isAttached(second)).toBeTrue();
        expect(checker_1.isAttached(third)).toBeTrue();
        expect(checker_1.isAttached(fourth)).toBeTrue();
    });
    it("isTrend", () => {
        const up = {
            low: 0,
            open: 40,
            close: 70,
            high: 100
        };
        const neutral = {
            low: 0,
            open: 60,
            close: 60,
            high: 100
        };
        const down = {
            low: 0,
            open: 70,
            close: 40,
            high: 100
        };
        expect(checker_1.isTrend(up, "UP")).toBeTrue();
        expect(checker_1.isTrend(neutral, "NEUTRAL")).toBeTrue();
        expect(checker_1.isTrend(down, "DOWN")).toBeTrue();
    });
});
//# sourceMappingURL=checkerSpec.js.map
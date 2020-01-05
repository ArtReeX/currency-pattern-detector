import "jasmine";

import {
  isBodyInside,
  isBodyOutside,
  size,
  isPosition,
  isAttached,
  isTrend
} from "../checker";
import { ICandle } from "../types";

describe("checker", () => {
  it("isBodyInside", () => {
    const first: ICandle = {
      low: 0,
      open: 20,
      close: 60,
      high: 100
    };
    const second: ICandle = {
      low: 0,
      open: 10,
      close: 80,
      high: 100
    };

    expect(isBodyInside(first, second)).toBeTrue();
  });

  it("isBodyOutside", () => {
    const first: ICandle = {
      low: 0,
      open: 10,
      close: 80,
      high: 100
    };
    const second: ICandle = {
      low: 0,
      open: 20,
      close: 60,
      high: 100
    };

    expect(isBodyOutside(first, second)).toBeTrue();
  });

  it("size", () => {
    const candle: ICandle = {
      low: 0,
      open: 10,
      close: 80,
      high: 100
    };

    expect(size(candle)).toBe(70);
  });

  it("isPosition", () => {
    const top: ICandle = {
      high: 100,
      close: 95,
      open: 90,
      low: 0
    };
    const aboveCenter: ICandle = {
      high: 100,
      close: 90,
      open: 70,
      low: 0
    };
    const center: ICandle = {
      high: 100,
      close: 60,
      open: 40,
      low: 0
    };
    const belowCenter: ICandle = {
      high: 100,
      close: 40,
      open: 20,
      low: 0
    };
    const bottom: ICandle = {
      high: 100,
      close: 15,
      open: 5,
      low: 0
    };

    expect(isPosition(top, "TOP")).toBeTrue();
    expect(isPosition(aboveCenter, "ABOVE_CENTER")).toBeTrue();
    expect(isPosition(center, "CENTER")).toBeTrue();
    expect(isPosition(belowCenter, "BELOW_CENTER")).toBeTrue();
    expect(isPosition(bottom, "BOTTOM")).toBeTrue();
  });

  it("isAttached", () => {
    const first: ICandle = {
      low: 0,
      open: 10,
      close: 100,
      high: 100
    };
    const second: ICandle = {
      low: 0,
      open: 0,
      close: 60,
      high: 100
    };
    const third: ICandle = {
      low: 0,
      open: 100,
      close: 10,
      high: 100
    };
    const fourth: ICandle = {
      low: 0,
      open: 40,
      close: 0,
      high: 100
    };

    expect(isAttached(first)).toBeTrue();
    expect(isAttached(second)).toBeTrue();
    expect(isAttached(third)).toBeTrue();
    expect(isAttached(fourth)).toBeTrue();
  });

  it("isTrend", () => {
    const up: ICandle = {
      low: 0,
      open: 40,
      close: 70,
      high: 100
    };
    const neutral: ICandle = {
      low: 0,
      open: 60,
      close: 60,
      high: 100
    };
    const down: ICandle = {
      low: 0,
      open: 70,
      close: 40,
      high: 100
    };

    expect(isTrend(up, "UP")).toBeTrue();
    expect(isTrend(neutral, "NEUTRAL")).toBeTrue();
    expect(isTrend(down, "DOWN")).toBeTrue();
  });
});

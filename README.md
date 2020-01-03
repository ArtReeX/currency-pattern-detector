# currency-pattern-detector

Finding patterns in a temporary financial row.

## Supported Patterns

- Abandoned Baby.
- Bearish Engulfing Pattern.
- Bullish Engulfiing Pattern.
- Dark Cloud Cover.
- Downside Tasuki Gap.
- Doji.
- DragonFly Doji.
- GraveStone Doji.
- BullishHarami.
- Bearish Harami Cross.
- Bullish Harami Cross.
- Bullish Marubozu.
- Bearish Marubozu.
- Evening Doji Star.
- Evening Star.
- Bearish Harami.
- Piercing Line.
- Bullish Spinning Top.
- Bearish Spinning Top.
- Morning Doji Star.
- Morning Star.
- Three Black Crows.
- Three White Soldiers.
- Bullish Hammer.
- Bearish Hammer.
- Bullish Inverted Hammer.
- Bearish Inverted Hammer.
- Hammer Pattern.
- Hammer Pattern (Unconfirmed).
- Hanging Man.
- Hanging Man (Unconfirmed).
- Shooting Star.
- Shooting Star (Unconfirmed).
- Tweezer Top.
- Tweezer Bottom.

## Using

```typescript
import detector from "currency-pattern-detector/build";

interface ICandle {
  open: number;
  close: number;
  high: number;
  low: number;
}

const candles: ICandle[] = [
  { open: 45.0, high: 46.2, close: 41.2, low: 38.56 },
  { open: 33.45, high: 34.7, close: 29.31, low: 28.0 },
  { open: 30.2, high: 36.63, close: 36.28, low: 29.8 }
];

detector(candles);
```

```typescript
interface IResult {
  bullish: string[];
  bearish: string[];
}
```

**The result contains two arrays listing the patterns found.**

_You can give a complete history of candles, and the detector itself will take as much as it needs (from the last)._

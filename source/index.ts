import patterns from "./patterns";
import { ICandle, IResult, Trend } from "./types";
import _ from "lodash";

export default (candles: ICandle[]): IResult => {
  const result: IResult = {
    bullish: [],
    bearish: []
  };

  for (const name in patterns.bullish) {
    const exist = patterns.bullish[name](candles);

    if (exist) {
      result.bullish.push(name);
    }
  }

  for (const name in patterns.bearish) {
    const exist = patterns.bullish[name](candles);

    if (exist) {
      result.bearish.push(name);
    }
  }

  return result;
};

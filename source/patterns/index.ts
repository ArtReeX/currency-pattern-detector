import bearish from "./bearish";
import bullish from "./bullish";
import common from "./common";
import { Detector } from "../types";

export default { common, bullish, bearish } as {
  [key: string]: { [key: string]: Detector };
};

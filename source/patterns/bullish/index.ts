import Engulfing from "./Engulfing";
import HammerStick from "./HammerStick";
import Harami from "./Harami";
import HaramiCross from "./HaramiCross";
import InvertedHammerStick from "./InvertedHammerStick";
import Marubozu from "./Marubozu";
import SpinningTop from "./SpinningTop";
import MorningDojiStar from "./MorningDojiStar";
import MorningStar from "./MorningStar";
import PiercingLine from "./PiercingLine";
import ThreeWhiteSoldiers from "./ThreeWhiteSoldiers";
import { Detector } from "../../types";

export default {
  Engulfing,
  HammerStick,
  Harami,
  HaramiCross,
  InvertedHammerStick,
  Marubozu,
  SpinningTop,
  MorningDojiStar,
  MorningStar,
  PiercingLine,
  ThreeWhiteSoldiers
} as {
  [key: string]: Detector;
};

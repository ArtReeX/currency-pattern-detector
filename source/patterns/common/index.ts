import Doji from "./Doji";
import DarkCloudCover from "./DarkCloudCover";
import DragonFlyDoji from "./DragonFlyDoji";
import GraveStoneDoji from "./GraveStoneDoji";
import { Detector } from "../../types";

export default { Doji, DarkCloudCover, DragonFlyDoji, GraveStoneDoji } as {
  [key: string]: Detector;
};

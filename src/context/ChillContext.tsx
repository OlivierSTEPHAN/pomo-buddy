import { createContext } from "react";
import data from "../utils/ConstData";

interface ChillContextInterface {
  currentDuration: number;
  currentCycle: number;
  timer: number;
  isChilling: boolean;
  isPaused: boolean;
  handlePausedChange: () => void;
  handleCycleChange: () => void;
}

const ChillContext = createContext<ChillContextInterface>({
  currentDuration: data[0].duration,
  currentCycle: 0,
  timer: data[0].duration,
  isChilling: false,
  isPaused: false,
  handlePausedChange: () => {},
  handleCycleChange: () => {},
});

export default ChillContext;

import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import colors from "../../utils/colors";
import { Container, WorkIcon, ChillIcon } from "./LittleCircularProgressbarSC";

interface Props {
  id: number;
  currentCycle: number;
  isWork: boolean;
  value: number;
  maxValue: number;
}

const CustomCircularProgressBar: React.FC<Props> = ({
  id,
  currentCycle,
  isWork,
  value,
  maxValue,
}) => {
  const computedValue = () => {
    let theValue;
    if (currentCycle > id) {
      theValue = isWork ? maxValue : 0;
    } else if (currentCycle === id) {
      theValue = isWork ? maxValue - value + 0.01 : value;
    } else {
      theValue = isWork ? 0 : maxValue;
    }
    return theValue;
  };
  return (
    <Container>
      <CircularProgressbarWithChildren
        key={id}
        value={computedValue()}
        maxValue={maxValue}
        styles={buildStyles({
          rotation: 0.5,
          strokeLinecap: "round",
          textSize: "35px",
          pathTransitionDuration: 1,
          pathColor: id === currentCycle ? "green" : colors.grey,
          trailColor: "white",
        })}
      >
        {isWork ? <WorkIcon /> : <ChillIcon />}
      </CircularProgressbarWithChildren>
    </Container>
  );
};

export default CustomCircularProgressBar;

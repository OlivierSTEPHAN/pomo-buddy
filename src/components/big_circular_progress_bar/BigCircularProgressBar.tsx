import { useContext, useMemo } from "react";
import { buildStyles } from "react-circular-progressbar";
import ChillContext from "../../context/ChillContext";
import {
  Container,
  DashedCircle,
  Timing,
  CustomCircularProgressBar,
} from "./BigCircularProgressBarSC";

function BigCircularProgressBar() {
  const { timer, isPaused, currentDuration, isChilling } =
    useContext(ChillContext);

  const displayTime = useMemo(() => {
    const minutes = Math.floor(timer / 60);
    const secondes = timer % 60;

    const minutesString =
      minutes < 10 ? "0" + minutes.toString() : minutes.toString();
    const secondesString =
      secondes < 10 ? "0" + secondes.toString() : secondes.toString();

    return minutesString + "." + secondesString;
  }, [timer]);

  return (
    <Container>
      <DashedCircle $isPaused={isPaused} />
      <CustomCircularProgressBar
        value={isChilling ? currentDuration - timer : timer}
        maxValue={currentDuration}
        strokeWidth={50}
        background
        styles={buildStyles({
          backgroundColor: "transparent",
          strokeLinecap: "butt",
          pathTransitionDuration: 1,
          trailColor: "transparent",
          pathColor: "white",
        })}
      >
        <Timing> {displayTime} </Timing>
      </CustomCircularProgressBar>
    </Container>
  );
}

export default BigCircularProgressBar;

import { useContext } from "react";

import styled from "styled-components";
import ChillContext from "../../context/ChillContext";
import colors from "../../utils/colors";
import LittleCircularProgressBar from "../little_progress_bar/LittleCircularProgressbar";
import {
  Container,
  ProgressbarRow,
  Column,
  CircleRow,
  ColoredCircle,
  Timing,
  Row,
} from "./TimerSC";

const State = styled.p``;
function Timer() {
  const { currentDuration, timer, currentCycle } = useContext(ChillContext);

  return (
    <Container>
      <ProgressbarRow>
        <Row>
          <LittleCircularProgressBar
            isWork={true}
            value={timer}
            maxValue={currentDuration}
            id={0}
            currentCycle={currentCycle}
          />
          <LittleCircularProgressBar
            isWork={false}
            value={timer}
            maxValue={currentDuration}
            id={1}
            currentCycle={currentCycle}
          />
          <LittleCircularProgressBar
            isWork={true}
            value={timer}
            maxValue={currentDuration}
            id={2}
            currentCycle={currentCycle}
          />
          <LittleCircularProgressBar
            isWork={false}
            value={timer}
            maxValue={currentDuration}
            id={3}
            currentCycle={currentCycle}
          />
        </Row>

        <Column>
          <CircleRow>
            {[...Array(4)].map((_, index) => {
              if (index < Math.round(currentCycle / 2)) {
                return <ColoredCircle key={index} color={colors.grey} />;
              } else {
                return <ColoredCircle key={index} color="white" />;
              }
            })}
          </CircleRow>
          <Timing> {currentDuration} minutes </Timing>
          <State>
            {"Cycle de "}
            {currentCycle % 2 == 0 ? "travail" : "pause"}
          </State>
        </Column>
        <Row>
          <LittleCircularProgressBar
            isWork={true}
            value={timer}
            maxValue={currentDuration}
            id={4}
            currentCycle={currentCycle}
          />
          <LittleCircularProgressBar
            isWork={false}
            value={timer}
            maxValue={currentDuration}
            id={5}
            currentCycle={currentCycle}
          />
          <LittleCircularProgressBar
            isWork={true}
            value={timer}
            maxValue={currentDuration}
            id={6}
            currentCycle={currentCycle}
          />
          <LittleCircularProgressBar
            isWork={false}
            value={timer}
            maxValue={currentDuration}
            id={7}
            currentCycle={currentCycle}
          />
        </Row>
      </ProgressbarRow>
    </Container>
  );
}

export default Timer;

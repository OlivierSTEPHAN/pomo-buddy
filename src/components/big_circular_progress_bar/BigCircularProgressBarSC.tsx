import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import styled, { keyframes } from "styled-components";
import { devices } from "../../utils/MediaSize";

const Container = styled.section`
  position: relative;
  width: 500px;
  height: 500px;
  margin: 10px;
  @media ${devices.md} {
    height: 0;
    width: 60%;
    padding-bottom: 60%;
  }
`;

const Timing = styled.div`
  background-color: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(4px);
  color: white;
  border-radius: 8px;
  height: 100px;
  width: 150px;
  margin: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 50px;
  font-family: "DsDigi";
`;

const rotate = keyframes`
    from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
  `;

const DashedCircle = styled.div<{ $isPaused: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px dashed white;
  border-radius: 50%;
  padding: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${rotate} 180s linear infinite;
  animation-direction: ${(props) => (props.$isPaused ? "normal" : "reverse")};
  transition: animation-direction 0.1s;
`;

const CustomCircularProgressBar = styled(CircularProgressbarWithChildren)`
  z-index: 1;
`;

export { Container, Timing, DashedCircle, CustomCircularProgressBar };

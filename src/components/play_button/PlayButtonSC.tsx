import styled from "styled-components";
import { devices } from "../../utils/MediaSize";

const Container = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
  @media ${devices.lg} {
    height: 35px;
  }
`;

const PlayButtonStyled = styled.svg`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  fill: white;
  transition: all 0.1s;
  &:hover {
    cursor: pointer;
    scale: 1.1;
  }
  @media ${devices.lg} {
    width: 35px;
    height: 35px;
  }
`;

export { PlayButtonStyled, Container };

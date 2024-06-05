import styled from "styled-components";
import { devices } from "../../utils/MediaSize";

const Container = styled.div`
  position: relative;
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
    width: 40px;
    height: 40px;
  }
`;

export { PlayButtonStyled, Container };

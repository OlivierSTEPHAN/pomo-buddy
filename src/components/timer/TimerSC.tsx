import styled from "styled-components";
import { devices } from "../../utils/MediaSize";

const Container = styled.section`
  max-height: 45vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const ColoredCircle = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin: 10px;
  background-color: ${(props) => props.color};
  transition: all 0.2s ease-in-out;
  @media ${devices["2xl"]} {
    width: 20px;
    height: 20px;
    margin: 8px;
  }
`;

const CircleRow = styled.div`
  display: flex;
`;

const ProgressbarRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Timing = styled.p`
  text-transform: uppercase;
`;

export {
  Container,
  ColoredCircle,
  CircleRow,
  ProgressbarRow,
  Column,
  Row,
  Timing,
};

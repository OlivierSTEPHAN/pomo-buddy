import { GiNightSleep } from "react-icons/gi";
import { HiOutlineBriefcase } from "react-icons/hi";
import styled from "styled-components";
import { devices } from "../../utils/MediaSize";

const Container = styled.div`
  margin: 5px;
  max-width: 80px;
  transition: all 0.2s;
  @media ${devices["2xl"]} {
    height: 12%;
    width: 12%;
  }
`;

const ChillIcon = styled(GiNightSleep)`
  height: 50px;
  width: 50px;
  @media ${devices["2xl"]} {
    height: 50%;
    width: 50%;
  }
`;

const WorkIcon = styled(HiOutlineBriefcase)`
  height: 50px;
  width: 50px;
  @media ${devices["2xl"]} {
    height: 50%;
    width: 50%;
  }
`;

export { Container, ChillIcon, WorkIcon };

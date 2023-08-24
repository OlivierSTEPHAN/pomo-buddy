import styled from "styled-components";
import { devices } from "../../utils/MediaSize";

const Container = styled.div`
  height: 150px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media ${devices.sm} {
    max-height: 90px;
  }
`;

const Line = styled.div`
  width: 328px;
  border: 5px solid white;
  border-radius: 2px;
  @media ${devices.lg} {
    border: 2px solid white;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const RowNoWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 4px;
`;

const FollowMeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const FollowMeText = styled.p`
  width: 100%;
  white-space: nowrap;
  text-align: center;
`;

const FollowMeIcon = styled.a`
  transition: all 0.2s ease-in-out;
  margin-left: 3%;
  margin-right: 3%;
  color: white;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
`;

const Mentions = styled.p`
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const KezakoLePomodoro = styled.a`
  transition: all 0.2ms ease-in-out;
  overflow: hidden;
  text-decoration: none;
  color: white;
  &:hover {
    cursor: pointer;
    transform: rotate3d(1, 1, 1, 5deg);
  }
`;

const PopupContainer = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.$open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  color: black;
  &:hover {
    cursor: default;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  background-color: transparent;
  border: none;
  font-size: 34px;
  cursor: pointer;
  &:hover {
    color: lightblue;
    transition: all 0.2s;
  }
`;

export {
  Container,
  Line,
  Row,
  RowNoWrap,
  FollowMeContainer,
  FollowMeText,
  FollowMeIcon,
  Mentions,
  KezakoLePomodoro,
  PopupContainer,
  PopupContent,
  CloseButton,
};

import { useContext } from "react";

import styled from "styled-components";
import { Toaster } from "react-hot-toast";

import colors from "./utils/colors";
import ChillContext from "./context/ChillContext";
import "react-circular-progressbar/dist/styles.css";
import Header from "./components/header/Header";
import BigCircularProgressBar from "./components/big_circular_progress_bar/BigCircularProgressBar";
import Footer from "./components/footer/Footer";
import Timer from "./components/timer/Timer";
import PlayButton from "./components/play_button/PlayButton";
import Spacer from "./components/spacer/Spacer";

interface MainContainerInterface {
  $isChilling: boolean;
}

const MainContainer = styled.div<MainContainerInterface>`
  height: 100dvh;
  width: 100dvw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: all 1s ease-in-out;
  background-color: ${({ $isChilling }) =>
    $isChilling ? colors.bgSecondary : colors.bgPrimary};
`;

function App() {
  const { isChilling } = useContext(ChillContext);
  return (
    <MainContainer $isChilling={isChilling}>
      <Toaster position="bottom-center" />
      <Header />
      <Spacer />
      <BigCircularProgressBar />
      <PlayButton />
      <Timer />
      <Footer />
    </MainContainer>
  );
}

export default App;

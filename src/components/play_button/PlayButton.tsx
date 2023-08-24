import { useContext } from "react";
import { PlayButtonStyled, Container } from "./PlayButtonSC";
import ChillContext from "../../context/ChillContext";

function PlayButton() {
  const { isPaused, handlePausedChange } = useContext(ChillContext);

  return (
    <Container>
      <PlayButtonStyled viewBox="0 0 50 50" onClick={handlePausedChange}>
        {isPaused ? (
          <path d="M9 45V5l36 20z" />
        ) : (
          <path d="M15 9H19V41H15zM31 9H35V41H31z" />
        )}
      </PlayButtonStyled>
    </Container>
  );
}

export default PlayButton;

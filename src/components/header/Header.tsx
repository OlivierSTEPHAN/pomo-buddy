import { useContext } from "react";
import ChillContext from "../../context/ChillContext";
import LogoNoBg from "/images/logo_nobg.png";
import LogoNoBgWhite from "/images/logo_nobg_white.png";
import { HeaderStyled, Logo } from "./HeaderSC";

function Header() {
  const { isChilling } = useContext(ChillContext);

  return (
    <HeaderStyled>
      <Logo
        src={isChilling ? LogoNoBgWhite : LogoNoBg}
        alt="Logo de l'application, fais avec paint et surtout avec amour"
      />
    </HeaderStyled>
  );
}

export default Header;

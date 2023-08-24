import { VscGithub } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { useRef, useState } from "react";
import {
  Container,
  Line,
  Row,
  FollowMeContainer,
  FollowMeText,
  FollowMeIcon,
  Mentions,
  KezakoLePomodoro,
  PopupContainer,
  PopupContent,
  CloseButton,
  RowNoWrap,
} from "./FooterSC";

function Footer() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    console.log("ouai");
    setIsPopupOpen(false);
  };

  return (
    <Container>
      <Line />
      <Row>
        <FollowMeContainer>
          <FollowMeText>Follow me :</FollowMeText>
          <RowNoWrap>
            <FollowMeIcon
              href="https://github.com/OlivierSTEPHAN"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mon profil GitHub"
            >
              <VscGithub />
            </FollowMeIcon>
            <FollowMeIcon
              href="https://www.linkedin.com/in/olivier-stephan-9b5077186/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mon profil LinkedIn"
            >
              <AiOutlineLinkedin />
            </FollowMeIcon>
          </RowNoWrap>
        </FollowMeContainer>
        <Mentions onClick={openPopup}>Mentions légales</Mentions>
        <KezakoLePomodoro
          href="https://fr.wikipedia.org/wiki/Technique_Pomodoro"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Le meilleur site en vrai"
        >
          Kezako le Pomodoro ?
        </KezakoLePomodoro>
      </Row>
      <PopupContainer $open={isPopupOpen}>
        <PopupContent ref={popupRef}>
          <CloseButton onClick={closePopup}>&times;</CloseButton>
          <h2>Éditeur du site :</h2>
          <p>Nom du développeur : Olivier STEPHAN</p>

          <h2>Hébergeur du site :</h2>
          <p>
            Nom de l'hébergeur : [Nom de l'hébergeur]
            <br />
            Adresse : [Adresse de l'hébergeur]
            <br />
            Téléphone : [Numéro de téléphone de l'hébergeur]
            <br />
            Email : [Adresse e-mail de l'hébergeur]
          </p>

          <h2>Propriété intellectuelle :</h2>
          <p>
            Le contenu de ce site est protégé par le droit d'auteur et
            appartient à Olivier STEPHAN sauf indication contraire. Toute
            reproduction ou utilisation non autorisée du contenu est interdite.
          </p>

          <h2>Cookies :</h2>
          <p>
            Ce site n'utilise pas de cookies pour collecter des données
            personnelles.
          </p>
          <h2>Loi applicable :</h2>
          <p>
            Les présentes mentions légales sont régies par les lois en vigueur
            en France.
          </p>
        </PopupContent>
      </PopupContainer>
    </Container>
  );
}

export default Footer;

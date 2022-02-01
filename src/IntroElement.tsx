import styled from "styled-components";
import AppFigure from "./assets/images/app_illustration.svg";
import { Link } from "react-scroll";
import { mobileMaxWidth } from "./globalConstants";
import { ReactComponent as UpWave } from "./assets/images/up_wave.svg";

const BackgroundWrapper = styled.div`
  padding: 100px 30px 0 30px;
  display: flex;
  justify-content: center;
  background-color: #023047;
  margin-bottom: -2px;
`;

const Column = styled.div`
  width: 40%;
  height: 435px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: ${mobileMaxWidth}) {
    width: 80%;
    text-align: center;
    align-items: center;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 45px;
`;

const Body = styled.h3`
  color: gray;
  font-size: 16px;
`;

const ActionButton = styled(Link)`
  background-color: #ffffff;
  border: 1px solid #222222;
  border-radius: 8px;
  box-sizing: border-box;
  color: #222222;
  cursor: pointer;
  display: inline-block;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  outline: none;
  padding: 13px 23px;
  text-align: center;
  touch-action: manipulation;
  transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s,
    transform 0.1s;
  user-select: none;
  width: auto;

  &:focus-visible {
    box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
    transition: box-shadow 0.2s;
  }

  &:active {
    background-color: #f7f7f7;
    border-color: #000000;
    transform: scale(0.96);
  }

  &:disabled {
    border-color: #dddddd;
    color: #dddddd;
    cursor: not-allowed;
    opacity: 1;
  }
`;

const Figure = styled.img`
  width: 40%;

  @media screen and (max-width: ${mobileMaxWidth}) {
    display: none;
  }
`;

function IntroElement() {
  return (
    <div id="home">
      <BackgroundWrapper>
        <Column>
          <Title>Nyckeln till din apputveckling</Title>
          <Body>
            Vi hjälper dig att förverkliga eller vidareutveckla ditt företags
            app idé på ett konstadseffektivt sätt. Alla appar vi bygger skrivs i
            Googles populära ramverk Flutter, som fungerar för både iOS &
            Android.
          </Body>
          <ActionButton to="contact" smooth={true} offset={-100}>
            Hör av dig till oss
          </ActionButton>
        </Column>
        <Figure src={AppFigure} />
      </BackgroundWrapper>
      <UpWave />
    </div>
  );
}

export default IntroElement;

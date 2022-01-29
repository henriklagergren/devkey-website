import styled from "styled-components";
import AppFigure from "./assets/images/app_illustration.svg";

const BackgroundWrapper = styled.div`
    height: 330px;
    padding: 100px 30px 0 30px;
    display: flex;
    justify-content: center;
    background-color: #023047;
`;

const LinearCut = styled.div`
    background-image: linear-gradient(176deg, #023047 70%, transparent calc(70% + 2px));
    z-index: 1;
    height: 300px;
`;

const Column = styled.div`
    width: 40%;
    height: 435px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const Title = styled.h1`
    color: white;
    font-size: 45px;
`;

const Body = styled.h3`
    color: gray;
    font-size: 16px;
`;

const ActionButton = styled.button`
  background-color: #FFFFFF;
  border: 1px solid #222222;
  border-radius: 8px;
  box-sizing: border-box;
  color: #222222;
  cursor: pointer;
  display: inline-block;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  outline: none;
  padding: 13px 23px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow .2s,-ms-transform .1s,-webkit-transform .1s,transform .1s;
  user-select: none;
  -webkit-user-select: none;
  width: auto;

&:focus-visible {
  box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
  transition: box-shadow .2s;
}

&:active {
  background-color: #F7F7F7;
  border-color: #000000;
  transform: scale(.96);
}

&:disabled {
  border-color: #DDDDDD;
  color: #DDDDDD;
  cursor: not-allowed;
  opacity: 1;
}

`;

const Figure = styled.img`
    height: 435px;

`;


function IntroElement() {
    return (
        <div>
            <BackgroundWrapper>
                <Column>
                    <Title>Nyckeln till din apputveckling</Title>
                    <Body>Vi hjälper dig att förverkliga eller vidareutveckla ditt företags app idé på ett konstadseffektivt sätt. Alla appar vi bygger skrivs i Googles populära ramverk Flutter, som fungerar för både iOS & Android.</Body>
                    <ActionButton>Hör av dig till oss</ActionButton>
                </Column>
                <Figure src={AppFigure} />
            </BackgroundWrapper>
            <LinearCut />
        </div>
    )
}

export default IntroElement;
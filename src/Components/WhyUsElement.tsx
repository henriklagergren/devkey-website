import styled from "styled-components";

import { mobileMaxWidth } from "./../globalConstants";
import { ReactComponent as DownWave } from "./../assets/images/down_wave.svg";

import ProfilePicture from "./../assets/images/profile_picture.jpg";

const Container = styled.div`
  margin-bottom: -6px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 35px;
`;
const Body = styled.text`
  font-size: 16px;
`;

const ProfileImage = styled.img`
  margin: 0 20px;
  width: 200px;
  border-radius: 200px;
  @media screen and (max-width: ${mobileMaxWidth}) {
    width: 150px;
    margin-bottom: 20px;
  }
`;

const Row = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  @media screen and (max-width: ${mobileMaxWidth}) {
    flex-direction: column;
  }
`;

const WhyUsElement = () => {
  return (
    <Container id="whyUs">
      <Title>Om devKey</Title>
      <Row>
        <ProfileImage src={ProfilePicture} />
        <Body>
          {
            "Hej! 👋 Jag heter Henrik Lagergren, en passionerad apputvecklare och entreprenör, som ligger bakom devKey. Med en stark bakgrund och stort intresse inom apputveckling har jag lanserat tre applikationer tillgängliga både på Google Play och App Store. Dessa appar är en hobby, därav uppdateras dem inte frekvent. Om du vill läsa mer om apparna kan du göra detta här nedan 👇"
          }
        </Body>
      </Row>
      <DownWave />
    </Container>
  );
};

export default WhyUsElement;

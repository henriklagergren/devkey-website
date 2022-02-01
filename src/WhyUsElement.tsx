import styled from "styled-components";
import BoltIcon from "./assets/images/bolt.svg";
import SavingsIcon from "./assets/images/savings.svg";
import ScheduleIcon from "./assets/images/schedule.svg";
import SmartphoneIcon from "./assets/images/smartphone.svg";
import SpeedIcon from "./assets/images/speed.svg";
import HotIcon from "./assets/images/whatshot.svg";
import FeatureItem from "./FeatureItem";
import { mobileMaxWidth } from "./globalConstants";
import { ReactComponent as DownWave } from "./assets/images/down_wave.svg";

const Wrapper = styled.div`
  margin-bottom: -4px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 30px;
`;
const Body = styled.h3`
  text-align: center;
  font-size: 16px;
`;

const Grid = styled.div`
  padding: 5%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 50px;
  grid-column-gap: 30px;

  @media screen and (max-width: ${mobileMaxWidth}) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

function WhyUsElement() {
  return (
    <Wrapper id="whyUs">
      <Title>Varför devKey?</Title>
      <Body>
        Det finns flera anledningar till att välja devKey som apputvecklare:
      </Body>
      <Grid>
        <FeatureItem
          title="Både Android & iOS"
          body="Alla våra appar utvecklas i Googles populära ramverk Flutter, vilket möjliggör en kodbas för både iOS & Android."
          icon={SmartphoneIcon}
        />
        <FeatureItem
          title="Kort utvecklingstid"
          body="Hantering av endast en kodbas tillsammans med förbyggda komponenter minskar utvecklingstiden."
          icon={BoltIcon}
        />
        <FeatureItem
          title="Låg kostnad"
          body="Kortare utvecklingstid och vår erfarenhet av ramverket bidrar till lägre kostnader."
          icon={SavingsIcon}
        />
        <FeatureItem
          title="Bra prestanda"
          body="Appar skrivna i Flutter presterar bättre än sina konkurrenter, vilket i sin tur höjer användarupplevelsen."
          icon={SpeedIcon}
        />
        <FeatureItem
          title="Modernt gränssnitt"
          body="Vi använder oss av Material UI, ett gränssnitt som ligger helt rätt i tiden."
          icon={HotIcon}
        />
        <FeatureItem
          title="Stödjer äldre mobiler"
          body="Våra appar ser exakt lika ut på alla enheter, även äldre mobiler."
          icon={ScheduleIcon}
        />
      </Grid>
      <DownWave />
    </Wrapper>
  );
}

export default WhyUsElement;

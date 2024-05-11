import styled from "styled-components";
import ProjectItem from "./ProjectItem";
import FixaKorkortIcon from "./../assets/images/fixa-korkort-icon.png";
import FixaKorkortImage from "./../assets/images/fixa-korkort-app.png";
import BadtempenIcon from "./../assets/images/badtempen-icon.png";
import BadtempenImage from "./../assets/images/badtempen-app.png";
import ThermometerIcon from "./../assets/images/thermometer-icon.png";
import ThermometerImage from "./../assets/images/thermometer-app.png";

const BackgroundWrapper = styled.div`
  background-color: #023047;
  padding-top: 30px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  color: #fdfdfd;
  padding: 0;
  margin: 0;
`;

const OurProjectsElement = () => {
  return (
    <BackgroundWrapper id="ourProjects">
      <Title>Våra appar</Title>
      <ProjectItem
        mirrorImage={false}
        appImage={FixaKorkortImage}
        appIcon={FixaKorkortIcon}
        title="Fixa Körkort"
        body="Fixa körkort hjälper personer som vill öva på teorin inför teoriprovet för B-körkort. Appen innehåller massvis av funktioner för att hjälpa användarna att klara teoriprovet."
        checkboxTexts={[
          "Över 870st körkortsfrågor",
          "Hjälpt massor av svenskar att ta körkort",
          "Över 100.000 nedladdningar",
        ]}
        googlePlayLink="https://play.google.com/store/apps/details?hl=sv&id=com.korkort"
        appStoreLink="https://apps.apple.com/SE/app/id1455678857"
        externalWebsite="https://fixakorkort.se"
      />

      <ProjectItem
        mirrorImage={true}
        appImage={BadtempenImage}
        appIcon={BadtempenIcon}
        title="Badtempen"
        body="Badtempen gör det supersmidigt att dagligen få vattentemperaturer hos din närmsta badplats. Appen visar nämligen vattentemperaturer året om för alla badplatser längs med den svenska kusten."
        checkboxTexts={[
          "+550 stycken badplatser",
          "Temperaturer uppdateras var tredje timme",
          "Allmän information om badplatserna",
        ]}
        googlePlayLink="https://play.google.com/store/apps/details?id=se.badtempen.badtempen"
        appStoreLink="https://apps.apple.com/se/app/badtempen/id1468679946"
      />

      <ProjectItem
        mirrorImage={false}
        appImage={ThermometerImage}
        appIcon={ThermometerIcon}
        title="Termometer 24/7"
        body="En stilren och intuitiv mobilapp designad för att ge dig realtidsinformation om den aktuella temperaturen utomhus 24/7."
        checkboxTexts={[
          "Utomhustemperatur i realtid",
          "10-dagars prognos",
          "Tillgänglig på +70 olika språk",
        ]}
        googlePlayLink="https://play.google.com/store/apps/details?id=se.devkey.thermometer"
        appStoreLink="https://apps.apple.com/se/app/termometer-24-7/id6473653209"
      />
    </BackgroundWrapper>
  );
};

export default OurProjectsElement;

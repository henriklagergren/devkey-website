import styled from "styled-components";
import ProjectItem from "./ProjectItem";
import FixaKorkortIcon from "./assets/images/fixa-korkort-icon.png";
import FixaKorkortImage from "./assets/images/fixa-korkort-app.png";
import BadtempenIcon from "./assets/images/badtempen-icon.png";
import BadtempenImage from "./assets/images/badtempen-app.png";

const BackgroundWrapper = styled.div`
  background-color: #023047;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  color: #fdfdfd;
  padding: 0%;
  margin: 0;
`;

function OurProjectsElement() {
  return (
    <BackgroundWrapper>
      <Title>Våra projekt</Title>
      <ProjectItem
        mirrorImage={false}
        appImage={FixaKorkortImage}
        appIcon={FixaKorkortIcon}
        title="Fixa Körkort"
        body="Fixa körkort hjälper personer som vill öva på teorin inför teoriprovet för B-körkort. Appen innehåller massvis av funktioner och över 870st körkortsfrågor."
        checkboxTexts={[
          "Tillgänglig på Android & iOS",
          "Totalt över 40 tusen nedladdningar",
          "Hjälpt massor av svenskar att ta körkort",
        ]}
      />

      <ProjectItem
        mirrorImage={true}
        appImage={BadtempenImage}
        appIcon={BadtempenIcon}
        title="Badtempen"
        body="Badtempen gör det supersmidigt att dagligen få vattentemperaturer hos din närmsta badplats. Appen visar nämligen vattentemperaturer året om för alla badplatser längs med den svenska kusten."
        checkboxTexts={[
          "Tillgänglig på Android & iOS",
          "Över 550 stycken badplatser",
          "Temperaturer uppdateras var tredje timme",
        ]}
      />
    </BackgroundWrapper>
  );
}

export default OurProjectsElement;

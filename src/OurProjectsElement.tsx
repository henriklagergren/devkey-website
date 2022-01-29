import styled from "styled-components";
import ProjectItem from "./ProjectItem";
import FixaKorkortIcon from "./assets/images/fixa-korkort-icon.png";
import FixaKorkortImage from "./assets/images/fixa-korkort-app.png";

const BackgroundWrapper = styled.div`
  background-color: #023047;
  height: 800px;
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
    </BackgroundWrapper>
  );
}

export default OurProjectsElement;

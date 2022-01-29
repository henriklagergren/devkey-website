import styled from "styled-components";
import Header from "./Header";
import IntroElement from "./IntroElement";
import OurProjectsElement from "./OurProjectsElement";
import WhyUsElement from "./WhyUsElement";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <IntroElement />
      <WhyUsElement />
      <OurProjectsElement />
    </Wrapper>
  );
}

export default App;

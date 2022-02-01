import styled from "styled-components";
import ContactUsElement from "./Components/ContactUsElement";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import IntroElement from "./Components/IntroElement";
import OurProjectsElement from "./Components/OurProjectsElement";
import WhyUsElement from "./Components/WhyUsElement";

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
      <ContactUsElement />
      <Footer />
    </Wrapper>
  );
}

export default App;

import styled from "styled-components";
import ContactUsElement from "./Components/ContactUsElement";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import IntroElement from "./Components/IntroElement";
import OurProjectsElement from "./Components/OurProjectsElement";
import WhyUsElement from "./Components/WhyUsElement";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ThermometerAppPrivacyPolicy from "./screens/ThermometerAppPrivacyPolicy";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <IntroElement />
      <WhyUsElement />
      <OurProjectsElement />
      <ContactUsElement />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "*",
    element: <Home />,
  },
  {
    path: "/thermometer-app-privacy-policy",
    element: <ThermometerAppPrivacyPolicy />,
  },
]);

function App() {
  return (
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  );
}

export default App;

import styled from "styled-components";
import DevkeyLogo from "./assets/images/devkey_logo.png";

const Wrapper = styled.div`
  padding: 20px;
  background-color: #202942;
`;

const CompanyIcon = styled.img`
  width: 130px;
`;

const Body = styled.h2`
  width: 30%;
  font-weight: 400;
  font-size: 16px;
  color: #adb5bd;
`;

const Divider = styled.div`
  margin-top: 30px;
  border-top: 1px solid #0e415a;
`;

function Footer() {
  return (
    <Wrapper>
      <CompanyIcon src={DevkeyLogo} />
      <Body>
        Vi hjälper dig att förverkliga eller vidareutveckla ditt företags app
        idé på ett konstadseffektivt sätt. Alla appar vi bygger skrivs i Googles
        populära ramverk Flutter, som fungerar för både iOS & Android.
      </Body>
      <Divider />
      <Body>© {new Date().getFullYear()} devkey Software</Body>
    </Wrapper>
  );
}

export default Footer;

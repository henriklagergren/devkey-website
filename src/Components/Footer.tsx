import styled from "styled-components";
import DevkeyLogo from "./../assets/images/devkey_logo.png";
import { mobileMaxWidth } from "./../globalConstants";

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

  @media screen and (max-width: ${mobileMaxWidth}) {
    width: 80%;
  }
`;

const Divider = styled.div`
  margin-top: 30px;
  border-top: 1px solid #0e415a;
`;

const Footer = () => {
  return (
    <Wrapper>
      <CompanyIcon src={DevkeyLogo} />
      <Body>
        devKey har skapat, publicerat, vidareutvecklat två stycken
        cross-platform mobilappar. Dessa appar underhålls aktivt. Apparna har
        byggts i Googles populära ramverk Flutter, som fungerar för både iOS &
        Android.
      </Body>
      <Divider />
      <Body>© {new Date().getFullYear()} devkey Software</Body>
    </Wrapper>
  );
};

export default Footer;

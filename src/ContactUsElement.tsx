import styled from "styled-components";
import ContactFormNameIcon from "./assets/images/contact-icon-man.svg";
import MailIcon from "./assets/images/mail-icon.svg";
import TalkBubbleIcon from "./assets/images/talk-bubble.svg";

const Wrapper = styled.div`
  margin: 30px 5%;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
`;

const Body = styled.h3`
  text-align: center;
  font-size: 20px;
  font-weight: 400;
`;

const ContactForm = styled.div`
  margin-top: 30px;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 20px;
`;

const LargeBox = styled.div`
  grid-area: 2 / 1 / 3 / 3;
`;

const BoxName = styled.label`
  font-weight: 700;
  font-size: 14px;
`;

const BoxForm = styled.div`
  margin-top: 6px;
  position: relative;
`;

const FormIcon = styled.img`
  height: 16px;
  width: 16px;
  position: absolute;
  top: 13px;
  left: 18px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 6px 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  padding-left: 48px;
  border: 1px solid #dee2e6;
  background-color: #ffffff;
  border-radius: 6px;
  box-sizing: border-box;
`;

const BigFormInput = styled.textarea`
  min-height: 40px;
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  border-radius: 6px;
  padding-left: 48px;
  border: 1px solid #ced4da;
  background-color: #ffffff;
  box-sizing: border-box;
`;

function ContactUsElement() {
  return (
    <Wrapper>
      <Title>Vill du få din app utvecklad?</Title>
      <Body>Fyll i forumuläret så återkommer vi så snart som möjligt!</Body>
      <ContactForm>
        <div>
          <BoxName>Namn/Företag:</BoxName>
          <BoxForm>
            <FormIcon src={ContactFormNameIcon} />
            <FormInput placeholder="Namn/Företag"></FormInput>
          </BoxForm>
        </div>
        <div>
          <BoxName>Email:</BoxName>
          <BoxForm>
            <FormIcon src={MailIcon} />
            <FormInput placeholder="Email"></FormInput>
          </BoxForm>
        </div>
        <LargeBox>
          <BoxName>Meddelande:</BoxName>
          <BoxForm>
            <FormIcon src={TalkBubbleIcon} />
            <BigFormInput placeholder="Meddelande"></BigFormInput>
          </BoxForm>
        </LargeBox>
      </ContactForm>
    </Wrapper>
  );
}

export default ContactUsElement;

import { useEffect, useState } from "react";
import styled from "styled-components";
import ContactFormNameIcon from "./assets/images/contact-icon-man.svg";
import MailIcon from "./assets/images/mail-icon.svg";
import TalkBubbleIcon from "./assets/images/talk-bubble.svg";
import ClipLoader from "react-spinners/ClipLoader";
import $ from "jquery";

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

const SubmitButton = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  letter-spacing: 0.5px;
  transition: all 0.3s;
  font-weight: 600;
  border-radius: 15px;
  background-color: #023047;
  border: 1px solid #023047;
  color: #ffffff;
  box-shadow: 0 3px 5px 0 rgba(47, 85, 212, 0.3);
  cursor: pointer;
  grid-area: 3 / 1 / 3 / 3;

  &:hover {
    background-color: #2443ac;
    border-color: #2443ac;
  }

  &:disabled {
    background-color: #5e5e5e;
    border-color: #5e5e5e;
  }
`;

enum Email {
  not_sent,
  sending,
  sent,
  failed,
}

const EmailMessage = styled.div<{ emailStatus: Email }>`
  font-size: ${(props) => (props.emailStatus === Email.sent ? "20px" : "15px")};
  color: ${(props) => (props.emailStatus === Email.sent ? "green" : "red")};
  font-weight: 700;
`;

function ContactUsElement() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contactForm, setContactForm] = useState(Email.not_sent);

  useEffect(() => {
    if (contactForm === Email.sent) {
      setName("");
      setEmail("");
      setMessage("");
    }
  }, [contactForm]);

  const sendContactForm = async () => {
    $.ajax({
      url: process.env.REACT_APP_FIREBASE_CONTACTFORM_URL,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        name: name,
        email: email,
        message: message,
      },
    })
      .done(() => {
        setContactForm(Email.sent);
      })
      .fail(() => {
        setContactForm(Email.failed);
      });
  };

  return (
    <Wrapper id="contact">
      <Title>Vill du få din app utvecklad?</Title>
      <Body>Fyll i forumuläret så återkommer vi så snart som möjligt!</Body>
      <ContactForm>
        <div>
          <BoxName>Namn/Företag:</BoxName>
          <BoxForm>
            <FormIcon src={ContactFormNameIcon} />
            <FormInput
              placeholder="Namn/Företag"
              id="name"
              value={name}
              onInput={(e) => setName(e.currentTarget.value)}
            ></FormInput>
          </BoxForm>
        </div>
        <div>
          <BoxName>Email:</BoxName>
          <BoxForm>
            <FormIcon src={MailIcon} />
            <FormInput
              placeholder="Email"
              id="email"
              value={email}
              onInput={(e) => setEmail(e.currentTarget.value)}
            ></FormInput>
          </BoxForm>
        </div>
        <LargeBox>
          <BoxName>Meddelande:</BoxName>
          <BoxForm>
            <FormIcon src={TalkBubbleIcon} />
            <BigFormInput
              placeholder="Meddelande"
              id="message"
              value={message}
              onInput={(e) => setMessage(e.currentTarget.value)}
            ></BigFormInput>
          </BoxForm>
        </LargeBox>
        <SubmitButton
          id="submit"
          onClick={() => {
            setContactForm(Email.sending);
            sendContactForm();
          }}
          disabled={contactForm === Email.sending}
        >
          {contactForm === Email.sending ? (
            <ClipLoader
              color={"#fffff"}
              loading={contactForm === Email.sending}
            />
          ) : (
            "Skicka meddelande"
          )}
        </SubmitButton>
        {contactForm === Email.sent && (
          <EmailMessage emailStatus={contactForm}>
            Tack för ditt meddelande!
          </EmailMessage>
        )}
        {contactForm === Email.failed && (
          <EmailMessage emailStatus={contactForm}>
            Ett fel uppstod när meddelandet skulle skickas.
          </EmailMessage>
        )}
      </ContactForm>
    </Wrapper>
  );
}

export default ContactUsElement;

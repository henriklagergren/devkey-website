import styled from "styled-components";
import Checkbox from "./assets/images/checkbox.svg";

const Wrapper = styled.div`
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AppImage = styled.img`
  margin: 0 20px;
  width: 250px;
`;

const Content = styled.div`
  width: 40%;
  text-align: left;
  margin: 0 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const AppIcon = styled.img`
  width: 80px;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-right: 20px;
  display: inline-block;
`;

const ProjectTitle = styled.h3`
  font-size: 30px;
  color: #fdfdfd;
`;

const ProjectBody = styled.p`
  color: #fdfdfd;
`;

const Buttons = styled.div`
  margin-top: 20px;
`;

const AppButton = styled.button`
  background-color: #ffffff;
  border: 1px solid #222222;
  border-radius: 8px;
  box-sizing: border-box;
  color: #222222;
  cursor: pointer;
  display: inline-block;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin-right: 20px;
  outline: none;
  padding: 10px 16px;
  text-align: center;
  touch-action: manipulation;
  transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s,
    transform 0.1s;
  user-select: none;
  width: auto;

  &:focus-visible {
    box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
    transition: box-shadow 0.2s;
  }

  &:active {
    background-color: #f7f7f7;
    border-color: #000000;
    transform: scale(0.96);
  }

  &:disabled {
    border-color: #dddddd;
    color: #dddddd;
    cursor: not-allowed;
    opacity: 1;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
`;

const CheckboxIcon = styled.img`
  height: 16px;
  color: green;
  margin-right: 5px;
`;

const CheckboxText = styled.h4`
  color: #fdfdfd;
  margin: 0;
`;

type props = {
  appImage: string;
  appIcon: string;
  title: string;
  body: string;
  checkboxTexts: string[];
};

function ProjectItem({ appImage, appIcon, title, body, checkboxTexts }: props) {
  return (
    <Wrapper>
      <AppImage src={appImage} />
      <Content>
        <Header>
          <AppIcon src={appIcon} />
          <ProjectTitle>{title}</ProjectTitle>
        </Header>
        <ProjectBody>{body}</ProjectBody>

        {checkboxTexts.map((value, key) => {
          return (
            <CheckboxWrapper key={key}>
              <CheckboxIcon src={Checkbox} />
              <CheckboxText>{value}</CheckboxText>
            </CheckboxWrapper>
          );
        })}
        <Buttons>
          <AppButton>Google Play</AppButton>
          <AppButton>App Store</AppButton>
        </Buttons>
      </Content>
    </Wrapper>
  );
}

export default ProjectItem;

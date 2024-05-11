import styled from "styled-components";
import Checkbox from "./../assets/images/checkbox.svg";
import { ReactComponent as ExternalLinkIcon } from "./../assets/images/external_website.svg";
import { mobileMaxWidth, mobileMinWidth } from "./../globalConstants";

const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AppImage = styled.img`
  margin: 0 20px;
  width: 250px;

  @media screen and (max-width: ${mobileMaxWidth}) {
    display: none;
  }
`;

const AppImageMobile = styled.img`
  margin: 0 20px;
  width: 150px;

  @media screen and (min-width: ${mobileMinWidth}) {
    display: none;
  }
`;

const Content = styled.div`
  width: 30%;
  text-align: left;
  margin: 0 20px;

  @media screen and (max-width: ${mobileMaxWidth}) {
    width: 70%;
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    margin: 0;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${mobileMaxWidth}) {
    justify-content: center;
  }
`;

const AppIcon = styled.img`
  width: 80px;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-right: 20px;
  display: inline-block;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
`;

const ProjectTitle = styled.a<{ hasExternalWebsite: boolean }>`
  font-size: 30px;
  text-decoration: none;
  font-weight: bold;
  color: #fdfdfd;
  cursor: ${(props) => (props.hasExternalWebsite ? "pointer" : "default")};

  &:hover {
    text-decoration: ${(props) =>
      props.hasExternalWebsite ? "underline" : "none"};
  }
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

  @media screen and (max-width: ${mobileMaxWidth}) {
    margin-bottom: 10px;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 0;

  @media screen and (max-width: ${mobileMaxWidth}) {
    justify-content: center;
  }
`;

const CheckboxIcon = styled.img`
  height: 16px;
  color: green;
  margin-right: 5px;
`;

const CheckboxText = styled.h4`
  color: #fdfdfd;
  margin: 0;
  width: 100%;
  text-align: left;
`;

const ExternalLinkIconStyled = styled(ExternalLinkIcon)`
  height: 20px;
  padding-left: 10px;

  @media screen and (max-width: ${mobileMaxWidth}) {
    display: none;
  }
`;

type props = {
  appImage: string;
  mirrorImage: boolean;
  appIcon: string;
  title: string;
  body: string;
  checkboxTexts: string[];
  appStoreLink: string;
  googlePlayLink: string;
  externalWebsite?: string;
};

const ProjectItem = ({
  mirrorImage,
  appImage,
  appIcon,
  title,
  body,
  checkboxTexts,
  appStoreLink,
  googlePlayLink,
  externalWebsite,
}: props) => {
  return (
    <Wrapper>
      {!mirrorImage && <AppImage src={appImage} />}
      <Content>
        <Header>
          <AppIcon src={appIcon} />
          <TitleRow>
            <ProjectTitle
              hasExternalWebsite={externalWebsite !== undefined}
              target="_blank"
              href={externalWebsite}
            >
              {title}
            </ProjectTitle>
            {externalWebsite !== undefined && <ExternalLinkIconStyled />}
          </TitleRow>
        </Header>
        <AppImageMobile src={appImage} />
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
          <AppButton onClick={() => window.open(googlePlayLink)}>
            Google Play
          </AppButton>
          <AppButton onClick={() => window.open(appStoreLink)}>
            App Store
          </AppButton>
        </Buttons>
      </Content>
      {mirrorImage ? <AppImage src={appImage} /> : <></>}
    </Wrapper>
  );
};

export default ProjectItem;

import styled from "styled-components";

const Wrapper = styled.div``;

const AppImage = styled.img``;

const Content = styled.div``;

const Header = styled.div``;

const AppIcon = styled.img``;

const ProjectTitle = styled.h3``;

const ProjectBody = styled.p``;

function ProjectItem() {
  return (
    <Wrapper>
      <AppImage />
      <Content>
        <Header>
          <AppIcon />
          <ProjectTitle></ProjectTitle>
        </Header>
        <ProjectBody></ProjectBody>
      </Content>
    </Wrapper>
  );
}

export default ProjectItem;

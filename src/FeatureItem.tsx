import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 42px;
  margin-bottom: 25px;
`;

const Title = styled.h3`
  margin: 0 0 7px 0;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  color: #161c2d;
`;

const Body = styled.p`
  margin: 0;
  text-align: center;
  font-size: 16px;
  color: #6c757d;
`;

type props = {
  icon: string;
  title: string;
  body: string;
};

function FeatureItem({ icon, title, body }: props) {
  return (
    <Wrapper>
      <Icon src={icon} />
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Wrapper>
  );
}

export default FeatureItem;

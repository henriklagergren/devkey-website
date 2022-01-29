import styled from "styled-components";

const Wrapper = styled.div``;

const Checkbox = styled.img``;

const Text = styled.h4``;

type props = {
  text: string;
};

function CheckBoxText({ text }: props) {
  return (
    <Wrapper>
      <Checkbox />
      <Text>{text}</Text>
    </Wrapper>
  );
}

export default CheckBoxText;

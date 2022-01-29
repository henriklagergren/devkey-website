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
    
`;

const Title = styled.h3`
    
`;

const Body = styled.p`
    text-align: center;
`;

type props = {
    icon: string,
    title: string,
    body: string
}

function FeatureItem({ icon, title, body }: props) {
    return (
        <Wrapper>
            <Icon src={icon}/>
            <Title>{title}</Title>
            <Body>{body}</Body>
        </Wrapper>
    )
}

export default FeatureItem;
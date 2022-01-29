import styled from "styled-components";
import logo from "./assets/images/devkey_logo.png"

const Wrapper = styled.div`
    width: 100vw;
    height: 74px;
    display: flex;
    box-sizing: border-box;
    background-color: transparent;
    justify-content: space-between;
    position: fixed;
    top: 0;
`;

const Logo = styled.img`
    height: calc(100% - 20px);
    width: auto;
    padding: 10px;
`;

const HeaderRow = styled.ul`
    width: calc(100% - 142px);
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0 15%;
    align-items: center;
`;

const RowItem = styled.li`
    color: white;
    text-transform: uppercase;
    list-style: none;
`;



function Header() {
    return <Wrapper>
        <Logo src={logo} />
        <HeaderRow>
            <RowItem>Hem</RowItem>
            <RowItem>Varför devkey?</RowItem>
            <RowItem>Våra Projekt</RowItem>
            <RowItem>Kontakt</RowItem>
        </HeaderRow>
    </Wrapper>
}

export default Header;
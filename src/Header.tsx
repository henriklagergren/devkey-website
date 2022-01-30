import { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "./assets/images/devkey_logo.png";
import { Link, animateScroll as Scroll } from "react-scroll";

const Wrapper = styled.div<{ activeHeader: boolean }>`
  width: 100vw;
  height: 74px;
  display: flex;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.activeHeader ? "white" : "transparent"};
  box-shadow: ${(props) =>
    props.activeHeader ? "0 2px 4px 0 rgba(0,0,0,.2)" : "none"};
  justify-content: space-between;
  position: fixed;
  top: 0;
`;

const Logo = styled.img<{ activeHeader: boolean }>`
  height: calc(100% - 20px);
  width: auto;
  padding: 10px;
  filter: ${(props) => (props.activeHeader ? "invert(1)" : "none")};
  cursor: pointer;
`;

const HeaderRow = styled.ul`
  width: calc(100% - 142px);
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0 15%;
  align-items: center;
`;

const RowItem = styled(Link)<{ activeHeader: boolean }>`
  color: ${(props) => (props.activeHeader ? "black" : "white")};
  text-transform: uppercase;
  list-style: none;
  cursor: pointer;
`;

function Header() {
  const [activeHeader, setActiveHeader] = useState(window.scrollY > 60);

  useEffect(() => {
    const scrollListener = () => {
      const isActive = window.scrollY < 60;
      if (isActive && activeHeader) {
        setActiveHeader(false);
      } else if (!isActive && !activeHeader) {
        setActiveHeader(true);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [activeHeader]);

  return (
    <Wrapper activeHeader={activeHeader}>
      <Logo
        src={logo}
        activeHeader={activeHeader}
        onClick={() => Scroll.scrollToTop()}
      />
      <HeaderRow>
        <RowItem activeHeader={activeHeader} to="home" smooth={true}>
          Hem
        </RowItem>
        <RowItem
          activeHeader={activeHeader}
          to="whyUs"
          smooth={true}
          offset={-100}
        >
          Varför devkey?
        </RowItem>
        <RowItem
          activeHeader={activeHeader}
          to="ourProjects"
          smooth={true}
          offset={-100}
        >
          Våra Projekt
        </RowItem>
        <RowItem
          activeHeader={activeHeader}
          to="contact"
          smooth={true}
          offset={-100}
        >
          Kontakt
        </RowItem>
      </HeaderRow>
    </Wrapper>
  );
}

export default Header;

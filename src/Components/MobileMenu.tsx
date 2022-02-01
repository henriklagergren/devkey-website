import React, { useState } from "react";
import Link from "react-scroll/modules/components/Link";
import styled from "styled-components";
import { mobileMinWidth } from "./../globalConstants";

const Wrapper = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;

  @media screen and (min-width: ${mobileMinWidth}) {
    display: none;
  }
`;

const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  right: 0;
  height: 100vh;
  width: 35vw;
  position: fixed;
  background-color: white;
  box-shadow: 3px 4px 6px 3px rgba(0, 0, 0, 0.3);
  z-index: 1;
  padding: 10rem 0;
  flex-direction: column;
  display: ${({ open }) => (open ? "flex" : "none")};
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media screen and (max-width: 600px) {
    width: 50vw;
  }
`;

const Hamburger = styled.button<{ open: boolean; activeheader: boolean }>`
  width: 2rem;
  height: 2rem;
  padding: 0;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  cursor: pointer;
  outline: none;
  z-index: 1;
  left: ${({ open }) => (open ? "29vw" : "3vw")};

  div {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background-color: ${(props) =>
      props.open ? "#3c4858" : props.activeheader ? "black" : "white"};
    transition: all 0.3s linear;
    transform-origin: 1px;
    transition: all 0.3s linear;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const RowItem = styled.h4`
  color: black;
  text-transform: uppercase;
  margin: 30px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
`;

type props = {
  activeHeader: boolean;
};

const MobileMenu = ({ activeHeader }: props) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Wrapper>
      <StyledMenu open={open}>
        <Link
          to="home"
          smooth={true}
          offset={-100}
          onClick={() => setOpen(false)}
        >
          <RowItem>Hem</RowItem>
        </Link>
        <Link
          to="whyUs"
          smooth={true}
          offset={-100}
          onClick={() => setOpen(false)}
        >
          <RowItem>Varför devkey?</RowItem>
        </Link>

        <Link
          to="ourProjects"
          smooth={true}
          offset={-100}
          onClick={() => setOpen(false)}
        >
          <RowItem>Våra Projekt</RowItem>
        </Link>

        <Link
          to="contact"
          smooth={true}
          offset={-100}
          onClick={() => setOpen(false)}
        >
          <RowItem>Kontakt</RowItem>
        </Link>
      </StyledMenu>
      <Hamburger
        onClick={() => setOpen(!open)}
        open={open}
        activeheader={activeHeader}
      >
        <div />
        <div />
        <div />
      </Hamburger>
    </Wrapper>
  );
};

export default MobileMenu;

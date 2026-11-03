import React from "react";
import Logo from "./Logo";
import MainNav from "./MainNav";
import styled from "styled-components";
import Uploader from "../data/Uploader";
import { HiXMark } from "react-icons/hi2";

const StyledSideBar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  min-width: 0;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    width: min(30rem, 85vw);
    padding: 2.4rem 1.6rem;
    gap: 2.4rem;
    overflow-y: auto;
    box-shadow: var(--shadow-lg);
    transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
    visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
    transition: transform 0.25s ease, visibility 0.25s ease;
  }
`;

const DrawerTop = styled.div`
  display: contents;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
`;

const CloseButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    width: 4rem;
    height: 4rem;
    border: 0;
    border-radius: var(--border-radius-sm);
    background: transparent;
    color: var(--color-grey-600);
    cursor: pointer;

    & svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;

function SideBar({ isOpen, onClose }) {
  return (
    <StyledSideBar id="main-navigation" $isOpen={isOpen}>
      <DrawerTop>
        <Logo />
        <CloseButton type="button" aria-label="Close navigation" onClick={onClose}>
          <HiXMark />
        </CloseButton>
      </DrawerTop>
      <MainNav onNavigate={onClose} />

      <Uploader />
    </StyledSideBar>
  );
}

export default SideBar;

import React from "react";
import styled from "styled-components";
import { HiBars3 } from "react-icons/hi2";

import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import Logo from "./Logo";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2.4rem;

  min-width: 0;

  @media (max-width: 768px) {
    justify-content: space-between;
    gap: 1.2rem;
    padding: 0.8rem 1.6rem;
  }
`;

const MobileLogo = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    flex: 0 0 auto;

    & img {
      height: 4.4rem;
    }
  }
`;

const MenuButton = styled.button`
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
      width: 2.6rem;
      height: 2.6rem;
    }
  }
`;

function Header({ onMenuOpen, isMenuOpen }) {
  return (
    <StyledHeader>
      <MenuButton
        type="button"
        aria-label="Open navigation"
        aria-controls="main-navigation"
        aria-expanded={isMenuOpen}
        onClick={onMenuOpen}
      >
        <HiBars3 />
      </MenuButton>
      <MobileLogo><Logo /></MobileLogo>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;

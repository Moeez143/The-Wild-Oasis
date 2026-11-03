import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 23rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media (max-width: 1000px) {
    grid-template-columns: 20rem minmax(0, 1fr);
  }

  @media (max-width: 768px) {
    display: block;
    height: auto;
    min-height: 100dvh;
  }
`;

const Backdrop = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 1000;
    width: 100%;
    border: 0;
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 4rem 4.8rem 6.4rem;

  min-width: 0;
  overflow-x: hidden;
  overflow-y: auto;

  @media (max-width: 1000px) {
    padding: 3.2rem 2.4rem 4.8rem;
  }

  @media (max-width: 600px) {
    padding: 2.4rem 1.6rem 4rem;
  }

  @media (max-width: 768px) {
    overflow: visible;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  min-width: 0;
  width: 100%;
`;

function AppLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    function closeOnEscape(event) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  return (
    <StyledAppLayout>
      <Header onMenuOpen={() => setIsMenuOpen(true)} isMenuOpen={isMenuOpen} />
      {isMenuOpen && (
        <Backdrop
          type="button"
          aria-label="Close navigation"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <SideBar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;

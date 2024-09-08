import React from "react";
import styled from "styled-components";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import Logout from "../features/authentication/LogOut";
import ButtonIcon from "./ButtonIcon";

const StylesHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StylesHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <Logout />
      </li>
    </StylesHeaderMenu>
  );
}

export default HeaderMenu;

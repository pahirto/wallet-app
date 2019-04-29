import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuContainer = styled.div`
  /* list-style-type: none; */
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;

const MenuItemContainer = styled.div`
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

const Menu = () => {
  const links = [
    { path: "/", label: "Transakce" },
    { path: "/overview", label: "Přehled" }
  ];

  return (
    <MenuContainer>
      {links.map(({ path, label }) => (
        <MenuItemContainer>
          <Link to={path}>{label}</Link>
        </MenuItemContainer>
      ))}
    </MenuContainer>
  );
};

export default Menu;

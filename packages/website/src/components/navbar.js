import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import bigtest_logo from '../images/frontside/bigtest-logo.svg';
import discord_icon from '../images/icons/discord.svg';
import github_icon from '../images/icons/github.svg';

const logo_height = "calc(var(--size-base)*2)";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-half-vw) var(--space-single-vw);  
`;

const NavbarLogo = styled(Link)`
  height: ${logo_height};
`;

const NavbarMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0;
`;

const NavbarItem = styled.li`
  margin-left: calc(var(--space-half-vw)/2);
  margin-bottom: 0;
`;

const NavbarA = styled.a`
  color: var(--color-dark-blue);
  text-decoration: none;
  font-weight: 600;
  font-size: var(--size-med-sm);
`;

// const NavbarLink = styled(Link)`
//   color: var(--color-dark-blue);
//   text-decoration: none;
//   font-weight: 600;
//   font-size: var(--size-med-sm);
// `;

const NavbarIcon = styled.img`
  height: calc(${logo_height}/1.75);
`;

const Navbar = () => (
  <NavbarContainer>
    <NavbarLogo to="/">
      <img src={bigtest_logo} alt="BigTestJS" />
    </NavbarLogo>
    <NavbarMenu>
      {/* <NavbarItem>
        <NavbarLink to="">
          API
        </NavbarLink>
      </NavbarItem> */}
      <NavbarItem>
        <NavbarA href="https://github.com">
          <NavbarIcon src={github_icon} alt="Github" />
        </NavbarA>
      </NavbarItem>
      <NavbarItem>
        <NavbarA href="https://discord.com">
          <NavbarIcon src={discord_icon} alt="Discord" />
        </NavbarA>
      </NavbarItem>
    </NavbarMenu>
  </NavbarContainer>
);

export default Navbar;

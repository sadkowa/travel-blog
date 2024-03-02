import React from "react";
import StyledHeader from "./Header.styled";
import { MainHeading, NavBar } from '../'

import { navTitles } from "../../helpers/data"
import styled from "styled-components";

const Header = () => {

  const ListItem = ({ children }) => {
    return <StyledListItem>{children}</StyledListItem>
  }

    return <StyledHeader>
        <NavBar>
            <StyledList>
              {navTitles.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
            </StyledList>
      </NavBar>
      <MainHeading text='Welcome at my blog!'/>
    </StyledHeader>
}

export default Header


const StyledList = styled.ul`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
  margin: 0 30px;
  list-style: none;
`

const StyledListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 100%;
  transition: 0.3s ease;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.xxsmall};

  &:hover {
    background-color: rgba(0,0,0, 0.1);
  }

  @media ${({ theme }) => theme.media.tablet} {
        font-size: ${({ theme }) => theme.fontSizes.xsmall};
    }
  @media ${({ theme }) => theme.media.desktop} {
      font-size: ${({ theme }) => theme.fontSizes.small};
  }
`
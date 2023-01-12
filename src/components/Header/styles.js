import styled from "styled-components";
import {colors} from "../../config/Colors";
import { Link } from 'react-router-dom';
import {device, size} from "../../config/Devices";

export const Wrapper = styled.header`
  min-width: ${size.mobileM};
  background-color: ${props => props.$dark ? colors.grayDark : colors.white};
`;

export const NavBar = styled.nav`
  height: 55px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin: 0 auto;
  
  @media ${device.tablet}{
    grid-template-columns: auto 1fr;
  }
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.$dark ? colors.white : colors.black};
`;

export const Links = styled.div`
  display: flex;
  justify-self: end;
  
  @media ${device.mobileL}{
    justify-content: space-between;
    width: 100%;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.$dark ? colors.white : colors.black};
  margin: 0 5px;
`;
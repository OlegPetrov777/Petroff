import styled from "styled-components";
import {device} from "../../config/Devices";

export const Wrapper = styled.div`
  margin-bottom: 20vh;

  @media ${device.tablet} {
    margin-bottom: 10vh;
  }
`;

export const SearchBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`;

export const SearchBar = styled.input`
  outline: none;
  border: none;
  grid-column-start: 2;
  padding: 5px 10px;
  border-radius: 5px;
`;

export const Projects = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  
  margin-top: 30px;

  @media ${device.laptopL} {
    grid-template-columns: 1fr 1fr;
  }
  
  @media ${device.laptop} {
    grid-template-columns: 1fr;
  }
`;

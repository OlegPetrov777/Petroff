import styled from "styled-components";
import {device} from "../../config/Devices";

export const Wrapper = styled.div`
  margin-bottom: 50vh;

  @media ${device.laptop} {
    margin-bottom: 35vh;
  }
  
  @media ${device.tablet} {
    margin-bottom: 15vh;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 30px;
  margin-top: 30px;
  
  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const PhotoContainer = styled.div`
`;

export const MyPhoto = styled.img`
  width: 350px;
  height: 450px;
  border-radius: 20px;
`;

export const InfoContainer = styled.div`
  @media ${device.mobileL} {
    padding: 0 5px;
  }
`;
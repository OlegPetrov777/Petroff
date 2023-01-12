import styled from "styled-components";
import {colors} from "../../config/Colors";
import {device} from "../../config/Devices";

export const Wrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 50vh;
  
  @media ${device.tablet} {
    margin-top: 20px;
    margin-bottom: 11vh;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  gap: 50px;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const SocialNetworkContainer = styled.div`
  display: grid;
  align-content: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-start: 3;
  }
`;

export const SocialNetworkIcon = styled.img`
  margin-bottom: 10px;
`;

export const TextContainer = styled.div`
  display: grid;
  gap: 20px;
  align-content: center;
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 62px;
  line-height: 1;

  @media ${device.laptop} {
    font-size: 45px;
  }
`;

export const SubTitle = styled.h3`
  font-weight: 400;
  font-size: 30px;

  @media ${device.laptop} {
    font-size: 25px;
  }
`;

export const PhotoContainer = styled.div`
  width: 400px;
  height: 400px;
  overflow: hidden;
  border-radius: 50%;
  border: 6px solid ${colors.grayDark};

  justify-self: center;

  @media ${device.laptop} {
    width: 300px;
    height: 300px;
  }
`;

export const MyPhoto = styled.img`
  width: 400px;
  height: 525px;
  
  @media ${device.laptop} {
    width: 300px;
    height: 425px;
  }
`;
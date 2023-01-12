import styled from "styled-components";
import {colors} from "./config/Colors";
import {device} from "./config/Devices";


export const Title = styled.h1`
  font-weight: 700;
  font-size: 42px;
  
  margin-bottom: ${props => props.$margin || 0};

  @media ${device.tablet} {
    font-size: 36px;
  }
`;

export const SubTitle = styled.h1`
  font-weight: 400;
  font-size: 24px;

  margin-bottom: ${props => props.$margin || 0};
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  text-align: justify;
  margin-bottom: ${props => props.$margin || 0};
  color: ${props => props.$dark ? colors.white : colors.gray};
`;
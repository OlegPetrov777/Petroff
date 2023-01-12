import styled from "styled-components";
import {colors} from "../../../config/Colors";
import {device} from "../../../config/Devices";

export const Wrapper = styled.div`
  background-color: ${props => props.$dark ? '#999999' : colors.white};
  border: 1px solid ${colors.grayDark};
  border-radius: 15px;
  margin-bottom: 20px;
  padding: 15px;
  text-align: start;
`;

export const Flex = styled.div`
  display: flex;
`;

export const TextContainer = styled.div`
    
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;

export const Date = styled.h1`
  font-size: 14px;
  font-weight: 400;
  padding-left: 5px;
`;

export const Name = styled.div`
  font-size: 32px;
  line-height: 1;
  font-weight: 600;

  @media ${device.tablet} {
    font-size: 24px;
  }
`;

export const Text = styled.h1`
  font-size: 20px;
  font-weight: 400;
  margin-top: 20px;

  font-size: 16px;
`;

export const PostImg = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 5px;
  margin-right: 15px;
  
  @media ${device.tablet} {
    height: 150px;
    width: 150px;
  }
`;
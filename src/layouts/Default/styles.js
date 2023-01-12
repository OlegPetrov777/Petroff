import styled from "styled-components";
import {device, size} from "../../config/Devices";
import {colors} from "../../config/Colors";

export const ContainerLayout = styled.div`
  min-width: ${size.mobileM};
  background-color: ${props => props.$dark ? colors.gray : colors.grayLight};
  color: ${props => props.$dark ? colors.white : colors.black};
  height: 100%;
`;

export const ContainerContent = styled.div`
  width: ${size.laptopM};
  margin: 0 auto;

  @media ${device.laptopM} {
    width: ${size.laptop};
  }

  @media ${device.laptop} {
    width: ${size.tablet};
  }
  @media ${device.tablet} {
    width: ${size.mobileL};
    padding: ${props => props.padding ? '0 10px' : 0};
  }
  @media ${device.mobileL} {
    width: ${size.mobileM};
  }
`;
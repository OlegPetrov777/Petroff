import styled from "styled-components";
import {colors} from "../../../config/Colors";

export const Wrapper = styled.div`
  background-color: ${props => props.$dark ? '#999999' : colors.white};
  justify-self: center;
  border-radius: 15px;
  padding: 10px;
  height: 450px;
  width: 355px;

  display: grid;
  grid-template-rows: auto 1fr auto 1fr;
  gap: 10px;

  .mySwiper {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
`;

export const Tools = styled.div`
  display: flex;
`;

export const Tool = styled.h1`
  background-color: ${props => props.$dark ? colors.grayDark : colors.grayLight};
  border-radius: 10px;
  padding: 2px 10px;
  margin-right: 5px;
  width: auto;
  font-weight: 600;
  font-size: 16px;
`;

export const Description = styled.p`
  text-align: justify;
`;

export const LinkProject = styled.a`
  text-align: justify;
  text-decoration: none;
  color: ${props => props.$dark ? colors.white : colors.black};
`;
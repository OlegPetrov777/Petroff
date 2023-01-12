import React from 'react';
import {Date, Flex, TextContainer, PostImg, Text, Title, Wrapper, Name} from "./styles";
import dogImg from "../../../assets/Images/posts/dog.jpg";
import wayImg from "../../../assets/Images/posts/way.jpg";
import airImg from "../../../assets/Images/posts/air.jpg";
import pcImg from "../../../assets/Images/posts/pc.jpg";
import hatImg from "../../../assets/Images/posts/hat.jpg";
import csgoImg from "../../../assets/Images/posts/csgo.jpg";
import {useSelector} from "react-redux";

const Post = ({title, text, name, date, img}) => {
    const darkTheme = useSelector(state => state.toolkit.darkTheme)

    const images = {
        "dog": dogImg,
        "way": wayImg,
        "air": airImg,
        "hat": hatImg,
        "pc": pcImg,
        "csgo": csgoImg
    }

    return (
        <Wrapper $dark={darkTheme}>
            <Name>{name}</Name>
            <Date>{date}</Date>
            <Flex>
                <PostImg src={images[img]}/>
                <TextContainer>
                    <Title>{title}</Title>
                    <Text>{text}</Text>
                </TextContainer>
            </Flex>
        </Wrapper>
    );
};

export default Post;
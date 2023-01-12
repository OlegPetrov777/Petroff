import React, {useContext} from 'react';
import {
    Title, SubTitle,
    Grid,
    MyPhoto,
    PhotoContainer,
    SocialNetworkContainer,
    SocialNetworkIcon,
    TextContainer,
    Wrapper
} from "./styles";
import {ContainerContent} from "../../layouts/Default/styles";
import TgIcon from "../../assets/Images/icons/icon_telegramm.svg";
import GmailIcon from "../../assets/Images/icons/icon_google.svg";
import GitIcon from "../../assets/Images/icons/icon_github.svg";
import myPhotoImg from "../../assets/Images/my_photo.jpg";

const MainContent = () => {
    return (
            <Wrapper>
                <ContainerContent>
                    <Grid>
                        <SocialNetworkContainer className={"animate__animated animate__fadeIn"}>
                            <a href={"https://t.me/chez737"} target="_blank">
                                <SocialNetworkIcon src={TgIcon}/>
                            </a>
                            <a href={"mailto:ask@htmlbook.ru"} target="_blank">
                                <SocialNetworkIcon src={GmailIcon}/>
                            </a>
                            <a href={"https://github.com/OlegPetrov777"} target="_blank">
                                <SocialNetworkIcon src={GitIcon}/>
                            </a>
                        </SocialNetworkContainer>

                        <TextContainer className={"animate__animated animate__fadeIn"}>
                            <Title>Петров Олег Игоревич</Title>
                            <SubTitle>Frontend Developer</SubTitle>
                        </TextContainer>

                        <PhotoContainer className={"animate__animated animate__bounceInRight"}>
                            <MyPhoto src={myPhotoImg}/>
                        </PhotoContainer>
                    </Grid>
                </ContainerContent>
            </Wrapper>
    );
};

export default MainContent;
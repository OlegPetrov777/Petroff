import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Pagination, Navigation} from "swiper";
import {Description, LinkProject, ProjectImage, Title, Tool, Tools, Wrapper} from "./styles";
import ormImg from "../../../assets/Images/projects/orm.png";
import ormImg2 from "../../../assets/Images/projects/orm2.png";
import ormImg3 from "../../../assets/Images/projects/orm3.png";
import socialNetworkImg from "../../../assets/Images/projects/social_network.png";
import socialNetworkImg2 from "../../../assets/Images/projects/social_network2.png";
import recipeImg from "../../../assets/Images/projects/recipe.png";
import recipeImg2 from "../../../assets/Images/projects/recipe2.png";
import recipeImg3 from "../../../assets/Images/projects/recipe3.png";
import tgBotImg from "../../../assets/Images/projects/tgBot.png";
import houseHackerImg from "../../../assets/Images/projects/house_hacker.png";
import houseHackerImg2 from "../../../assets/Images/projects/house_hacker2.png";
import houseHackerImg3 from "../../../assets/Images/projects/house_hacker3.png";
import {Text} from "../../../styles";
import {useSelector} from "react-redux";

const Project = ({title, img, url, tools, description}) => {
    const darkTheme = useSelector(state => state.toolkit.darkTheme)

    const images = {
        "orm": [ormImg, ormImg2, ormImg3],
        "social_network": [socialNetworkImg, socialNetworkImg2],
        "recipe": [recipeImg, recipeImg2, recipeImg3],
        "tgBot": [tgBotImg],
        "house_hacker": [houseHackerImg, houseHackerImg2, houseHackerImg3]
    }

    return (
        <Wrapper $dark={darkTheme}>
            <Title>{title}</Title>
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper">

                {images[img].map((i, key) =>
                    <SwiperSlide key={key}>
                        <ProjectImage src={i}/>
                    </SwiperSlide>
                )}
            </Swiper>

            <Tools>
                {tools.map((t, key) =>
                    <Tool key={key} $dark={darkTheme}>{t}</Tool>
                )}
            </Tools>
            <Description>{description}</Description>
            {url !== "" ?
                <LinkProject href={url} target="_blank" $dark={darkTheme}>
                    {url.split("/")[0]}//{url.split("/")[2]}
                </LinkProject> :
                <Text $dark={darkTheme}>Ссылки нет :(</Text>}
        </Wrapper>
    );
};

export default Project;
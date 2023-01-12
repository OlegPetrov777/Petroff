import React from 'react';
import {Grid, MyPhoto, PhotoContainer, InfoContainer, Wrapper} from "./styles";
import {Text, Title} from "../../styles";
import myPhotoImg from "../../assets/Images/my_photo.jpg";
import {ContainerContent} from "../../layouts/Default/styles";
import {useDispatch, useSelector} from "react-redux";

const AboutMeContent = () => {
    const darkTheme = useSelector(state => state.toolkit.darkTheme);

    return (
        <Wrapper>
            <ContainerContent>
                <Title>Обо мне</Title>
                <Grid>
                    <PhotoContainer>
                        <MyPhoto src={myPhotoImg}/>
                    </PhotoContainer>

                    <InfoContainer>
                        <Text $dark={darkTheme}>
                            Меня зовут Олег, мне 21 год. Я родился и вырос в городе Ульяновск. С малых лет у меня была
                            предрасположенность к точным наукам, поэтому пошел в физмат класс и сдавал ЕГЭ по физике и
                            информатике. Мне всегда было интересно "ковыряться" в компьютере, начиная от первых команд в
                            терминале, заканчивая полноценной сборкой ПК. Так, в 18 лет я решил стать программистом.
                            <br/><br/>
                            Сейчас я живу в Москве и заканчиваю 4 курс Финансового университета при правительстве РФ на
                            направлении "Прикладная Информатика". В ходе обучения у меня сформировался интерес к
                            Frontend-разработке. Вскоре появилось желание использовать свои знания в профессионально
                            сфере. Я выполнял заказы на фрилансе, а, спустя время, мне удалось устроиться на работу.
                            <br/><br/>
                            Первая компания, в которой я работал - это Домструтор. Я быстро сплотился с коллективом, и
                            работа закипела. Однако, удалось проработать всего ~7 месяцев. Из-за сложившейся ситуации в
                            мире в компании возникли "финансовые трудности" и часть сотрудников попала под сокращение, в
                            число которых попал и я.
                            <br/><br/>
                            Надеюсь, Вам понравится моя работа, и я смогу стать частью Вашей команды.
                        </Text>
                    </InfoContainer>
                </Grid>
            </ContainerContent>
        </Wrapper>
    );
};

export default AboutMeContent;
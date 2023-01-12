import React, {useState} from 'react';
import {Projects, SearchBar, SearchBlock, Wrapper} from "./styles";
import {ContainerContent} from "../../layouts/Default/styles";
import {Title} from "../../styles";
import data from '../../data/projects.json';
import Project from "./Project";

const PortfolioContent = () => {
    const [searchText, setSearchText] = useState('');

    // ПРИМЕР ВЗАИМОДЕЙСТВИЯ С API С ПОМОЩЬЮ AXIOS
    //
    // import axios from 'axios';
    // const axiosInstanceRemote = axios.create({
    //     baseURL: `${URL_API}/api`,
    //     withCredentials: true,
    // });
    //
    // const axiosConfig = {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //     }
    // };
    //
    // export const GetProjects = {
    //     news: () => axiosInstanceRemote.get('/projects', axiosConfig)
    // }
    //
    // GetProjects.news().then(({data}) => {
    //     const projects = data.body;
    // };

    const handleSearch = (e) => {
        setSearchText(e);
    }

    return (
        <Wrapper>
            <ContainerContent>
                <Title>Портфолио</Title>

                <SearchBlock>
                    <SearchBar type={"text"} placeholder={"Введите текст для поиска"}
                               onChange={(e) => handleSearch(e.target.value)}/>
                </SearchBlock>

                <Projects>
                    {data.projects.map((item, key) =>
                        item.title.indexOf(searchText) !== -1 ?
                            <Project key={key} img={item.img}
                                     url={item.url}
                                     title={item.title}
                                     tools={item.tools}
                                     description={item.description}/> : <></>
                    )}
                </Projects>
            </ContainerContent>
        </Wrapper>
    );
};

export default PortfolioContent;
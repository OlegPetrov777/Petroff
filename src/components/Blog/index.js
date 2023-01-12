import React from 'react';
import {Posts, Wrapper} from "./styles";
import {ContainerContent} from "../../layouts/Default/styles";
import {Title} from "../../styles";
import data from "../../data/posts.json";
import Post from "./Post";

const BlogContent = () => {
    return (
        <Wrapper>
            <ContainerContent>
                <Title>Блог</Title>
                <Posts>
                    {data.posts.map((item, key) =>
                        <Post key={key}
                              title={item.title}
                              text={item.text}
                              date={item.date}
                              name={item.name}
                              img={item.img}/>
                    )}
                </Posts>
            </ContainerContent>
        </Wrapper>
    );
};

export default BlogContent;
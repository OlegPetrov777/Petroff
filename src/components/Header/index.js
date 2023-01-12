import React from 'react';
import {NavLink, NavBar, Wrapper, Links, Logo} from "./styles";
import {ContainerContent} from "../../layouts/Default/styles";
import {Switch} from "antd";
import {changeTheme} from "../../redux/toolkitReducer";
import {useDispatch, useSelector} from "react-redux";

const Header = () => {
    const darkTheme = useSelector(state => state.toolkit.darkTheme);
    const dispatch = useDispatch();

    return (
        <Wrapper $dark={darkTheme}>
            <ContainerContent>
                <NavBar>
                    <NavLink to={'/'} style={{justifySelf: 'start'}}>
                        <Logo $dark={darkTheme}>Petroff</Logo>
                    </NavLink>
                    <Links>
                        <NavLink to={'/about-me'} $dark={darkTheme}>Обо мне</NavLink>
                        <NavLink to={'/portfolio'} $dark={darkTheme}>Портфолио</NavLink>
                        <NavLink to={'/blog'} $dark={darkTheme}>Блог</NavLink>
                        <Switch checkedChildren={'dark'}
                                unCheckedChildren={"light"}
                                checked={darkTheme}
                                onChange={() => dispatch(changeTheme())}/>
                    </Links>
                </NavBar>
            </ContainerContent>
        </Wrapper>
    );
};

export default Header;
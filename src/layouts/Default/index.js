import React from 'react';
import {ContainerLayout} from "./styles";
import Header from "../../components/Header";
import {useSelector} from "react-redux";
import Footer from "../../components/Footer";

const DefaultLayout = ({children}) => {
    const darkTheme = useSelector(state => state.toolkit.darkTheme)

    return (
        <ContainerLayout $dark={darkTheme}>
            <Header/>
            {children}
            <Footer/>
        </ContainerLayout>
    );
};

export default DefaultLayout;
import React, { Fragment } from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import {Outlet} from 'react-router-dom';
export default function Layout() {
    return (
        <Fragment>
            <Header/>
            <Outlet />
            <Footer/>
        </Fragment>
    )
 }
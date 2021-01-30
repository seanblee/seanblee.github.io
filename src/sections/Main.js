import React, { Component } from "react";
import About from "./About"
import Landing from "./Landing";
import Projects from "./Projects"
import Footer from "./Footer"
import Work from "./Work"
import { Element } from 'react-scroll'


class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Landing/>
                <Element name="about">
                    <About/>
                </Element>
                <Element name="work">
                    <Work/>
                </Element>
                <Element name="projects">
                    <Projects/>
                </Element>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Main;
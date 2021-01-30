import React, { Component } from "react";
import Typed from "react-typed";
import { Flex , Text , Box } from "rebass";
import Section from "../components/Section"
import "../styles/Landing.css";
import Pdf from "../pages/Resume-SeanLee.pdf";
import { scroller } from 'react-scroll'


const Picture = () => <div id = "bgElement" className="section-div"/>
const SemiDiv = ({children}) => <div className="section-div">{children}</div>
const EndDiv = ({children}) => <div className="end-div">{children}</div>
const NavDiv = ({children}) => <div className="nav-div">{children}</div>
const EmailBar = ({children}) => <div className="email-bar-div">{children}</div>

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

class Landing extends Component {
    constructor() {
        super();
        this.state= {
           email: "seanlee1997@live.com"
        }
     }

    componentDidMount() {
        window.VANTA.GLOBE({
            el: "#bgElement",
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x5eb1bf,
            color2: 0x042a2b,
            size: 1.3,
            backgroundColor: 0xFFFFFF
          })
    }

    scrollTo = (element) => {
        scroller.scrollTo(element, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    openResume = (e) => {
        window.open(Pdf, "_blank");
    }

    openLinked = (e) => {
        window.open("https://www.linkedin.com/in/seanbrianlee/", "_blank")
    }

    changeTitle = () => {
        this.setState({ email: "copied to clipboard!" });
        sleep(2000).then(() => {
            this.setState({email: "seanlee1997@live.com"})
        });
    };

    copyEmail = (e) => {
        navigator.clipboard.writeText("seanlee1997@live.com");
        this.changeTitle();
    }

    render() {
        return (
            <Section id="landing" backgroundColor="#042a2b">
                <Picture/>
                <SemiDiv>
                    <NavDiv>
                        <Flex
                        className="nav-bar"
                        flexDirection="row"
                        height="100%"
                        alignItems="center"
                        px="5vw">
                            <Text className="NavLink" onClick={() => this.scrollTo('about')}>
                                about
                            </Text>
                            <Text className="NavLink" onClick={() => this.scrollTo('work')}>
                                work
                            </Text>
                            <Text className="NavLink" onClick={() => this.scrollTo('projects')}>
                                projects
                            </Text>
                        </Flex>
                    </NavDiv>
                    <EmailBar>
                        <Flex
                        height="100%"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="flex-end">
                            <span className="EmailSeparator"/>
                            <Flex
                            className="EmailButton"
                            onClick={this.copyEmail}>
                                <Text
                                className="EmailBar"
                                >
                                {this.state.email}
                                </Text>
                            </Flex>
                            <span className="EmailSeparator"/>
                        </Flex>
                    </EmailBar>
                    <Flex
                    flex="1"
                    height="100%"
                    flexDirection="row"
                    >
                        <Flex
                        className="hero-div"
                        flex="1"
                        justifyContent="center"
                        flexDirection="column"
                        alignItems="center">
                            <Flex
                            flexDirection="column">
                                <Text
                                className="intro-hero"
                                color="#14213d"
                                fontFamily="Segoel"
                                pb="0.5vw">
                                    hey, it's
                                </Text>
                                <Text
                                className="name-hero"
                                color="#153b50"
                                fontFamily="Segoe"
                                fontWeight="bolder">
                                    Sean Lee
                                </Text>
                                <Typed
                                    className="typed-text"
                                    strings={[
                                        "software engineer @ microsoft",
                                        "computer engineer @ queens",
                                        "engineering outreach @ uoft",
                                        "software dev lead @ wyndo",
                                        ]}
                                    typeSpeed={40}
                                    backSpeed={25}
                                    loop/>
                                <Text
                                className="location-pin"
                                color="#666666"
                                lineHeight="1.5vw"
                                fontFamily="Segoel"
                                fontSize="1.5vw">
                                    📍Seattle, WA
                                </Text>
                                <Flex
                                flexDirection="row"
                                pt="1.5vw">
                                    <Flex>
                                        <Box
                                        className="LandingButton"
                                        px="3vw"
                                        py="1vw"
                                        onClick={this.openLinked}
                                        >
                                            <Text
                                            fontSize="1.3vw"
                                            lineHeight="1.3vw">
                                                connect
                                            </Text>
                                        </Box>
                                    </Flex>
                                    <Flex
                                    pl="1.5vw">
                                        <Box
                                        className="LandingButton"
                                        px="3vw"
                                        py="1vw"
                                        onClick={this.openResume}>
                                            <Text
                                            fontSize="1.3vw"
                                            lineHeight="1.3vw">
                                                view resume
                                            </Text>
                                        </Box>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex
                        className="spacer">
                        </Flex>
                    </Flex>
                </SemiDiv>
                <EndDiv>
                    <Flex
                    flex="1"
                    height="100%"
                    justifyContent="center"
                    alignItems="center">
                        <div className="bounce"/>
                    </Flex>
                </EndDiv>
            </Section>
        );
    }

}

export default Landing;
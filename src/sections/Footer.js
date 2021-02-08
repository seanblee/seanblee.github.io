import React, { Component } from "react";
import { Flex , Text } from "rebass";
import "../styles/Footer.css";
import Section from "../components/FlexSection"
import { scroller } from 'react-scroll'


class Footer extends Component {
    scrollTo = (element) => {
        scroller.scrollTo(element, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }
    render() {
        return (
            <Section className="About" backgroundColor="#00000">
                <div className="desktop-footer">
                    <Flex 
                    backgroundColor="#042a2b"
                    width="100%"
                    my="8vw"
                    height="350px"
                    flexDirection="column">
                        <Flex
                        flexDirection="row"
                        flex="1"
                        px="10vw">
                            <Flex
                            width={1/3}>
                                <Flex
                                flexDirection="column"
                                justifyContent="center">
                                    <Text
                                    color="#cdedf6"
                                    py="0.5vw"
                                    >
                                        Contact Me
                                    </Text>
                                    <Flex>
                                        <Text
                                        color="#cdedf6"
                                        py="0.5vw">
                                            <i class="fa fa-envelope"></i>
                                        </Text>
                                        <Text
                                        color="#cdedf6"
                                        py="0.5vw"
                                        pl="1vw">
                                            seanlee1997@live.com
                                        </Text>
                                    </Flex>
                                    <Flex>
                                        <Text
                                        color="#cdedf6"
                                        py="0.5vw">
                                            <i class="fa fa-phone"></i>
                                        </Text>
                                        <Text
                                        color="#cdedf6"
                                        py="0.5vw"
                                        pl="1vw">
                                            +1 206-536-7739
                                        </Text>
                                    </Flex>
                                    <Flex>
                                        <Text
                                        color="#cdedf6"
                                        py="0.5vw">
                                            <i class="fa fa-phone"></i>
                                        </Text>
                                        <Text
                                        color="#cdedf6"
                                        py="0.5vw"
                                        pl="1vw">
                                            +1 647-991-1711
                                        </Text>
                                    </Flex>
                                    <Flex>
                                        <Text
                                        color="#cdedf6"
                                        py="0.5vw">
                                            <i class="fa fa-map-marker"></i>
                                        </Text>
                                        <Text
                                        color="#cdedf6"
                                        py="0.5vw"
                                        pl="1vw">
                                            Redmond, Washington
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Flex
                            width={1/3}>
                                <Flex
                                flexDirection="column"
                                justifyContent="center"
                                alignItems="center"
                                width="100%">
                                    <Text
                                    fontSize="20px"
                                    color="white">
                                        Reach Out!
                                    </Text>
                                    <Flex
                                    pt="1vw">
                                        <Text
                                        className="FooterLink"
                                        onClick={() => window.open("http://github.com/seanblee")}
                                        fontSize="40px"
                                        color="#cdedf6"
                                        px="1vw">
                                            <i class="fa fa-github"></i>
                                        </Text>
                                        <Text
                                        className="FooterLink"
                                        onClick={() => window.open("https://www.linkedin.com/in/seanbrianlee")}
                                        fontSize="40px"
                                        color="#cdedf6"
                                        px="1vw">
                                            <i class="fa fa-linkedin"></i>
                                        </Text>
                                        <Text
                                        className="FooterLink"
                                        onClick={() => window.open("https://www.facebook.com/sean.lee.167")}
                                        fontSize="40px"
                                        color="#cdedf6"
                                        px="1vw">
                                            <i class="fa fa-facebook"></i>
                                        </Text>
                                        <Text
                                        className="FooterLink"
                                        onClick={() => window.open("mailto:seanlee1997@live.com")}
                                        fontSize="40px"
                                        color="#cdedf6"
                                        px="1vw">
                                            <i class="fa fa-envelope"></i>
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Flex
                            width={1/3}>
                                <Flex
                                flexDirection="column"
                                justifyContent="center"
                                width="100%"
                                alignItems="flex-end">
                                    <Flex>
                                        <Text
                                        className="FooterLink"
                                        color="#cdedf6"
                                        py="0.5vw"
                                        pr="1vw"
                                        onClick={() => this.scrollTo('about')}>
                                            About
                                        </Text>
                                        <span className="timeline-separator"/>
                                    </Flex>
                                    <Flex>
                                        <Text
                                        className="FooterLink"
                                        color="#cdedf6"
                                        py="0.5vw"
                                        pr="1vw"
                                        onClick={() => this.scrollTo('work')}>
                                            Work
                                        </Text>
                                        <span className="timeline-separator"/>
                                    </Flex>
                                    <Flex>
                                        <Text
                                        className="FooterLink"
                                        color="#cdedf6"
                                        py="0.5vw"
                                        pr="1vw"
                                        onClick={() => this.scrollTo('projects')}>
                                            Projects
                                        </Text>
                                        <span className="timeline-separator"/>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex
                        my="1.5vw"
                        justifyContent="center">
                            <Text
                            color="#cdedf6">
                                © Sean Lee 2021
                            </Text>
                        </Flex>
                    </Flex>
                    </div>
                    <div className="mobile-footer">
                    <Flex 
                    backgroundColor="#042a2b"
                    width="100%"
                    my="8vw"
                    height="350px"
                    flexDirection="column">
                        <Flex
                        flexDirection="row"
                        flex="1"
                        px="10vw">
                                <Flex
                                flexDirection="column"
                                justifyContent="center"
                                alignItems="center"
                                width="100%">
                                    <Text
                                    fontSize="20px"
                                    color="white">
                                        Reach Out!
                                    </Text>
                                    <Flex
                                    pt="1vw">
                                        <Text
                                        className="FooterLink"
                                        onClick={() => window.open("http://github.com/seanblee")}
                                        fontSize="40px"
                                        color="#cdedf6"
                                        px="1vw">
                                            <i class="fa fa-github"></i>
                                        </Text>
                                        <Text
                                        className="FooterLink"
                                        onClick={() => window.open("https://www.linkedin.com/in/seanbrianlee")}
                                        fontSize="40px"
                                        color="#cdedf6"
                                        px="1vw">
                                            <i class="fa fa-linkedin"></i>
                                        </Text>
                                        <Text
                                        className="FooterLink"
                                        onClick={() => window.open("https://www.facebook.com/sean.lee.167")}
                                        fontSize="40px"
                                        color="#cdedf6"
                                        px="1vw">
                                            <i class="fa fa-facebook"></i>
                                        </Text>
                                        <Text
                                        className="FooterLink"
                                        onClick={() => window.open("mailto:seanlee1997@live.com")}
                                        fontSize="40px"
                                        color="#cdedf6"
                                        px="1vw">
                                            <i class="fa fa-envelope"></i>
                                        </Text>
                                    </Flex>
                                </Flex>
                        </Flex>
                        <Flex
                        my="1.5vw"
                        justifyContent="center">
                            <Text
                            color="#cdedf6">
                                © Sean Lee 2021
                            </Text>
                        </Flex>
                    </Flex>
                    </div>
            </Section>
        );
    }
}

export default Footer;
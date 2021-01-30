import React, { Component } from "react";
import { Flex , Text , Image } from "rebass";
import "../styles/About.css";
import Section from "../components/FlexSection"
import fish from "../media/fishbish.jpg"
import pano from "../media/pano.jpg"


class About extends Component {
    render() {
        return (
            <Flex
            flexDirection="column">
                <Section id="about" backgroundColor="#042a2b">
                    <Flex
                    width="90%"
                    alignSelf="center"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                    flexWrap = "wrap"
                    mb = "12vw">
                        <Flex
                        className="about-text-div"
                        flexDirection="column"
                        mx="2vw">
                            <Flex
                            flexDirection="column"
                            width="fit-content">
                                <Text
                                className="about-header"
                                color="#cdedf6"
                                fontFamily="Segoe"
                                fontWeight="bolder">
                                    About Me
                                </Text>
                                <span className="orange-underline"/>
                            </Flex>
                            <Text
                            className="about-text"
                            color="#cdedf6"
                            fontFamily="consolas">
                                Hello I'm Sean, a software engineer from Ontario, Canada.
                            {<br/>}{<br/>}
                                Currently I work on CloudTest at Microsoft which is a service for distributable testing. Looking forward in my career, I'm passionate about working on improving the developer experience, 
                                improving open source, and about exploring new fields in computer science. I believe that well crafted software should be 
                                made simple, clean and accessible enough to be employed in all sectors.
                            {<br/>}{<br/>}
                                Outside of work, you can find me loitering in the kitchen, on the water, outdoors, or watching scary movies. 
                                I'm a fan of the startup scene and I used to be a CTO of my own insurance fintech company.
                            {<br/>}{<br/>}
                                Reach out for side projects, job opportunities, or if I know you come catch up.
                            </Text>
                        </Flex>
                        <Flex
                        className="about-image-div"
                        color="#cdedf6"
                        flexDirection="column"
                        alignItems="center"
                        textAlign="center">
                            <Image 
                            src={fish}
                            sx={{borderRadius: 5, boxShadow: '0 5px 5px 5px rgba(0,0,0,0.2)'}}/>
                        </Flex>
                    </Flex>
                </Section>
                <Image src={pano}/>
            </Flex>
        );
    }
}

export default About;
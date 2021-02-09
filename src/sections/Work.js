import React, { Component } from "react";
import { Flex , Image, Text, Box } from "rebass";
import "../styles/Work.css";
import Section from "../components/FlexSection"
import micro from "../media/micrologo.jpg"
import wyndo from "../media/logo.png"
import uoft from "../media/uoft.png"
import { InView } from 'react-intersection-observer';

//I know the timeline items are unclean, but I didn't want to sink in the time of making the items modular
class Work extends Component {
    renderTags(Tags) {
        return Tags.map((item) => 
        <Flex py="5px" px="7px" mx="5px" mt="1vw" backgroundColor="white" style={{boxShadow: '1px 3px rgba(0,0,0,0.1)'}}>
            <Text className="work-description" fontFamily = "consolas" color="#042a2b">{item}</Text>
        </Flex>
        );
    }

    render() {
        return (
                <Section id="work">
                <div className="desktop-work">
                <Flex
                width="80%"
                alignSelf="center"
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
                my = "8vw">
                <Flex
                flexDirection="column"
                width="fit-content"
                mb="5vw">
                    <Text
                    className="work-header"
                    color="#042a2b"
                    fontFamily="Segoe"
                    fontWeight="bolder">
                        Places I've Worked
                    </Text>
                    <span className="orange-underline"/>
                </Flex>
                <InView>{({inView, ref}) => (
                <Flex
                width="100%"
                ref={ref}>
                    <Flex
                    width={9/21}
                    alignItems="center">
                        <Flex
                        className={inView ? "WorkContent" : "WorkContentHidden"}
                        flexDirection="column"
                        backgroundColor="#EF7B45"
                        style={{boxShadow: '1px 2px 4px rgba(0,0,0,0.2)',  borderRadius: '5px' }}
                        p="2vw">
                            <Text
                            className="work-title"
                            fontFamily="consolas"
                            color="white">
                                Software Engineer
                            </Text>
                            <Text
                            className="work-description"
                            fontFamily="Segoe"
                            fontWeight="bolder"
                            color="white"
                            my="1px">
                                Microsoft, 1ES CloudTest
                            </Text>
                            <Text
                            className="work-description"
                            my="6px"
                            color="white">
                                CloudTest part of an internal engineering systems team which delivers a distributed testing platform for users on Microsoft's internal DevOps tool.
                                My latest project involved migrating test systems for large Microsoft teams to Azure.
                            </Text>
                            <Flex
                            flexDirection="row"
                            flexWrap="wrap">
                            {this.renderTags(["Azure", "Kubernetes", "MySQL", "CosmosDB", "C#"])}
                            </Flex>
                        </Flex>
                        <span class={inView ? "Arrow" : "WorkContentHidden"}></span>
                    </Flex>
                    <Flex
                    width={3/21}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center">
                        <span className="timeline-separator"/>
                        <Image src={micro} className={inView? "WorkIcon" : "WorkContentHidden"} height='100px' width="100px" style={{border: '5px solid #153b50', borderRadius: '50%', objectFit: 'contain'}}/>
                        <span className="timeline-separator"/>
                    </Flex>
                    <Flex
                    width={9/21}
                    alignItems="center">
                        <Text className="work-location" fontFamily="Segoe" color="#153b50">2019 - Present</Text>
                    </Flex>
                </Flex>
                )}</InView>
                <InView>{({inView, ref}) => (
                <Flex
                width="100%"
                ref={ref}>
                    <Flex
                    width={9/21}
                    alignItems="center"
                    justifyContent="flex-end">
                        <Text className="work-location" fontFamily="Segoe" color="#153b50">2019</Text>
                    </Flex>
                    <Flex
                    width={3/21}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center">
                        <span className="timeline-separator"/>
                        <Image src={wyndo} className={inView? "WorkIcon" : "WorkContentHidden"} height='100px' width="100px" style={{border: '5px solid #153b50', borderRadius: '50%', objectFit: 'contain'}}/>
                        <span className="timeline-separator"/>
                    </Flex>
                    <Flex
                    width={9/21}
                    alignItems="center">
                        <span class={inView ? "ArrowInverse" : "WorkContentHidden"}></span>
                        <Flex
                        className="WorkContentInverse"
                        flexDirection="column"
                        backgroundColor="#cdedf6"
                        className={inView ? "WorkContentInverse" : "WorkContentHidden"}
                        style={{boxShadow: '1px 2px 4px rgba(0,0,0,0.2)',  borderRadius: '5px' }}
                        p="2vw">
                            <Text
                            className="work-title"
                            fontFamily="consolas"
                            color="#042a2b">
                                Chief Technical Officer
                            </Text>
                            <Text
                            className="work-location"
                            fontFamily="Segoe"
                            fontWeight="bolder"
                            color="#042a2b"
                            my="1px">
                                Wyndo
                            </Text>
                            <Text
                            className="work-description"
                            my="6px"
                            color="#042a2b">
                                Wyndo is an insurtech platform for automatically processing insurance documents and providing smart suggestions and requotes. I managed the software team and was in charge of the development and design of the platform. I left the team after we got into an accelerator in the UK with a grant of $30,000.
                            </Text>
                            <Flex
                            flexDirection="row"
                            flexWrap="wrap">
                            {this.renderTags(["React", "Node", "Express", "Python", "OpenCV", "GCP"])}
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                )}</InView>
                <InView>{({inView, ref}) => (
                <Flex
                width="100%"
                ref={ref}>
                    <Flex
                    width={9/21}
                    alignItems="center">
                        <Flex
                        className={inView ? "WorkContent" : "WorkContentHidden"}
                        flexDirection="column"
                        backgroundColor="#cdedf6"
                        style={{boxShadow: '1px 2px 4px rgba(0,0,0,0.2)',  borderRadius: '5px' }}
                        p="2vw">
                            <Text
                            className="work-title"
                            fontFamily="consolas"
                            color="#153b50">
                                Software Engineering Intern
                            </Text>
                            <Text
                            className="work-location"
                            fontFamily="Segoe"
                            fontWeight="bolder"
                            color="#153b50"
                            my="1px">
                                Microsoft, MCIO
                            </Text>
                            <Text
                            className="work-description"
                            my="6px"
                            color="#153b50">
                                I spent my junior internship at Microsoft where I worked on a service that allows data warehouse operators to manage hardware metadata. 
                            </Text>
                            <Flex
                            flexDirection="row"
                            flexWrap="wrap">
                            {this.renderTags(["Azure", "MySQL", "C#", "ASP.NET"])}
                            </Flex>
                        </Flex>
                        <span style={{borderLeftColor: "#cdedf6"}} class={inView ? "Arrow" : "WorkContentHidden"}></span>
                    </Flex>
                    <Flex
                    width={3/21}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center">
                        <span className="timeline-separator"/>
                        <Image src={micro} className={inView? "WorkIcon" : "WorkContentHidden"} height='100px' width="100px" style={{border: '5px solid #153b50', borderRadius: '50%', objectFit: 'contain'}}/>
                        <span className="timeline-separator"/>
                    </Flex>
                    <Flex
                    width={9/21}
                    alignItems="center">
                        <Text className="work-location" fontFamily="Segoe" color="#153b50">2018</Text>
                    </Flex>
                </Flex>
                )}</InView>
                <InView>{({inView, ref}) => (
                <Flex
                width="100%"
                ref={ref}>
                <Flex
                    width={9/21}
                    alignItems="center"
                    justifyContent="flex-end">
                        <Text className="work-location" fontFamily="Segoe" color="#153b50">2017</Text>
                    </Flex>
                    <Flex
                    width={3/21}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center">
                        <span className="timeline-separator"/>
                        <Image src={uoft} className={inView? "WorkIcon" : "WorkContentHidden"} height='100px' width="100px" style={{border: '5px solid #153b50', borderRadius: '50%', objectFit: 'contain'}}/>
                        <span className="timeline-separator"/>
                    </Flex>
                    <Flex
                    width={9/21}
                    alignItems="center">
                        <span style={{borderRightColor: "#153b50"}} class={inView ? "ArrowInverse" : "WorkContentHidden"}></span>
                        <Flex
                        className="WorkContentInverse"
                        flexDirection="column"
                        backgroundColor="#153b50"
                        className={inView ? "WorkContentInverse" : "WorkContentHidden"}
                        style={{boxShadow: '1px 2px 4px rgba(0,0,0,0.2)',  borderRadius: '5px' }}
                        p="2vw">
                            <Text
                            className="work-title"
                            fontFamily="consolas"
                            color="#cdedf6">
                                Engineering Outreach Instructor
                            </Text>
                            <Text
                            className="work-location"
                            fontFamily="Segoe"
                            fontWeight="bolder"
                            color="#cdedf6"
                            my="1px">
                                University of Toronto                                                              
                            </Text>
                            <Text
                            className="work-description"
                            my="6px"
                            color="#cdedf6">
                                Spent this summer creating various computer science curriculum and then teaching it at a group of schools in the Toronto region, as part of UofT's engineering outreach program.
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
                )}</InView>
                </Flex>
                </div>
                <div className="mobile-work">
                <Flex
                width="80%"
                alignSelf="center"
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
                my = "8vw">
                <Flex
                flexDirection="column"
                width="fit-content"
                mb="5vw">
                    <Text
                    className="work-header"
                    color="#042a2b"
                    fontFamily="Segoe"
                    fontWeight="bolder">
                        Places I've Worked
                    </Text>
                    <span className="orange-underline"/>
                </Flex>
                <InView>{({inView, ref}) => (
                <Flex
                width="100%"
                ref={ref}
                justifyContent="center">
                        <Flex
                        className={inView ? "WorkContent" : "WorkContentHidden"}
                        flexDirection="column"
                        backgroundColor="#EF7B45"
                        style={{boxShadow: '1px 2px 4px rgba(0,0,0,0.2)',  borderRadius: '5px' }}
                        p="2vw">
                            <Text
                            className="work-title"
                            fontFamily="consolas"
                            color="white">
                                Software Engineer
                            </Text>
                            <Text
                            className="work-location"
                            fontFamily="Segoe"
                            fontWeight="bolder"
                            color="white"
                            my="1px">
                                Microsoft, 1ES CloudTest
                            </Text>
                            <Text
                            className="work-description"
                            my="6px"
                            color="white">
                                CloudTest part of an internal engineering systems team which delivers a distributed testing platform for users on Microsoft's internal DevOps tool.
                                My latest project involved migrating test systems for large Microsoft teams to Azure.
                            </Text>
                            <Flex
                            flexDirection="row"
                            flexWrap="wrap">
                            {this.renderTags(["Azure", "Kubernetes", "MySQL", "CosmosDB", "C#"])}
                            </Flex>
                        </Flex>
                    </Flex>
                )}</InView>
                <span className="timeline-separator-mobile"/>
                <InView>{({inView, ref}) => (
                <Flex
                width="100%"
                ref={ref}
                justifyContent="center">
                        <Flex
                        flexDirection="column"
                        backgroundColor="#cdedf6"
                        className={inView ? "WorkContent" : "WorkContentHidden"}
                        style={{boxShadow: '1px 2px 4px rgba(0,0,0,0.2)',  borderRadius: '5px' }}
                        p="2vw">
                            <Text
                            className="work-title"
                            fontFamily="consolas"
                            color="#042a2b">
                                Chief Technical Officer
                            </Text>
                            <Text
                            className="work-location"
                            fontFamily="Segoe"
                            fontWeight="bolder"
                            color="#042a2b"
                            my="1px">
                                Wyndo
                            </Text>
                            <Text
                            className="work-description"
                            my="6px"
                            color="#042a2b">
                                Wyndo is an insurtech platform for automatically processing insurance documents and providing smart suggestions and requotes. I managed the software team and was in charge of the development and design of the platform. I left the team after we got into an accelerator in the UK with a grant of $30,000.
                            </Text>
                            <Flex
                            flexDirection="row"
                            flexWrap="wrap">
                            {this.renderTags(["React", "Node", "Express", "Python", "OpenCV", "GCP"])}
                            </Flex>
                        </Flex>
                    </Flex>
                )}</InView>
                <span className="timeline-separator-mobile"/>
                <InView>{({inView, ref}) => (
                <Flex
                width="100%"
                ref={ref}
                justifyContent="center">
                        <Flex
                        className={inView ? "WorkContent" : "WorkContentHidden"}
                        flexDirection="column"
                        backgroundColor="#cdedf6"
                        style={{boxShadow: '1px 2px 4px rgba(0,0,0,0.2)',  borderRadius: '5px' }}
                        p="2vw">
                            <Text
                            className="work-title"
                            fontFamily="consolas"
                            color="#153b50">
                                Software Engineering Intern
                            </Text>
                            <Text
                            className="work-location"
                            fontFamily="Segoe"
                            fontWeight="bolder"
                            color="#153b50"
                            my="1px">
                                Microsoft, MCIO
                            </Text>
                            <Text
                            className="work-description"
                            my="6px"
                            color="#153b50">
                                I spent my junior internship at Microsoft where I worked on a service that allows data warehouse operators to manage hardware metadata. 
                            </Text>
                            <Flex
                            flexDirection="row"
                            flexWrap="wrap">
                            {this.renderTags(["Azure", "MySQL", "C#", "ASP.NET"])}
                            </Flex>
                        </Flex>
                </Flex>
                )}</InView>
                <span className="timeline-separator-mobile"/>
                <InView>{({inView, ref}) => (
                <Flex
                width="100%"
                ref={ref}
                justifyContent="center">
                        <Flex
                        flexDirection="column"
                        backgroundColor="#153b50"
                        className={inView ? "WorkContent" : "WorkContentHidden"}
                        style={{boxShadow: '1px 2px 4px rgba(0,0,0,0.2)',  borderRadius: '5px' }}
                        p="2vw">
                            <Text
                            className="work-title"
                            fontFamily="consolas"
                            color="#cdedf6">
                                Engineering Outreach Instructor
                            </Text>
                            <Text
                            className="work-location"
                            fontFamily="Segoe"
                            fontWeight="bolder"
                            color="#cdedf6"
                            my="1px">
                                University of Toronto                                                              
                            </Text>
                            <Text
                            className="work-description"
                            my="6px"
                            color="#cdedf6">
                                Spent this summer creating various computer science curriculum and then teaching it at a group of schools in the Toronto region, as part of UofT's engineering outreach program.
                            </Text>
                        </Flex>
                </Flex>
                )}</InView>
                </Flex>
                </div>
            </Section>
        );
    }
}

export default Work;
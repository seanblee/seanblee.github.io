import React, { Component } from "react";
import { Flex , Text , Image } from "rebass";
import "../styles/Projects.css";
import Section from "../components/FlexSection"
import oldpage from "../media/oldpage.png"
import wyndo from "../media/wyndo.png"
import rodent from "../media/rodent.png"

const Picture = ({ thumbnail, children }) => (
    <Image my="10px" mx="10px" className="ProjectImage" width="150px" height="150px" style={{borderRadius: 5, objectFit: 'contain'}} src={thumbnail}>{children}</Image>
  )

const Cards = [
    {
        title: "Personal Website",
        thumbnail: oldpage,
        content: "Thanks to Sean Patrick Lee it's become impossible to get a web presence on search engines, nonetheless this website was updated to reflect my latest front end development skills, provide a quick summary of what I do, and to link to on job applications. It was made almost entirely in pure React using just react router, rebass and redux. Check out this screenshot of the last version.",
        contentImage: oldpage
    },
    {
        title: "NookHub",
        thumbnail: "https://via.placeholder.com/150",
        content: "Back when Animal Crossing came out, my friend came up with the idea for a web platform for sharing QR codes for in game cosmetics. Brilliant. Unfortunately before we finished development someone released their own version on reddit and snatched up all the market share. From a tech perspective the entire backend is hosted on GCP and built with Node and Express on the backend with Google's NoSQL offering and React on the frontend.",
        contentImage: "https://via.placeholder.com/150"
    },
    {
        title: "League Of Rodents",
        thumbnail: "https://via.placeholder.com/150",
        content: "League of Rodents started as an investigation into clean MOBA video game design from an architecture perspective. I designed the base classes so that adding new characters, items and spells would be as easy as possible. The rest of the game has the basic functions of an expected MOBA game. It's built pretty much entirely in Unity. The graphics however leave much to be desired. Why Rodents?",
        contentImage: rodent
    },
    {
        title: "Wyndo",
        thumbnail: "https://via.placeholder.com/150",
        content: "Wyndo is a tech startup I cofounded and entered into the QICSI incubator with as CTO. It is a roboadvisor for insurance processing and quoting. The core technology was a patent-pending algorithm describing the process for using bounding algorithms and content analysis algorithms for automatically processing insurance documents. Although I eventually left for the corporate world, the rest of the team continued into an accelerator in the UK with a grant of $30,000",
        contentImage: wyndo
    },
    {
        title: "Capstone",
        thumbnail: "https://via.placeholder.com/150",
        content: "I've been cooking with my mom since I was a kid, check out some of my highest effort antics. I had to break the content management system I made for this section just to allow this post to store multiple pictures.",
        contentImage: "https://via.placeholder.com/150"
    },
    {
        title: "Teaching",
        thumbnail: "https://via.placeholder.com/150",
        content: "I spent a summer teaching Computer Science at schools in Toronto as part of UofT's engineering outreach program. I brought some of these skills back to University to start a club for teaching computer science at schools in Kingston.",
        contentImage: "https://via.placeholder.com/150"
    },
    {
        title: "Photography",
        thumbnail: "https://via.placeholder.com/150",
        content: "I don't actually take enough pictures to really associate with photography, but I wanted to hit more content panels, so here are some pictures I've taken and edited in lightroom.",
        contentImage: "https://via.placeholder.com/150"
    },
    {
        title: "Food",
        thumbnail: "https://via.placeholder.com/150",
        content: "I've been cooking with my mom since I was a kid, check out some of my highest effort antics. My current favorite recipe is the classic oven baked beef brisket.",
        contentImage: "https://via.placeholder.com/150"
    }
]

class Projects extends Component {
    constructor() {
        super();
        this.state= {
           selectedCard: null,
        }
    }
    
    setCard = (card) => {
        this.setState({ selectedCard : card });
    }

    renderCards() {
        return Cards.map((item, index) => 
        <Flex
        flexDirection="column"
        onClick={() => this.setCard(index)}
        >
            <Picture thumbnail={item.thumbnail}/>
            <Text fontSize="15px" fontFamily = "Segoel" color="#042a2b">{item.title}</Text>
        </Flex>
            );
    }

    renderCardContent() {
        if (this.state.selectedCard == null){
            return <div>Pick a panel to find out more! If not here's a quick summary of my skills in a fun infographic:</div>
        }
        else {
            return (
            <div>
                <div>{Cards[this.state.selectedCard].content}</div>
                <Image mt="20px" style={{borderRadius: 5}} src={ Cards[this.state.selectedCard].contentImage}/>
            </div>
            )
        }
        
    }

    render() {
        return (
            <Section id="projects" color="#ffffff">
                <Flex
                width="85%"
                alignSelf="center"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                flexWrap = "wrap"
                my = "8vw">
                    <Flex
                    color="#cdedf6"
                    width="550px"
                    flexDirection="row"
                    flexWrap = "wrap"
                    alignItems="center"
                    textAlign="center"
                    mx="2vw"
                    mb="6vw">
                        {this.renderCards()}
                    </Flex>
                    <Flex
                    minWidth="550px"
                    maxWidth="1000px"
                    flexDirection="column"
                    flex="1"
                    alignSelf="flex-start"
                    mx="2vw">
                        <Flex
                        flexDirection="column"
                        width="fit-content"
                        maxHeight="1000px">
                            <Text
                            color="#042a2b"
                            fontFamily="Segoe"
                            fontSize="55px"
                            fontWeight="bolder">
                                Stuff I Do
                            </Text>
                            <span className="orange-underline"/>
                        </Flex>
                        <Text
                        py="10px"
                        color="#042a2b"
                        fontSize="16px"
                        fontFamily="consolas">
                            {this.renderCardContent()}
                        </Text>
                    </Flex>
                </Flex>
            </Section>
        );
    }
}

export default Projects;
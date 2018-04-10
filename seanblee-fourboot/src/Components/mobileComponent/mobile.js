import React, { Component } from 'react';

class Mobile extends Component {
  render() {
    return (
      <div className = "mobile-wrap">
        <h1>About Me</h1>
        <p>
        Welcome to the short version of my page! Open a bigger window to see the full thing.<br></br>
        I am a third year computer engineering student at Queen&#39;s University, I am an aspiring Cloud Platform Software Engineer and I try to get involved in engineering outreach initiatives whenever I can. Feel free to shoot me an email for any general inquiries!
        </p>
        <h1>Projects</h1>
        <ul>
          <li>seanblee.github.io</li>
          <p>
          Constantly getting remade and updated as a portfolio, checkout the older versions on my github!
          </p>
          <li>Ease</li>
          <p>
          Ease is an android application that provides students with a community based delivery service. Built on the Firebase mobile development platform and Java, custom Gradle Build Support with Android Studio.
          </p>
          <li>Madawaska Tower Defence</li>
          <p>
          Tower Defence game as a term long project for CMPE 320, implements the SFML game development libary on C++, great opportunity to try out agile methodologies with a larger team.
          </p>
          <li>Interactive Museum Display</li>
          <p>
          Completed for the Kingston Museum of Health Care as clients, designed a proof of working concept interactive museum display by modifying a Kinect Controls Sample with the Kinect SDK, XAML.
          </p>
          <li>Tinder Bot</li>
          <p>
          WIP Tinder Bot that I developped for a friend in NodeJS, still not getting matches...
          </p>
        </ul>

        <h1>Experience</h1>
        <ul>
          <li>Software Development Engineer Intern</li>
          <h1>Upcoming @ Microsoft, May 2018</h1>
          <p>
          I&#39;ll to be interning at Microsoft, Redmond over the summer for the Cloud and Enterprise Divison!
          </p>
          <li>Events and Logistics Director</li>
          <h1>Queen&#39;s Application Development Society, Sept 2017 - Present</h1>
          <p>
          I coordinate engineering outreach opportunities for the outreach group for the Queen&#39;s Application Development Society, contact me if you&#39;re interested in helping out.
          </p>
          <li>Engineering Outreach Instructor</li>
          <h1>University of Toronto, May 2017 - Aug 2017</h1>
          <p>
          Developped and taught a computer science curriculum at various schools in Toronto, for UOFT&#39;s Engineering Outreach Office Summer Program.
          </p>
          <li>Accounting Intern</li>
          <h1>Kingston C.P.A Hong Kong, May 2016 - Aug 2016</h1>
          <p>
          Data Management at an accounting firm in Hong Kong.
          </p>
        </ul>
        <h1>Education</h1>
        <ul>
        <li>Queen&#39;s University</li>
        <h1>BASc Computer Engineering, ECE innovation stream</h1>
        <p>
        Core Languages: Java(Proficient), C++(Familiar), HTML-CSS-Javascript(Proficient), C(Proficient) <br></br>
        <br></br>
        Relevant Courses: Discrete Mathematics with CE applications; Digital Systems and Computer Architecture; Fundamentals of Software Engineering; Fundamentals of Software Development; Data Structures and Algorithms; Introduction to OOP; Logic for Computing Science; Engineering Practice;
        </p>
        </ul>
      </div>
    );
  }
}

export default Mobile;

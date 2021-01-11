import React from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../../../src/App.css";

// Import page specific stuff
import logo from "../../../images/logo-full.png";

export default function MainContent() {
  const easing = [0.6, -0.05, 0.01, 0.99];

  const fade2 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        ease: easing,
      },
    },
  };

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <motion.div variants={fade2} className="container">
        <div className="container d-md-flex justify-content-md-between mt-4">
          <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
            <img src={logo} className="elevate-logo" />
            <div
              className="text-secondary text-left  d-none d-lg-block"
              style={{ borderLeft: "2px solid #666", height: '80px' }}
            >
            </div>
            <h5 className="text-secondary col-6 text-left d-none d-lg-block ">
                An interactive online experience by the committee, free for
                everyone.
            </h5>
          </div>
          <div className="d-flex align-items-center">
            <h5 className="text-secondary text-center d-none d-md-block">
              Hosted by{" "}
              <a href="https://pattarai.in/" className="link-to-light">
                <b>Pattarai</b>
              </a>
            </h5>
          </div>
        </div>

        <div className="container text-secondary text-center mt-md-5 d-lg-none">
          <h5>
            An interactive online experience by the committee, free for
            everyone.
          </h5>
        </div>
        <div className="container mt-5 text-secondary">
          <Tabs style={{ width: "90%" }}>
            <span className="d-block d-md-flex justify-content-center ">
              <Tab
                className="px-2 py-2 text-center"
                style={{ listStyle: "none" }}
              >
                <div className="gradient-button btn btn-rounded">
                  <div className="card-body">#Track 01</div>
                </div>
              </Tab>
              <Tab
                className="px-2 py-2 text-center"
                style={{ listStyle: "none" }}
              >
                <div className="gradient-button btn btn-rounded">
                  <div className="card-body">#Track 02</div>
                </div>
              </Tab>
              <Tab
                className="px-2 py-2 text-center"
                style={{ listStyle: "none" }}
              >
                <div className="gradient-button btn btn-rounded">
                  <div className="card-body">#Track 03</div>
                </div>
              </Tab>
              <Tab
                className="px-2 py-2 text-center"
                style={{ listStyle: "none" }}
              >
                <div className="gradient-button btn btn-rounded">
                  <div className="card-body">#Track 04</div>
                </div>
              </Tab>
              <Tab
                className="px-2 py-2 text-center"
                style={{ listStyle: "none" }}
              >
                <div className="gradient-button btn btn-rounded">
                  <div className="card-body">#Track 04</div>
                </div>
              </Tab>
            </span>

            <TabPanel className="pt-5 ">
              <div className="" style={{ backgroundColor: "#070707" }}>
                <div className="card-body d-flex justify-content-center col-12">
                  <ul className="timeline mr-3">
                    <li className="event" data-date="Intelligence">
                      <h3>Computer Vision</h3>
                      <p>
                        CV is ever surpassing boundaries set by human
                        imagination in an ever transforming world where machines
                        are being striven towards human intelligence. Vehicle
                        traffic surveillance, pose estimation, feature
                        detection, deepfake technology, visual odometry,
                        visual-SLAM and more! Focus your cameras here and share
                        with us your breakthrough research or projects.
                      </p>
                    </li>
                    <li className="event" data-date="">
                      <h3>Artificial Intelligence and Learning</h3>
                      <p>
                        From the Ad we just saw on Instagram to the last YouTube
                        video you watched today, we are surrounded by Machine
                        Learning on all sides telling you where to eat, what to
                        wear, and which route you take. Unveil the curtain of
                        technological ignorance with your ML breakthroughs. Want
                        to share the spotlight with expert systems? Neural
                        Networks are creeping everywhere! Information processing
                        techniques, complex data processing interests you? Show
                        us your competence.
                      </p>
                    </li>
                    <li className="event" data-date="">
                      <h3>Applied Machine Learning</h3>
                      <p>
                        How about some self-driving cars or pizza delivering
                        drones? Be it filtering spam emails or data science,
                        business intelligence, bio-tech, legged-locomotion,
                        precision farming & healthcare. or anything at all
                        related to applied ML/Robotics, you go here. Natural
                        Language Processing, Knowledge representation and
                        reasoning (KR&R) to solve complex problems. Show us the
                        wildest turns in the upcoming advancements.
                      </p>
                    </li>
                    <li className="event" data-date="">
                      <h3>Tools for Development</h3>
                      <p>
                        How can amateur developers or hobbyists get their hands
                        dirty with AI, Quantum computing and Robotics? Talk
                        about embedded AI running on cheap processors and
                        libraries. Working on tools to create impactful machine
                        learning solutions faster? To all the ROS or undercut
                        AI/ML platform fans out there.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="">
              <div className="" style={{ backgroundColor: "#070707" }}>
                <div className="card-body d-flex justify-content-center col-12">
                  <ul className="timeline mr-3">
                    <li className="event" data-date="5G">
                      <h3>Computer Vision</h3>
                      <p>
                        CV is ever surpassing boundaries set by human
                        imagination in an ever transforming world where machines
                        are being striven towards human intelligence. Vehicle
                        traffic surveillance, pose estimation, feature
                        detection, deepfake technology, visual odometry,
                        visual-SLAM and more! Focus your cameras here and share
                        with us your breakthrough research or projects.
                      </p>
                    </li>
                    <li className="event" data-date="">
                      <h3>Artificial Intelligence and Learning</h3>
                      <p>
                        From the Ad we just saw on Instagram to the last YouTube
                        video you watched today, we are surrounded by Machine
                        Learning on all sides telling you where to eat, what to
                        wear, and which route you take. Unveil the curtain of
                        technological ignorance with your ML breakthroughs. Want
                        to share the spotlight with expert systems? Neural
                        Networks are creeping everywhere! Information processing
                        techniques, complex data processing interests you? Show
                        us your competence.
                      </p>
                    </li>
                    <li className="event" data-date="">
                      <h3>Applied Machine Learning</h3>
                      <p>
                        How about some self-driving cars or pizza delivering
                        drones? Be it filtering spam emails or data science,
                        business intelligence, bio-tech, legged-locomotion,
                        precision farming & healthcare. or anything at all
                        related to applied ML/Robotics, you go here. Natural
                        Language Processing, Knowledge representation and
                        reasoning (KR&R) to solve complex problems. Show us the
                        wildest turns in the upcoming advancements.
                      </p>
                    </li>
                    <li className="event" data-date="">
                      <h3>Tools for Development</h3>
                      <p>
                        How can amateur developers or hobbyists get their hands
                        dirty with AI, Quantum computing and Robotics? Talk
                        about embedded AI running on cheap processors and
                        libraries. Working on tools to create impactful machine
                        learning solutions faster? To all the ROS or undercut
                        AI/ML platform fans out there.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="">
              <div className="" style={{ backgroundColor: "#070707" }}>
                <div className="card-body d-flex justify-content-center col-12">
                  <ul className="timeline mr-3">
                    <li className="event" data-date="Nano and Quantum">
                      <h3>Computer Vision</h3>
                      <p>
                        CV is ever surpassing boundaries set by human
                        imagination in an ever transforming world where machines
                        are being striven towards human intelligence. Vehicle
                        traffic surveillance, pose estimation, feature
                        detection, deepfake technology, visual odometry,
                        visual-SLAM and more! Focus your cameras here and share
                        with us your breakthrough research or projects.
                      </p>
                    </li>
                    <li className="event" data-date="">
                      <h3>Artificial Intelligence and Learning</h3>
                      <p>
                        From the Ad we just saw on Instagram to the last YouTube
                        video you watched today, we are surrounded by Machine
                        Learning on all sides telling you where to eat, what to
                        wear, and which route you take. Unveil the curtain of
                        technological ignorance with your ML breakthroughs. Want
                        to share the spotlight with expert systems? Neural
                        Networks are creeping everywhere! Information processing
                        techniques, complex data processing interests you? Show
                        us your competence.
                      </p>
                    </li>
                    <li className="event" data-date="">
                      <h3>Applied Machine Learning</h3>
                      <p>
                        How about some self-driving cars or pizza delivering
                        drones? Be it filtering spam emails or data science,
                        business intelligence, bio-tech, legged-locomotion,
                        precision farming & healthcare. or anything at all
                        related to applied ML/Robotics, you go here. Natural
                        Language Processing, Knowledge representation and
                        reasoning (KR&R) to solve complex problems. Show us the
                        wildest turns in the upcoming advancements.
                      </p>
                    </li>
                    <li className="event" data-date="">
                      <h3>Tools for Development</h3>
                      <p>
                        How can amateur developers or hobbyists get their hands
                        dirty with AI, Quantum computing and Robotics? Talk
                        about embedded AI running on cheap processors and
                        libraries. Working on tools to create impactful machine
                        learning solutions faster? To all the ROS or undercut
                        AI/ML platform fans out there.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="">
              <div className="" style={{ backgroundColor: "#070707" }}>
                <div className="card-body d-flex justify-content-center col-12">
                  <ul className="timeline mr-3">
                    <li className="event" data-date="Software">
                      <h3>Computer Vision</h3>
                      <p>
                        CV is ever surpassing boundaries set by human
                        imagination in an ever transforming world where machines
                        are being striven towards human intelligence. Vehicle
                        traffic surveillance, pose estimation, feature
                        detection, deepfake technology, visual odometry,
                        visual-SLAM and more! Focus your cameras here and share
                        with us your breakthrough research or projects.
                      </p>
                    </li>
                    <li className="event" data-date="">
                      <h3>Artificial Intelligence and Learning</h3>
                      <p>
                        From the Ad we just saw on Instagram to the last YouTube
                        video you watched today, we are surrounded by Machine
                        Learning on all sides telling you where to eat, what to
                        wear, and which route you take. Unveil the curtain of
                        technological ignorance with your ML breakthroughs. Want
                        to share the spotlight with expert systems? Neural
                        Networks are creeping everywhere! Information processing
                        techniques, complex data processing interests you? Show
                        us your competence.
                      </p>
                    </li>
                    <li className="event" data-date="">
                      <h3>Applied Machine Learning</h3>
                      <p>
                        How about some self-driving cars or pizza delivering
                        drones? Be it filtering spam emails or data science,
                        business intelligence, bio-tech, legged-locomotion,
                        precision farming & healthcare. or anything at all
                        related to applied ML/Robotics, you go here. Natural
                        Language Processing, Knowledge representation and
                        reasoning (KR&R) to solve complex problems. Show us the
                        wildest turns in the upcoming advancements.
                      </p>
                    </li>
                    <li className="event" data-date="">
                      <h3>Tools for Development</h3>
                      <p>
                        How can amateur developers or hobbyists get their hands
                        dirty with AI, Quantum computing and Robotics? Talk
                        about embedded AI running on cheap processors and
                        libraries. Working on tools to create impactful machine
                        learning solutions faster? To all the ROS or undercut
                        AI/ML platform fans out there.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="">
              <div className="" style={{ backgroundColor: "#070707" }}>
                <div className="card-body d-flex justify-content-center col-12">
                  <ul className="timeline mr-3">
                    <li className="event" data-date="Blah Blah">
                      <h3>Computer Vision</h3>
                      <p>
                        CV is ever surpassing boundaries set by human
                        imagination in an ever transforming world where machines
                        are being striven towards human intelligence. Vehicle
                        traffic surveillance, pose estimation, feature
                        detection, deepfake technology, visual odometry,
                        visual-SLAM and more! Focus your cameras here and share
                        with us your breakthrough research or projects.
                      </p>
                    </li>
                    <li className="event" data-date="">
                      <h3>Artificial Intelligence and Learning</h3>
                      <p>
                        From the Ad we just saw on Instagram to the last YouTube
                        video you watched today, we are surrounded by Machine
                        Learning on all sides telling you where to eat, what to
                        wear, and which route you take. Unveil the curtain of
                        technological ignorance with your ML breakthroughs. Want
                        to share the spotlight with expert systems? Neural
                        Networks are creeping everywhere! Information processing
                        techniques, complex data processing interests you? Show
                        us your competence.
                      </p>
                    </li>
                    <li className="event" data-date="">
                      <h3>Applied Machine Learning</h3>
                      <p>
                        How about some self-driving cars or pizza delivering
                        drones? Be it filtering spam emails or data science,
                        business intelligence, bio-tech, legged-locomotion,
                        precision farming & healthcare. or anything at all
                        related to applied ML/Robotics, you go here. Natural
                        Language Processing, Knowledge representation and
                        reasoning (KR&R) to solve complex problems. Show us the
                        wildest turns in the upcoming advancements.
                      </p>
                    </li>
                    <li className="event" data-date="">
                      <h3>Tools for Development</h3>
                      <p>
                        How can amateur developers or hobbyists get their hands
                        dirty with AI, Quantum computing and Robotics? Talk
                        about embedded AI running on cheap processors and
                        libraries. Working on tools to create impactful machine
                        learning solutions faster? To all the ROS or undercut
                        AI/ML platform fans out there.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </TabPanel>
          </Tabs>
          <div className="h3 font-weight-bold text-center pt-5 text-white">
             Academic Research / White Paper
          </div>
          <div className="container text-white pt-3 pb-5 text-center">
            Got a crazy research that is worth sharing with the world? This is
            where you have to do it! ‘All your awesome and crazy ideas -- backed
            up by science!’ The best articles will be featured in the next
            edition of the elevate^now newsletter.
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

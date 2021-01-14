import React from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Link } from "react-router-dom";
import { Tab, Tabs, TabPanel } from "react-tabs";
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
            <Link to="/" className="d-flex justify-content-center">
              <a href="/"><img src={logo} alt="conf_elevate" className="elevate-logo" /></a>
            </Link>
            <div
              className="text-secondary text-left  d-none d-lg-block"
              style={{ borderLeft: "2px solid #666", height: "80px" }}
            ></div>
            <h5 className="text-secondary col-6 text-left d-none d-lg-block ">
              An interactive online experience, free for everyone.
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
          <h5>An interactive online experience, free for everyone.</h5>
        </div>
        <Tabs
          className="container mt-5 text-secondary justify-content-center"
          style={{ width: "90%" }}
        >
          <span className="d-block d-md-flex justify-content-center ">
            <Tab
              className="px-2 py-2 text-center"
              style={{ listStyle: "none" }}
            >
              <div className="gradient-button btn btn-rounded">
                <div style={{ letterSpacing: "2px" }}>AI and Embedded Systems</div>
              </div>
            </Tab>
            <Tab
              className="px-2 py-2 text-center"
              style={{ listStyle: "none" }}
            >
              <div className="gradient-button btn btn-rounded">
                <div style={{ letterSpacing: "2px" }}>5G and its Applications</div>
              </div>
            </Tab>
            <Tab
              className="px-2 py-2 text-center"
              style={{ listStyle: "none" }}
            >
              <div className="gradient-button btn btn-rounded">
                <div style={{ letterSpacing: "2px" }}>Nanotech & Quantum Computing</div>
              </div>
            </Tab>
            <Tab
              className="px-2 py-2 text-center"
              style={{ listStyle: "none" }}
            >
              <div className="gradient-button btn btn-rounded">
                <div style={{ letterSpacing: "2px" }}>Modern Computing</div>
              </div>
            </Tab>
          </span>

          <TabPanel className="pt-5 ">
            <div className="" style={{ backgroundColor: "#070707" }}>
              <div className="card-body d-flex justify-content-center col-12">
                <ul className="timeline mr-3">
                  <li className="event" data-date="TRANSCEND">
                    <h3 className="text-pink">Computer Vision</h3>
                    <p>
                      CV is ever surpassing boundaries set by human imagination
                      in an ever transforming world where machines are being
                      striven towards human intelligence. Vehicle traffic
                      surveillance, pose estimation, feature detection, deepfake
                      technology, visual odometry, visual-SLAM and more! Focus
                      your cameras here and share your breakthrough research or
                      projects.
                    </p>
                  </li>
                  <li className="event" data-date="">
                    <h3 className="text-pink">
                      Artificial Intelligence and Learning
                    </h3>
                    <p>
                      From the ad you just saw on Instagram to the last YouTube
                      video you watched today, computers suggest where to eat,
                      what to wear, and which route you take. Showcase your ML
                      breakthroughs! Want to share the spotlight with expert
                      systems? Neural networks are creeping everywhere!
                      Information processing techniques, complex data processing
                      interests you? Show us your competence.
                    </p>
                  </li>
                  <li className="event" data-date="">
                    <h3 className="text-pink">Applied Machine Learning</h3>
                    <p>
                      How about some self-driving cars or pizza delivering
                      drones? Be it filtering spam emails or data science,
                      business intelligence, bio-tech, legged-locomotion,
                      precision farming & healthcare. or anything at all related
                      to applied ML/Robotics, you go here. Natural Language
                      Processing, Knowledge representation and reasoning (KR&R)
                      to solve complex problems? Show us the wildest turns in
                      the upcoming advancements.
                    </p>
                  </li>
                  <li className="event" data-date="">
                    <h3 className="text-pink">
                      Big Data, Analytics and Business Intelligence
                    </h3>
                    <p>
                      With more “people” and “things” gaining access to the
                      internet, the volume of data uploaded to the internet is
                      about 24,000 gigabytes per second! And you need the right
                      algorithms and tools, to obtain useful information from
                      this data. Businesses rely on the interpretation of big
                      data to strategically make their future decisions. Let’s
                      talk about what you can do with this huge volume of data!
                    </p>
                  </li>
                  <li className="event" data-date="">
                    <h3 className="text-pink">Tools for Development</h3>
                    <p>
                      How can amateur developers or hobbyists get their hands
                      dirty with AI, Embedded Systems and Robotics? Talk about
                      embedded AI running on cheap processors and libraries.
                      Working on tools to create impactful machine learning
                      solutions faster? To all the ROS or undercut AI/ML
                      platform fans out there.
                    </p>
                  </li>
                  <li className="event" data-date="">
                    <h3 className="text-pink">Open Source Embedded Systems</h3>
                    <p>
                      Let’s talk about the huge range of open source platforms
                      and software available for embedded developers. This is
                      the perfect place for hobbyists to share their fun
                      projects with Arduino and other similar platforms. What do
                      you prefer? MicroPython, Embedded C, Assembly? We’d love
                      to know them!
                    </p>
                  </li>
                  <li className="event" data-date="">
                    <h3 className="text-pink">Embedded AI Applications</h3>
                    <p>
                      Enterprises are enjoying plenty of applications over
                      embedded systems with AI capabilities in areas including
                      manufacturing, autonomous vehicles, robotics, security
                      enhancements, etc., ramping up the pace of Industry 4.0
                      Revolution. Distributing the AI brain over the sensors is
                      what the business is talking about! Sounds interesting?
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
                  <li className="event" data-date="EDGE">
                    <h3 className="text-pink">Telemed</h3>
                    <p>
                      The incorporation of 5G technology will make it possible
                      to overcome barriers and reduce the current latency period
                      to 0.01 seconds, a crucial time reduction in any surgical
                      procedure. 5G makes teleconsultation, transfer of scans, reports and much more instantly. No doubt, mixed reality is going to take telehealth to a whole new level. Interested? Engage here.
                    </p>
                  </li>
                  <li className="event" data-date="">
                    <h3 className="text-pink">Smart Cities</h3>
                    <p>
                      Among the many innovations of the future that 5G will
                      enable, smart cities will be one of the most
                      revolutionary. The development of smart cities is in its
                      early stage and mobile technologies like 5G have a crucial
                      role to play in this space. The IoT and 5G being a key
                      enabling technology in Sustainable Building, would be
                      inextricably linked to the success story of these highly
                      connected cities of the future. Traverse the new era of 5G
                      networks with smart cities now!
                    </p>
                  </li>
                  <li className="event" data-date="">
                    <h3 className="text-pink">Mixed Reality</h3>
                    <p>
                      Blends in with our daily lives. Augmenting the reality to
                      make virtual innovations. Video games, medicine,
                      education. Virtual Reality and Holograms are here to stay.
                    </p>
                  </li>
                  <li className="event" data-date="">
                    <h3 className="text-pink"> Embedded Systems</h3>
                    <p>
                    5G, together with IoT, is creating a global market for portable medical devices, industrial and surgical robotics, automotive industries, telecom service providers, home automation, and other embbedded technologies behind smart cities. What are your thoughts?
                    </p>
                  </li>
                  <li className="event" data-date="">
                    <h3 className="text-pink">
                      {" "}
                      Edge Computing and 5G Networks
                    </h3>
                    <p>
                    5G and edge computing are opening a world of new revenue opportunities across manufacturing, transport, gaming and more. The benefits edge solutions provide include low latency, high bandwidth, device processing and data offload as well as trusted computing and storage. How can the industry gain an "edge" ahead of competitors? Is moving to edge solutions really important?
                    </p>
                  </li>
                  <li className="event" data-date="">
                    <h3 className="text-pink">Moving Smart</h3>
                    <p>
                      The thirst for electric vehicles started hundreds of years
                      back... Connected and Hybrid vehicles are booming. The introduction of smart infotainment systems has played an important role in making automobile smart, and this just keeps evolving.
                      Drones are very helpful to keep a continuous logistic
                      operation going. Is space exploration becoming too
                      expensive? Here's a call to these enthusiasts.
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
                  <li className="event" data-date="QUANTUM">
                    <h3 className="text-pink">
                      Nanomaterials and their Properties
                    </h3>
                    <p>
                      Nanoparticles, nanocrystals, nanocomposites, colloids,
                      sols, everything-nano-pro and how their properties are
                      affected by nanoscale dimensions. Pitch here to tell the
                      world what’s brewing in the nano-world.
                    </p>
                  </li>
                  <li className="event" data-date="">
                    <h3 className="text-pink">
                      Micro-electro-mechanical Systems, NEMS and
                      Micro-mechatronics
                    </h3>
                    <p>
                      Miniaturized structures, sensors, actuators, and
                      microelectronics, the most notable (and perhaps most
                      interesting) microsensors and microactuators. Transducers?
                      Rings a bell? Converging to nano?
                    </p>
                  </li>
                  <li className="event" data-date="">
                    <h3 className="text-pink">Energy and Storage Systems</h3>
                    <p>
                      In electrical energy storage, “nano” is big and getting
                      bigger. Graphenes! With the increasing demand for
                      large-capacity-but-small-footprint batteries, much money
                      is flowing into nanomaterials research to find viable
                      solutions to store electrical energy. This is the right
                      place to talk about the ongoing research in nano energy
                      storage.
                    </p>
                  </li>
                  <li className="event" data-date="">
                    <h3 className="text-pink">
                      Nano-fabrication and Nano-lithography
                    </h3>
                    <p>
                      One nanometer is 10<sup>-9</sup> meter, or a millionth of
                      a millimeter. Can you imagine the devices fabricated at
                      such a small dimensional scale? Your crazy fast Ryzen or
                      that NVMe you’re rocking? Newer nanofabrication and
                      lithography processes open the door to super-high-density
                      microprocessors and memory chips. Exciting?
                    </p>
                  </li>
                  <li className="event" data-date="">
                    <h3 className="text-pink">
                      Quantum Physics and Quantum Computing
                    </h3>
                    <p>
                      From Schrödinger's cat to Shor’s algorithm, this is the
                      right place to talk about the emerging hero in the
                      computing world. Quantum mechanics, algorithms, quantum
                      SDKs (Qiskit, Q#, Cirq, etc.), quantum hardware, error
                      correction, cryptography, what not? Interesting?
                      Intimidating?
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
                  <li className="event" data-date="EDIFICE">
                    <h3 className="text-pink">
                      Modern Web and Mobile Application Development
                    </h3>
                    <p>
                      Application development has been constantly evolving with
                      new frameworks, development tools, AI and analytics, etc.
                      Trends have greatly changed with the introduction of new
                      hardware, hardware with new form factors and even hardware
                      that never existed before! We’d love to know the best
                      practices you follow to be an efficient app developer and
                      how you can put the newly available tools and frameworks
                      to work!
                    </p>
                  </li>
                  <li className="event" data-date="">
                    <h3 className="text-pink">Computing at scale</h3>
                    <p>
                      The operations of modern cloud computing including
                      physical bare-metal machines, VMs and containers. Grid to
                      the cloud. Docker/Moby and Kubernetes. Hybrid cloud and
                      other buzzwords - your cloud and apps-at-scale topics go
                      here.
                    </p>
                  </li>
                  <li className="event" data-date="">
                    <h3 className="text-pink">
                      Software Quality and Development Methodologies
                    </h3>
                    <p>
                      Follow an interesting development methodology in your
                      organization? Scrum? Sprints? XP? Agile? We would like to
                      know about all aspects of Quality including documentation
                      and development, automated testing and how you practice
                      techniques like CI/CD in your organization or team!
                    </p>
                  </li>
                  <li className="event" data-date="">
                    <h3 className="text-pink">
                      Information Security, Privacy and Data Governance
                    </h3>
                    <p>
                      With all your data living on the cloud, the internet knows
                      you better than you do! What techniques are available to
                      keep our data secure and private? What attacks should we
                      be watching out for? What should I know as a developer to
                      keep the data of my users private and confidential? What
                      should I know as an enterprise to handle my customer’s
                      data safely?
                    </p>
                  </li>
                  <li className="event" data-date="">
                    <h3 className="text-pink">
                      Hardware, Networks and Systems Engineering
                    </h3>
                    <p>
                      Facing a hardware challenge? Do you have an insanely crazy
                      hardware solution? Found a unique approach to establish
                      communication between your systems? Just an out-of-the-box
                      systems thingy? You’re at the right place!
                    </p>
                  </li>
                  <li className="event" data-date="">
                    <h3 className="text-pink">Operating Systems and Memory</h3>
                    <p>
                      All the low-level Linux and open-source software systems,
                      over here! Monolithic, microkernel, hybrid kernel, rings a
                      bell? This place is just for less-fancy-yet-vital topics.
                      Not for the light-hearted! ;)
                    </p>
                  </li>
                  <li className="event" data-date="">
                    <h3 className="text-pink">Let’s talk about open source!</h3>
                    <p>
                      How to embrace open-source? How difficult is it to move to
                      the open source world? How does it feel like to develop
                      software in the open-source community? Where is open
                      source headed to? All such discussions, over here, please!
                    </p>
                  </li>
                  <li className="event" data-date="">
                    <h3 className="text-pink">Graphics and Multimedia</h3>
                    <p>
                      To all the fellow creatives out there! Inspire us with
                      your design principles. Want to talk about super cool
                      design software? Want to share your illustration theories
                      with the world? Creators & Designers, here goes your
                      spotlight.
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
          up by science!’ The best articles will be featured in the next edition
          of the elevate^now newsletter.
        </div>
      </motion.div>
    </motion.div>
  );
}

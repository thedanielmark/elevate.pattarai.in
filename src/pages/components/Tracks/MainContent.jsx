import React from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Link } from "react-router-dom";

// Import page specific stuff
import logo from "../../../images/logo-full.png";

export default function MainContent() {
  const easing = [0.6, -0.05, 0.01, 0.99];
  const fade1 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: easing,
      },
    },
  };

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
    <motion.div variants={fade1} className="container">
      <div className="container d-md-flex justify-content-md-between mt-4">
        <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
          <img src={logo} className="elevate-logo" />
          <h5
            className="text-secondary col-6 text-left d-none d-lg-block"
            style={{ borderLeft: "1px solid #666" }}
          >
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
      <div className="container mt-5 d-flex justify-content-center">
        <div id="content">
          <ul className="timeline">
            <li className="event" data-date="Nanotech & Quantum">
              <h3>Nanomaterials and their Properties</h3>
              <p>
              Nanoparticles, nanocrystals, nanocomposites, colloids, sols, 
              everything-nano-pro and how their properties are affected by 
              nanoscale dimensions. Pitch here to tell the world what’s brewing 
              in the nano-world.
              </p>
            </li>
            <li className="event" data-date="">
              <h3>Micro-electro-mechanical Systems, NEMS and Micro-mechatronicss</h3>
              <p>
              iniaturized structures, sensors, actuators, and microelectronics, 
              the most notable (and perhaps most interesting) microsensors 
              and microactuators. Transducers.Rings a bell? Converging to nano?
              </p>
            </li>
            <li className="event" data-date="">
              <h3>Energy and Storage Systems</h3>
              <p>
              In electrical energy storage, “nano” is big and getting bigger.
              Graphenes! With the increasing demand for large-capacity-but-small-footprint 
              batteries,much money is flowing into nanomaterials research to find viable 
              solutions to store electrical energy.This is the right place to talk about 
              the ongoing research in nano energy storage.
              </p>
            </li>
            <li className="event" data-date="">
              <h3>Nano-fabrication and Nano-lithographys</h3>
              <p>
              One nanometer is 10-9 meter, or a millionth of a millimeter. Can you 
              imagine the devices fabricated at such a small dimensional scale? Your 
              crazy fast Ryzen or that NVMe you’re rocking? Newer nanofabrication and 
              lithography processes open the door to super-high-density microprocessors 
              and memory chips. Exciting?
              </p>
            </li>
            <li className="event" data-date="">
              <h3>Quantum Physics and Quantum Computing</h3>
              <p>
              From Schrödinger's cat to Shor’s algorithm, this is the right place to 
              talk about the emerging hero in the computing world. Quantum mechanics, 
              algorithms, quantum SDKs (Qiskit, Q#, Cirq, etc.), quantum hardware, 
              error correction, cryptography, what not? Interesting? Intimidating?
              </p>
            </li>
            <li className="event" data-date="">
              <h3>Academic Research / White Paper</h3>
              <p>
              Got a crazy research that is worth sharing with the world? This is 
              where you have to do it! ‘All your awesome and crazy ideas backed 
              up by science!’ The best articles will be featured in the next edition 
              of the elevate^now newsletter.
              </p>
            </li>
            <li className="event" data-date="Intelligence & Beyond">
              <h3>Computer Vision</h3>
              <p>
              CV is ever surpassing boundaries set by human imagination in an 
              ever transforming world where machines are being striven towards 
              human intelligence. Vehicle traffic surveillance, pose estimation, 
              feature detection, deepfake technology, visual odometry, visual-SLAM 
              and more! Focus your cameras here and share with us your breakthrough 
              research or projects.

              </p>
            </li>
            <li className="event" data-date="">
              <h3>Artificial Intelligence and Learning</h3>
              <p>
              From the Ad we just saw on Instagram to the last YouTube video you watched 
              today, we are surrounded by Machine Learning on all sides telling you where 
              to eat, what to wear, and which route you take. Unveil the curtain of 
              technological ignorance with your ML breakthroughs. Want to share the 
              spotlight with expert systems? Neural Networks are creeping everywhere! 
              Information processing techniques, complex data processing interests you?
              Show us your competence. 
              </p>
            </li>
            <li className="event" data-date="">
              <h3>Applied Machine Learning</h3>
              <p>
              How about some self-driving cars or pizza delivering drones? Be it filtering 
              spam emails or data science, business intelligence, bio-tech, legged-locomotion, 
              precision farming &  healthcare. or anything at all related to applied ML/Robotics, 
              you go here. Natural Language Processing, Knowledge representation and reasoning 
              (KR&R) to solve complex problems. Show us the wildest turns in the 
              upcoming advancements.
              </p>
            </li>
            <li className="event" data-date="">
              <h3>Tools for Development</h3>
              <p>
              How can amateur developers or hobbyists get their hands dirty with AI, Quantum 
              computing and Robotics? Talk about embedded AI running on cheap processors and 
              libraries. Working on tools to create impactful machine learning solutions faster? 
              To all the ROS or undercut AI/ML platform fans out there.
              </p>
            </li>
            <li className="event" data-date="FOSS">
              <h3>Modern Web and Mobile Application Development</h3>
              <p>
              Application development has been constantly evolving with new frameworks, 
              development tools, AI and analytics, etc.Trends have greatly changed with the 
              introduction of new hardware, hardware with new form factors and even hardware 
              that never existed before! We’d love to know the best practices you follow to 
              be an efficient app developer and how you can put the newly available tools and 
              frameworks to work!
              </p>
            </li>
            <li className="event" data-date="">
              <h3>Computing at scale</h3>
              <p>
              The operations of modern cloud computing including physical bare-metal machines, 
              VMs and containers. Grid to the cloud. Docker/Moby and Kubernetes. Hybrid cloud 
              and other buzzwords - your cloud and apps-at-scale topics go here.
              </p>
            </li>
            <li className="event" data-date="">
              <h3>Software Quality and Development Methodologies</h3>
              <p>
              Follow an interesting development methodology in your organization? Scrum? 
              Sprints? XP? Agile? We would like to know about all aspects of Quality 
              including documentation and development, automated testing and how you 
              practice techniques like CI/CD in your organization or team!
              </p>
            </li>
            <li className="event" data-date="">
              <h3>Information Security, Privacy and Data Governance</h3>
              <p>
              With all your data living on the cloud, the internet knows you better than 
              you do! What techniques are available to keep our data secure and private? 
              What attacks should we be watching out for? What should I know as a 
              developer to keep the data of my users private and confidential? 
              What should I know as an enterprise to handle my customer’s data safely?
              </p>
            </li>
            <li className="event" data-date="">
              <h3>Hardware, Networks and Systems Engineering</h3>
              <p>
              Facing a hardware challenge? Do you have an insanely crazy hardware solution? 
              Found a unique approach to establish communication between your systems? 
              Just an out-of-the-box systems thingy? You’re at the right place!
              </p>
            </li>
            <li className="event" data-date="">
              <h3>Operating Systems and Memory</h3>
              <p>
              All the low-level Linux and open-source software systems, over here! Monolithic, 
              microkernel, hybrid kernel, rings a bell? This place is just for less-fancy-yet-vital 
              topics. Not for the light-hearted! ;)
              </p>
            </li>
            <li className="event" data-date="">
              <h3>Let’s talk about open source!</h3>
              <p>
              How to embrace open-source? How difficult is it to move to the open source world? 
              How does it feel like to develop software in the open-source community? Where is 
              open source headed to? All such discussions, over here, please!
              </p>
            </li>
            <li className="event" data-date="">
              <h3>Graphics and Multimedia</h3>
              <p>
              To all the fellow creatives out there! Inspire us with your design principles. 
              Want to talk about super cool design software? Want to share your illustration 
              theories with the world? Creators & Designers, here goes your spotlight.
              </p>
            </li>

            <li className="event" data-date="">
              <h3>Academic Research / White Paper</h3>
              <p>
              Got a crazy research that is worth sharing with the world? This is where you 
              have to do it! ‘All your awesome and crazy ideas backed up by science!’ 
              The best articles will be featured in the next edition of the elevate^now newsletter.
              </p>
            </li>
            <li className="event" data-date="All things Commute">
              <h3>Hyperloop</h3>
              <p>
              Creating quite the buzz since 2012, the Hyperloop is a proposed mode of passenger 
              and freight transportation, first used to describe an open-source vactrain design 
              released by a joint team from Tesla and SpaceX. Is it great? Too expensive? For such 
              conversations, this is the place!
              </p>
            </li>
            <li className="event" data-date="">
              <h3>E-Vehicles</h3>
              <p>
              Formula E shocked the system and broke various myths related to EVs. ”Electric vehicles” 
              are a key way for cities to meet climate action goals and reduce pollution! Technology 
              reaches a new high in the field of charge storage, road charging & E-mobility. Join us 
              to know more about E-Vehicles. 
              </p>
            </li>
            <li className="event" data-date="">
              <h3>Hybrid Vehicles</h3>
              <p>
              Want to go eco, but yet a die-hard fan of the IC engine? So pick a hybrid! Do join 
              us and tell us all the different types of hybrid vehicles and their characteristics 
              and why they are just great!
              </p>
            </li>
            <li className="event" data-date="">
              <h3>Sustainable Spacecrafts and Aircrafts </h3>
              <p>
              Achieving NGO previous  Drones are very helpful to keep a continuous logistic operation 
              going. The Solar Impulse team plans to develop an unmanned solar-powered aircraft that 
              can fly continuously at high altitudes. Engage with us to throw your ideas on this! Is 
              space exploration becoming too expensive? Can the principle of recycling be used in 
              this venture? Here's a call to all space enthusiasts, Come, talk and listen!
              </p>
            </li>
            <li className="event" data-date="">
              <h3>Academic Research / White Paper</h3>
              <p>
              Got a crazy research that is worth sharing with the world? This is where you have 
              to do it! ‘All your awesome and crazy ideas backed up by science!’ The best articles 
              will be featured in the next edition of the elevate^now newsletter.
              </p>
            </li>
            <li className="event" data-date="5G">
              <h3>5G Revolution</h3>
              <p>
              How long will you rely on people's ability to identify weeds and get rid of them? 
              Aware of any other means to map weeds and pests? Did you know 5G farms are 200 times 
              more efficient than traditional farms? Join the crowd to learn how 5G technology minimizes 
              the need for manpower in Agriculture agronomics / industries / small scale etc.
              </p>
            </li>
            <li className="event" data-date="">
              <h3>Telemed</h3>
              <p>
              The incorporation of 5G technology will make it possible to overcome barriers and reduce 
              the current latency period to 0.01 seconds, a crucial time reduction in any surgical 
              procedure. Interested? engage here.
              </p>
            </li>
            <li className="event" data-date="">
              <h3>Smart Cities</h3>
              <p>
              Among the many innovations of the future that 5G will enable, smart cities will be one 
              of the most revolutionary. The development of smart cities is in its early stage and mobile 
              technologies like 5G and its successors have a huge opportunity and a crucial role to play 
              in this space. Internet of Things (IoT) provides the foundation for smart cities and 5G being 
              a key enabling technology for IoT, would be inextricably linked to the success story of these 
              highly connected cities of the future. Traverse the new era of 5G networks with smart cities now!.
              </p>
            </li>
            <li className="event" data-date="">
              <h3>Mixed Reality</h3>
              <p>
              Blends in with our daily lives. Video games, medicine, education. Virtual Reality and 
              Holograms are here to stay.
              </p>
            </li>
            <li className="event" data-date="">
              <h3>Connected Vehicles</h3>
              <p>
              Cars that can communicate bidirectionally with other systems outside of the car
              </p>
            </li>
            <li className="event" data-date="">
              <h3>Academic Research / White Papery</h3>
              <p>
              Got a crazy research that is worth sharing with the world? This is where you have to do it! 
              ‘All your awesome and crazy ideas backed up by science!’ The best articles will be featured 
              in the next edition of the elevate^now newsletter.
              </p>
            </li>
            </ul>
        </div>
      </div>
    </motion.div>
  </motion.div>


  );
}

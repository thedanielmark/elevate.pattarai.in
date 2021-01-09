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
              <li className="event" data-date="Software">
                <h3>Trending Tech</h3>
                <p>
                  Artificial Intelligence (AI), Machine Learning (ML), Internet
                  of Things (IoT), Blockchain, Mobile
                </p>
              </li>
              <li className="event" data-date="2:30 - 4:00pm">
                <h3>Storage and Networking</h3>
                <p>
                  Cloud Native Storage, Software Defined Storage, Storage
                  Management, Distributed File System, Datastores, Big Data,
                  NFV/ VNF, DPDK, ODL, Software Defined Networking.
                </p>
              </li>
              <li className="event" data-date="5:00 - 8:00pm">
                <h3>Open Hybrid Cloud</h3>
                <p>
                  Multi-Cloud, Automation, OpenStack, Kubernetes, Serverless,
                  Microservices, Containers, OpenShift/ PaaS, Hybrid Cloud
                  Management, Operators, CNI, Virtualization, Kernel, Service
                  Mesh.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>

              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>

              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>

              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>

              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>

              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <h3>Developer Tools</h3>
                <p>
                  Container Tooling, CI/CD, DevOps, Code Editors Cloud native
                  IDE, CLI, Local Development for Containers, Language Runtime,
                  Debugging/Tracing, QE.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

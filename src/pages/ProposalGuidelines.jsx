/*index.jsx*/
import React from "react";
import "../App.css";
import logo from "../../src/images/elevate_square.png";


//Functional Component 
export default function ProposalGuidelines() {
  return (
    <div className="container py-5 text-center text-white px-4" style={{fontFamily: '"Montserrat"' }}>
        <img src={logo} alt="" height='150vh' className='pb-3 ' srcset="" />
        <h4 style={{ color: "#eeeeee", fontFamily: "Montserrat"}}>PROPOSAL GUIDELINES</h4>
        <p className="text-justify pt-5"
          style={{ color: "rgb(170, 170, 170)", lineHeight: "25px" }}>
          <strong>What’s a CFP?</strong>
          <br />
          A CFP is a conference announcement, also known as a Call for Proposals
          (CFP).<br />
          It provides:
        </p><ul className="text-justify pt-2" style={{color: 'rgb(170, 170, 170)', lineHeight: '25px'}}>
          <li>The conference theme </li>
          <li>Guidelines for presentations</li>
          <li>Requirements for abstracts/proposals</li>
          <li>Deadlines</li>
        </ul>
        <p />
        <p className="text-justify pt-2" style={{color: 'rgb(170, 170, 170)', lineHeight: '25px'}}>
          <strong>Writing the Proposal/Abstract</strong><br />
          Define the problem you are addressing clearly and concisely (BONUS: Include keywords or phrases from the
          CFP).<br />Captivate readers with your research description in terms of the problem by:
        </p><ul className="text-justify pt-2" style={{color: 'rgb(170, 170, 170)', lineHeight: '25px'}}>
          <li> Providing interesting or controversial perspectives on your topic.
          </li>
          <li>Explaining what your presentation will cover regarding to the topic and problem presented.</li>
          <li>Matching your research to the conference theme/CFP’s topics, and making sure the scope of your
            presentation matches the time allowed for presentations.
          </li>
          <li>Participants will be given a google form with the respective questions asked so kindly answer
            relevantly.*</li>
        </ul>
        <p className='pt-5 h4'>Happy Presenting!</p>
        <p />
      </div>  );
}


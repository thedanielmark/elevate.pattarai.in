/*index.jsx*/
import React from "react";
//Functional Component 
export default function ProposalGuidelines() {
  return (
    <div className="container pt-5 justify-content-center text-white" style={{fontFamily: '"Montserrat"'}}>
      <h1 className="text-center">Proposal Guidelines</h1>
       <div className="container pt-3 justify-content-center text-white" >
        <h3><strong>What’s a CFP?</strong></h3>
        <p style={{fontSize: 'medium'}}>
          A CFP is a conference announcement, also known as a Call for Proposals
          (CFP).<br />
          It provides:
        </p><ul>
          <li>The conference theme </li>
          <li>Guidelines for presentations</li>
          <li>Requirements for abstracts/proposals</li>
          <li>Deadlines</li>
        </ul>
        <p />
        <h3><strong>Writing the Proposal/Abstract</strong></h3>
        <p>Define the problem you are addressing clearly and concisely (BONUS: Include keywords or phrases from the CFP).<br />Captivate readers with your research description in terms of the problem by: 
        </p><ul>
          <li> Providing interesting or controversial perspectives on your topic. 
          </li>
          <li>Explaining what your presentation will cover regarding to the topic and problem presented.</li>
          <li>Matching your research to the conference theme/CFP’s topics, and making sure the scope of your presentation matches the time allowed for presentations.
          </li>
          <li>Participants will be given a google form with the respective questions asked so kindly answer relevantly.*</li>
        </ul>
        <p />
        <i>Happy Writing and Happy Presenting!
        </i>
      </div>
    </div>
  );
}
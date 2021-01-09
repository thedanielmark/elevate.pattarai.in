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
      <div className="container pt-5 text-center">
        <h3 style={{color:'#eeeeee'}}>
        <strong> elevate^ </strong>Conference - Code of Conduct<br />
        </h3>
        <p className='text-justify pt-2' style={{color:'#aaaaaa', lineHeight:'25px'}}>
          All attendees, speakers, sponsors, vendors, partners, Pattarai staff and volunteers at Pattarai Virtual Event and any related events are required to adhere to the following Code of Conduct. Event organizers will enforce this code throughout the event’s entirety.
          Before a Virtual Society Meeting, all participants are expected to be familiar with this policy.
          Participants must register for a Virtual Meeting and provide an email, text, phone or (for special needs) other contacts where they can be reached during the Virtual Meeting. Registration constitutes consent to audio and visual recording (and use and alteration of the recording) by the Pattarai at the Meeting for non-commercial purposes aligned with the Society’s mission. Failure to register, provide such contact, or be available via the contact provided is grounds for being disconnected from the Virtual Meeting at the participant’s cost, without further notice or process.
          Our aim in hosting a virtual Pattarai event is to build a stronger community. Our goal is to create an environment where everyone feels welcome to participate, speak up, ask questions, and engage in conversation. This requires a harassment-free and inclusive environment that recognizes the inherent worth of every participant. We invite all those who participate to help us create safe and positive experiences for everyone.
          We are dedicated to providing a harassment-free environment for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, or religion (or lack thereof). We do not tolerate harassment of participants in any form. Sexual language and imagery are not appropriate during any aspect of this virtual event/conference, including talks, workshops, parties, social media such as Twitter, or other online media.
          Following a Code of Conduct allows Pattarai to create the best experience possible for all attendees.
          <br />  <br />
          <strong>Expected Behavior</strong>  <br />
          Exercise consideration and respect in your speech and actions.
          Attempt collaboration before conflict.
          Refrain from demeaning, discriminatory, or harassing behavior and speech.
          Be mindful of your surroundings and your fellow participants. Alert Pattarai staff if you notice a dangerous situation, someone in distress, or violations of this Code of Conduct, even if they seem inconsequential.
          During this virtual event or any of its related events, no participant should engage in harassment in any form.
          Do not disrupt the virtual meeting (e.g., “zoom-bombing”) or engage in harm or threats of harm of any kind. Do not create/contribute to a safety threat or unsafe or exclusionary situation.
          Do not make audio or visual recordings of the Virtual Meeting in any medium—and do not distribute audio or visual recordings of the Virtual Meeting (via social media or any other means).  Only Pattarai or its representatives may do so, after warning participants to allow them to opt-out.
          Do not take or distribute pictures of or copy research posters/presentation materials unless explicit permission is granted.
          Participants violating these rules may be expelled from without a refund at the discretion of Pattarai. Participants asked to stop any harassing behavior are expected to comply immediately.
          <br/><br/> <strong> Note About Differences of Opinion and Offense</strong> <br/>
          To achieve the purposes of a virtual event in the limited time provided, with the universal benefit of all participants’ being fully engaged, discussions should be focused on the meeting topic at hand. All participants must be able and welcome to equitably and effectively participate.  It is not a violation of the conferenceConduct Policy to express an opinion, raise research or describe an experience (“articulation”) that is at odds with the opinions of or is offensive to others—if the articulation is part of an on-point discussion of the Virtual Society Meeting topic at hand and is offered in a manner that does not interfere with others’ reasonable ability and welcome to participate fully. That means expressing differing positions with respect and consideration for all, in a manner that reflects intellectual rigor and is demonstrably mindful of minimizing, as reasonably possible, its potential adverse effect on others’ ability to participate.  (Offering an advance warning of the potential for impact on others is one way to demonstrate such respect and consideration for all.) It also means not making an articulation that is reasonably expected to cause offense gratuitously (i.e., unrelated or unnecessary for the work on that topic). It means not directing the articulation as a personal attack or put-down of an individual, and not dominating the discussion. It further means demonstrating consideration for anyone who appears to be in distress by promptly stopping the cause and demonstrating caring, while still pursuing a way to share pertinent information, with the Society moderator’s assistance if needed.
          Reporting an incident:
          <br/><br/> If you see, overhear or experience a violation of the Code of Conduct during a virtual event, and would like to report a violation, you please email us at elevate@pattarai.in
        </p>
      </div>
      </motion.div>
    </motion.div>
  );
}

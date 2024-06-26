import React from 'react'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

const RuleBook = () => {
  const { eventName } = useParams();

  let generatedCode;
  if (eventName === 'techno strom') {
    generatedCode = (
        <p>
          <li>Participants consist of a team of two members.</li>
          <li>General computer aptitude.</li>
          <li>Preliminary round - 4 sections with 10 questions each (total duration: 50 minutes).</li>
          <li>The preliminary round will be conducted in written mode.</li>
          <li>Participants must carry the required stationary items.</li>
          <li>The final round will be an on-stage event.</li>
          <li>Mobile phones are not allowed.</li>
          <li>The results announced by the organizers are final.</li>
        </p>
    );
  }
  else if (eventName === 'data dynamo') {
    generatedCode = (
        <p>
            <li>A team of one or two participants.</li>
            <li>5 minutes for the presentation followed by 1-2 minutes for the viva</li>
            <li>Abstract should not exceed 1 page and paper should not exceed 10 pages.</li>
            <br />
            <strong className='highlights'>Topics:</strong>
              <ul>
                <li>Biometrics, Forensics, Content protection</li>
                <li>3D image/video processing</li>
                <li>Explainable AI</li>
                <li>Robotic Intelligence</li>
                <li>Sustainable Agriculture</li>
                <li>You may also present your innovations on other areas of Machine Intelligence and Computer Vision Applications</li>
              </ul>
        </p>
    );
  }
  else if (eventName === 'info graphics') {
    generatedCode = (
        <p>
            <li>Individual participants or two as a team.</li>
            <li>The poster must be based on any of the topics given below.</li>
            <li>Innovation in the presentation will be given due weightage.</li>
            <li>A full chart paper should be used (70*56cm)</li>
            <li>Posters can be digital or hand-made.</li>
            <li>Participants are expected to explain their posters for 3-4 minutes.</li>
            <li>There can be only one poster per team on any of the given topics.</li>
            <li>Plagiarism is strictly prohibited.</li>
            <li>Content can be in the form of text, visuals, or a combination of both.</li>
            <li>The Poster will be judged based on the following criteria: creativity, message, presentation, originality and visual impact.</li>
            <li>Your name,registration number,department,year,section and college name should be mentioned in the poster.</li>
            <li>Your original creation should be submitted at the event.</li>
            <br />
            <strong className='highlights'>Topics:</strong>
              <ul>
                <li>Quantum Computing</li>
                <li>Sixth sense</li>
                <li>Digital twins</li>
              </ul>
        </p>
    );
  }
  else if (eventName === 'pixellno') {
    generatedCode = (
        <p>
          <li>Photos should be originally taken by contestant.</li>
          <li>No editing of photos is allowed. More than one photo is not entertained. </li>
          <li>Plagiarism of any kind will not be tolerated. </li>
          <li>Images will be judged on originality, technical excellence, composition, overall impact and artistic merit. </li>
          <li>The photos should be mailed to techutsav24@gmail.com.</li>
          <li>File name should be the participant's name.</li>
          <li>If submitted photograph has abusive or mature content, it will not be considered as a valid entry.</li>
          <br /><strong className='highlights'>Topics:</strong>
          <ul>
            <li>Architecture photography</li>
            <li>Reflections photography</li>
            <li>Low light photography</li>
          </ul>
        </p>
    );
  }
  else if (eventName === 'idea smiths') {
    generatedCode = (
        <p>
          <li>Selling your product is the event.</li>
          <li>Maximum of 5 members per team.</li>
          <li>10 minutes of Preparation Time and 5 minutes on Stage.</li>
          <li>Must present the ad with full confidence and must have articulate communication.</li>
          <li>Reproducing old advertisements are not encouraged.</li>
          <li>Gadgets can only be used for obtaining information about the product not for obtaining the ad content.</li>
        </p>
    );
  }
  else if (eventName === 'byte battle') {
    generatedCode = (
        <p>
            <strong className="highlights">REGISTER FEE: </strong> <br /> <ul><li>Rs.100 for a Team (BGMI and Free fire)</li><li> Rs.50 per participant (Chess)</li></ul> <br />
            <strong className="highlights">BGMI and Free Fire</strong>
              <ul>
                <li>Only one team member is required to fill out the form and pay the Rs. 100 team fee.</li>
                <li>Participants must arrive on time for the competition.</li>
                <li>Bring your college ID card for verification.</li>
                <li>Headphones are allowed if needed; however, no other accessories are permitted.</li>
                <li>Re-entry or on-the-spot entries will not be entertained.</li>
                <li>Avoid jailbreaking third-party apps.</li>
                <li>Ensure that "BGMI" is pre-installed, including classic maps.</li>
                <li>For Free Fire, preinstall classic maps and TDM.</li>
                <li>Bring your own devices.</li>
                <li>Only team matches will be conducted.</li>
                <li>Ensure a stable internet connection.</li>
                <li>No refunds will be provided.</li>
                <li>Certificates will only be awarded to the winners and runners-up; no participation certificates for gaming.</li>
              </ul>
            <br />
            <strong className="highlights">Chess</strong>
              <ul>
                <li>Chess participants should pay Rs. 50.</li>
                <li>Timely arrival is mandatory for the competition.</li>
                <li>College ID cards are required for all participants.</li>
                <li>No re-entry or on-the-spot entries will be accepted.</li>
                <li>Pre install chess application by chess.com from Play Store/App Store.</li>
                <li>Avoid jailbreaking third-party apps.</li>
                <li>Bring your own devices and ensure a proper internet connection.</li>
                <li>No refunds will be issued.</li>
                <li>Certificates will only be awarded to the winners and runners-up; no participation certificates for gaming.</li>
              </ul>
        </p>
    );
  }
  else if (eventName === 'cyber giggles') {
    generatedCode = (
        <p>
          <li>Solo event (each participants can create and post one meme).</li>
          <li>Topic will be given on the spot and time duration is 30 minutes to understand,create and post.</li>
          <li>Content adherance to the the given topic is important.</li>
          <li>The provided topic must be conveyed in a single meme. The number of pictures within the meme is up to the participants.</li>
          <li>Vulgarity in any form through the contents in meme is strictly prohibited.</li>
          <li>Images and text in meme created should not promote any kind of unhealthy activities among students.</li>
          <li>Contestants are requested to attach an identification watermark with their entry.</li>
          <li>Plagiarism of any kind will not be accepted.</li>
          <li>If a meme has abusive or mature content, it will not be considered as a valid entry.</li>
        </p>
    );
  }
  else if (eventName === 'creative clash') {
    generatedCode = (
        <p>
          <li>Participation - 5 to 10 members per team.</li>
          <li>Time limit 5 to 8 minutes.</li>
          <li>Can perform on any theme of choice.</li>
          <li>Proper dress code, face paint, gloves should be strictly maintained.</li>
          <li>Non vocal tracks / a keyboardist (within the participation limit of 10) can be used.</li>
          <li>Running commentary not allowed.</li>
          <li>Music (or sound) to be submitted before hand.</li>
          <li>Props and stage sets are not allowed.</li>
          <li>Judging Criteria - Theme, Creativity, Acting, Coordination, Overall Performance and Audience Response.</li>
          <br />
          <strong className="highlights">Topics:</strong>
          <ul>
              <li>Social Engine</li>
              <li>Effects of AI</li>
              <li>Digital Detox</li>
          </ul>
        </p>
    );
  }
  else if (eventName === 'bug busters') {
    generatedCode = (
        <p>
          <li>Each team can contain a maximum of two members.</li>
          <li>Participating teams can choose their preferred language for the final round alone among C++, Java, and Python.</li>
          <li>Prelims will be held to shortlist a selected number of teams for the final round. It may have a mix-up of questions from C++, Java, and Python.</li>
        </p>
    );
  }
  else {
    generatedCode = (
      <div>
        <h3>Invalid Event Name. Check URL</h3>
      </div>
    );
  }

  return (
    <>
      <section> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
      <div className="container"> 
        <div className="rulebookcontent">
          <h1><strong className="highlight">{eventName}</strong> Rule Book</h1>
          <br />
          <p>
            <strong className='highlights'>General Rules:</strong></p><p>
            <li>I.D. cards or bonafide certificates are mandatory for registration.</li>
            <li>A participant will have to present his/her ID CARD for registration of the event he/she is participating in.</li>
            <li>Each student is limited to participating in a maximum of five events.</li>
            <li>The organisers will not take any responsibility for a clash in event timing.</li>
            <li>Participants in the Byte Battle (gaming) event are restricted from participating in any other events, as the competition takes place from 9:30 AM to 2:30 PM.</li>
            <li>Students from SRM Institute of Science and Technology - KTR Campus, are not eligible to participate in TechUtsav 9.0.</li>
            <li>Any team that demonstrates indiscipline or malpractice will be disqualified.</li>
            <li>Those who fail to register will not be considered thereon.</li>
            <li>All audio file presentations should be given only on a pen drive.</li>
            <li>Vulgarity and the offending of religious/political/personal sentiments will not be tolerated.</li>
          </p>
          <br />
          <p><strong className="highlights">{eventName} Rules:</strong></p>
          {generatedCode}
          <Link to={"../events"}><h4> Back to Events </h4></Link>
          <Link to={"../register/"+eventName}><h4> Register for {eventName} </h4></Link>
        </div> 
      </div> 
      </section>
    </>
  )
}

export default RuleBook

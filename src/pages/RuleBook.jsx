import React from 'react'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

const RuleBook = () => {
  const { eventName } = useParams();

  let generatedCode;
  if (eventName === 'techno strom') {
    generatedCode = (
        <p>
            <ul>
                <li>Participants consist of a team of two members.</li>
                <li>General Computer Aptitude Preliminary round - 4 sections with 5 questions each (Total Duration:30 minutes)</li>
                <li>The preliminary Round will be conducted in a written mode so participants must carry the required stationary items.</li>
                <li>The final round will be an on-stage event.</li>
                <li>Mobile Phones are not allowed.</li>
            </ul>
        </p>
    );
  }
  else if (eventName === 'data dynamo') {
    generatedCode = (
        <p>
            <li>A team of one or two participants.</li>
            <li>5 min for the presentation and 1-2 min for the questions</li>
            <li>Abstract should not exceed 1 page and paper should not exceed 10 pages.</li>
            <br />
            <strong className='highlights'>Topics</strong>
              <ul>
                <li>Growth of Virtual Reality. i.e Apple Vision Pro, Meta quest, Oculus.</li>
                <li>Print Your Dreams: The future of 3D manufacturing.</li>
                <li>Does chatgpt is writing fall of  Google's Empire chapter 1 if yes how? If no explain why.</li>
              </ul>
        </p>
    );
  }
  else if (eventName === 'infographics') {
    generatedCode = (
        <p>
            <li>Individual participants or two as a team.</li>
            <li>The poster must be based on any of the topic given below.</li>
            <li>Innovation in the presentation will be given due weightage.</li>
            <li>Full Chart paper should be used.</li>
            <li>Posters can be digital or hand-made.</li>
            <li>Participants are expected to explain their posters for 3-4 minutes.</li>
            <li>There can be only one poster per team on any of the given topics.</li>
            <li>Plagiarism is strictly prohibited.</li>
            <li>Content can be in the form of text or visuals or combination of both.</li>
            <br />
            <strong className='highlights'>Topics</strong>
              <ul>
                <li>Cultural Diversity.</li>
                <li>Heros among us.</li>
                <li>Empowerment & Equality.</li>
                <li>Technological evolution from the middle ages to the present.</li>
                <li>Virtual/Augmented Reality.</li>
                <li>Sixth sense.</li>
              </ul>
        </p>
    );
  }
  else if (eventName === 'pixellno') {
    generatedCode = (
        <p>
            <ul>
                <li>Photos should be originally taken by contestant.</li>
                <li>No editing of photos is allowed. More than one photo is not entertained. </li>
                <li>Plagiarism of any kind will not be tolerated. </li>
                <li>Images will be judged on originality, technical excellence, composition, overall impact and artistic merit. </li>
                <li>The photos should be mailed to techutsav24@gmail.com.</li>
                <li>File name should the participant name.</li>
                <li>If submitted photograph has abusive or mature content, it will not be considered as a valid entry.</li>
            </ul>
        </p>
    );
  }
  else if (eventName === 'ideasmiths') {
    generatedCode = (
        <p>
            <ul>
                <li>Selling your product is the event.</li>
                <li>Maximum of 5 members per team.</li>
                <li>10 minutes of Preparation Time 5 minutes on Stage.</li>
                <li>Must present the ad with full confidence and must have articulate communication.</li>
                <li>Reproducing old advertisements are not encouraged.</li>
            </ul>
        </p>
    );
  }
  else if (eventName === 'byte battle') {
    generatedCode = (
        <p>
          <ul>
            <li><strong className="highlights">For BGMI and Free Fire</strong>
              <ul>
                <li>Only one member from the team has to fill the form.</li>
                <li>Participants should pay Rs.100(Per Team).</li>
                <li>Participants should arrive for the competition on time.</li>
                <li>Participants should bring their own devices</li>
                <li>Participants should come with their College ID card.</li>
                <li>Bring headphones if necessary. Any other accessories will not be allowed.</li>
                <li>No re-entry and no on spot entry.</li>
                <li>No jailbreaking and third party apps.</li>
                <li>Please come with pre installed “BGMI” and classic maps and TDM also for Free fire preinstall classic maps .</li>
                <li>Only TEAMS matches will be conducted.</li>
                <li>Come with proper internet connection.</li>
                <li>Refunds are not applicable.</li>
                <li>Certificates will be provided only for the winner and runner (no participation certificate for gaming)</li>
              </ul>
            </li>
            <br />
            <li><strong className="highlights">For Chess</strong>
              <ul>
                <li>Participant should pay Rs.50.</li>
                <li>Participants should arrive for the competition on time.</li>
                <li>Participants should bring their own devices</li>
                <li>Participants should come with their College ID card.</li>
                <li>No re-entry and no on spot entry.</li>
                <li>No jailbreaking and third party apps.</li>
                <li>Come with proper internet connection.</li>
                <li>Refunds are not applicable.</li>
                <li>Certificates will be provided only for the winner and runner (no participation certificate for gaming)</li>
              </ul>
            </li>
          </ul>
            
        </p>
    );
  }
  else if (eventName === 'cyber giggles') {
    generatedCode = (
        <p>
            <ul>
                <li>Only entries relevant to the topic will be considered. Topic will be given on spot.</li>
                <li>Only one entry per candidate.</li>
                <li>30 minutes for creating and posting the meme.</li>
                <li>The provided topic must be conveyed in a single meme. The number of pictures within the meme is up to you.</li>
                <li>Contestants are requested to attach an identification watermark with their entry.</li>
                <li>Plagiarism of any kind will not be tolerated.</li>
                <li>If a meme has abusive or mature content, it will not be considered as a valid entry.</li>

            </ul>
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
          <strong className="highlights">Topics</strong>
          <ul>
              <li>Social engine.</li>
              <li>Women empowerment.</li>
              <li>Student Life or open choice</li>
          </ul>
        </p>
    );
  }
  else if (eventName === 'bug busters') {
    generatedCode = (
        <p>
            <ul>
                <li>Each  team  consists of   maximum  two members .</li>
                <li>Teams can choose their preferred language for only final round among C++, Java and Python.</li>
                <li>Prelims will be held inorder to shortlist  number of teams for final round.</li>
            </ul>
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

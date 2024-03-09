import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

function Register() {
  const { eventName } = useParams();
  const [submitted, setSubmitted] = useState(false);

  const [NumParticipants, setNumParticipants] = useState(1);
  const changeNumParticipants = (e) => {
    setNumParticipants(parseInt(e.target.value, 10));
  }

  const participantentryname = ["entry.2092238618", "entry.804971439", "entry.1322358781", "entry.1559571549"]
  const participantentryreg = ["entry.481760380", "entry.771109477", "entry.2125764197", "entry.1599994719"]

  return (
    <>

       <section> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        
        <div className="container">
          <div className="event_button">
            <Link to={"../events"}>
              <button className="header__btn">Back to Events</button>
            </Link>
          </div>
          <div className="registercontent">
            <h1>
              Register for <br />
              <strong className="highlight">{eventName}</strong>
            </h1>
            <center>
              <form
                action="https://docs.google.com/forms/d/e/1FAIpQLScw6yd8hHd3pncyE-LBRkO1Ut9Fef9Vxlwz3Pk3z8zY62EpwQ/formResponse"
                method="post"
                target="hidden_iframe"
                onSubmit={() => setSubmitted(true)}
              >
              <input type="hidden" name="entry.276494256" value={eventName} />{" "}
                <div className="form">
                  <div className="inputBox">
                    <input type="text" name="entry.2114207288" required />{" "}
                    <i>College Name</i>
                  </div>
                  <div className="inputBox">
                    <label>Participants</label>
                    <select id="participant_count" onChange={changeNumParticipants}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  {[...Array(NumParticipants)].map((_, index) => (
                    <div key={index}>
                      <div className="inputBox">
                        <input type="text" name={participantentryname[index]} required />
                        <i>{`Participant ${index + 1} Name`}</i>
                      </div>
                      <div className="inputBox">
                        <input type="text" name={participantentryreg[index]} required />
                        <i>{`Participant ${index + 1} Registration Number`}</i>
                      </div>
                    </div>
                  ))}
                  <div className="inputBox">
                    <input type="text" name="entry.1990457520" required />{" "}
                    <i>Degree</i>
                  </div>
                  <div className="inputBox">
                    <input type="text" name="entry.1648025598" required />{" "}
                    <i>Year of Study</i>
                  </div>
                  <div className="inputBox">
                    <input type="text" name="entry.1288286291" required />{" "}
                    <i>Whatsapp Number</i>
                  </div>
                  <div className="inputBox">
                    <input type="submit" className="header__btn" value="SUBMIT" />
                  </div>
                </div>
              </form>
            </center>
          </div>
        </div>
      </section>
      <script type="text/javascript">
        var submitted = false;
      </script>
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
        onLoad={() => {
          if (submitted) {
            window.location = "/success";
          }
        }}
      ></iframe>
    </>
  );
}
export default Register;

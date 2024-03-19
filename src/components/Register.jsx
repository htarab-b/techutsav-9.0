import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

function Register() {
  let { eventName } = useParams();
  const [submitted, setSubmitted] = useState(false);
  const [selectedGame, setSelectedGame] = useState("");

  const participantentryname = ["entry.2092238618", "entry.804971439", "entry.1322358781", "entry.1559571549", "entry.1749676454", "entry.2065660339", "entry.2064512186", "entry.981405841", "entry.100309307", "entry.572629240"];
  const participantentryreg = ["entry.481760380", "entry.771109477", "entry.2125764197", "entry.1599994719", "entry.1103851530", "entry.1972962889", "entry.882182259", "entry.1643600175", "entry.1809534894", "entry.1238748307"];

  let minParticipants, maxParticipants;
  if (eventName === "byte battle") {minParticipants = 0 ; maxParticipants = -1}
  if (eventName === "data dynamo") {minParticipants = 1 ; maxParticipants = 2}
  if (eventName === "pixellno") {minParticipants = 1 ; maxParticipants = 1}
  if (eventName === "info graphics") {minParticipants = 1 ; maxParticipants = 2}
  if (eventName === "techno storm") {minParticipants = 2 ; maxParticipants = 2}
  if (eventName === "bug busters") {minParticipants = 2 ; maxParticipants = 2}
  if (eventName === "cyber giggles") {minParticipants = 1 ; maxParticipants = 1}
  if (eventName === "creative clash") {minParticipants = 5 ; maxParticipants = 10}
  if (eventName === "idea smiths") {minParticipants = 1 ; maxParticipants = 5}

  const [NumParticipants, setNumParticipants] = useState(minParticipants);

  const changeNumParticipants = (e) => {
    setNumParticipants(parseInt(e.target.value, 10));
  }

  const changeGameName = (e) => {
    const selectedGameValue = e.target.value;
    setSelectedGame(" - " + selectedGameValue);
    switch (selectedGameValue) {
      case "BGMI":
        setNumParticipants(4);
        break;
      case "Free Fire":
        setNumParticipants(4);
        break;
      case "Chess":
        setNumParticipants(1);
        break;
      default:
        setNumParticipants(0);
        break;
    }
  }

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
                <input type="hidden" name="entry.276494256" value={eventName + selectedGame} id="game_name" />
                <div className="form">
                  <div className="inputBox">
                    <input type="text" name="entry.2114207288" required />{" "}
                    <i>College Name</i>
                  </div>
                  <hr />
                  {eventName === "byte battle" ? (
                    <div className="inputBox">
                      <label>Game</label>
                      <select id="participant_count" onChange={changeGameName}>
                        <option value="NA">Select Game</option>
                        <option value="BGMI">BGMI</option>
                        <option value="Free Fire">Free Fire</option>
                        <option value="Chess">Chess</option>
                      </select>
                    </div>
                  ) : (
                    <div className="inputBox">
                      <label>Participants</label>
                      <select id="participant_count" onChange={changeNumParticipants}>
                        {
                          (() => {
                            const options = [];
                            for (let i = minParticipants; i <= maxParticipants; i++) {
                              options.push(<option value={i}>{i}</option>);
                            }
                            return options;
                          })()
                        }
                      </select>
                    </div>
                  )}
                  <br />
                  {[...Array(NumParticipants)].map((_, index) => (
                    <div key={index}>
                        <label>{`Participant ${index + 1}`}</label>
                      <div className="inputBox">
                        <input type="text" name={participantentryname[index]} required />
                        <i>{`Name`}</i>
                      </div>
                      <div className="inputBox">
                        <input type="text" name={participantentryreg[index]} required />
                        <i>{`Registration Number`}</i>
                      </div>
                    </div>
                  ))}
                  <hr />
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
            window.location = "/success/"+eventName;
          }
        }}
      ></iframe>
    </>
  );
}
export default Register;

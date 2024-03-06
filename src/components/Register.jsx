import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

function Register() {
  const { eventName } = useParams();
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section>
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
                <div className="form">
                  <div className="inputBox">
                    <input type="text" name="entry.276494256" required />{" "}
                    <i>Event</i>
                  </div>
                  <div className="inputBox">
                    <input type="text" name="entry.2114207288" required />{" "}
                    <i>College Name</i>
                  </div>
                  <div className="inputBox">
                    <input type="text" name="entry.2092238618" required />{" "}
                    <i>Team Members</i>
                  </div>
                  <div className="inputBox">
                    <input type="text" name="entry.481760380" required />{" "}
                    <i>College Registration Numbers</i>
                  </div>
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
                    <input type="submit" value="submit" />
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

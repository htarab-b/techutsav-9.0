import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

function Register() {
    const { eventName } = useParams();

    return (
    <>
      <section> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
      <div class="container"> 
        <div className="event_button">
          <Link to={"../events"}><button className="header__btn">
              Back to Events
          </button></Link>
        </div>
        <div class="registercontent">
          <h1>Register for <br></br><strong class="highlight">{eventName}</strong></h1>
            <center>
                <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScw6yd8hHd3pncyE-LBRkO1Ut9Fef9Vxlwz3Pk3z8zY62EpwQ/formResponse" method="post">
                  <div class="form"> 
                    <div class="inputBox"> 
                      <input type="text" name="entry.325597957" required /> <i>College Name</i> 
                    </div> 
                    <div class="inputBox"> 
                      <input type="text" name="entry.826355120" required /> <i>Team Members</i> 
                    </div> 
                    <div class="inputBox"> 
                      <input type="text" name="entry.1023560281" required /> <i>College Registration Numbers</i> 
                    </div> 
                    <div class="inputBox"> 
                      <input type="text" name="entry.1426665475" required /> <i>Degree</i> 
                    </div> 
                    <div class="inputBox"> 
                      <input type="text" name="entry.570396205" required /> <i>Year of Study</i> 
                    </div> 
                    <div class="inputBox"> 
                      <input type="text" name="entry.2133523464" required /> <i>Whatsapp Number</i> 
                    </div> 
                    <div class="inputBox"> 
                      <input type="submit" value="SUBMIT" /> 
                    </div> 
                  </div> 
                </form>
            </center>
        </div> 
      </div> 
      </section>
    </>
  );
}
export default Register;
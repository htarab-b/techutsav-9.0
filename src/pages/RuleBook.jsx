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
                <li>Rule 1</li>
                <li>Rule 2</li>
                <li>Rule 3</li>
            </ul>
        </p>
    );
  }
  else if (eventName === 'data dynamo') {
    generatedCode = (
        <p>
            <ul>
                <li>Rule 1</li>
                <li>Rule 2</li>
                <li>Rule 3</li>
            </ul>
        </p>
    );
  }
  else if (eventName === 'infographics') {
    generatedCode = (
        <p>
            <ul>
                <li>Rule 1</li>
                <li>Rule 2</li>
                <li>Rule 3</li>
            </ul>
        </p>
    );
  }
  else if (eventName === 'pixellno') {
    generatedCode = (
        <p>
            <ul>
                <li>Rule 1</li>
                <li>Rule 2</li>
                <li>Rule 3</li>
            </ul>
        </p>
    );
  }
  else if (eventName === 'buss burst') {
    generatedCode = (
        <p>
            <ul>
                <li>Rule 1</li>
                <li>Rule 2</li>
                <li>Rule 3</li>
            </ul>
        </p>
    );
  }
  else if (eventName === 'byte battle') {
    generatedCode = (
        <p>
            <ul>
                <li>Rule 1</li>
                <li>Rule 2</li>
                <li>Rule 3</li>
            </ul>
        </p>
    );
  }
  else if (eventName === 'cyber giggles') {
    generatedCode = (
        <p>
            <ul>
                <li>Rule 1</li>
                <li>Rule 2</li>
                <li>Rule 3</li>
            </ul>
        </p>
    );
  }
  else if (eventName === 'virtual silhouette') {
    generatedCode = (
        <p>
            <ul>
                <li>Rule 1</li>
                <li>Rule 2</li>
                <li>Rule 3</li>
            </ul>
        </p>
    );
  }
  else if (eventName === 'bug busters') {
    generatedCode = (
        <p>
            <ul>
                <li>Rule 1</li>
                <li>Rule 2</li>
                <li>Rule 3</li>
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

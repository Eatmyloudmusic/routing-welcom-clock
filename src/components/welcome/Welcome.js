import React from "react";

function Welcome(props) {
  if (props.name === undefined) {
    return <div className="Welcome" name="mike">Welcome, {props.match.params.name}!</div>;

  }
  
  else {
  }
  
  return <div className="Welcome">Welcome, {props.name}!</div>
}

export default Welcome;




 
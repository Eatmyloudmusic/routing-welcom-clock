import React from "react";


  
  function NoMatch() {
    // let location = useLocation();
  
    return (
      <div className="Welcome">Welcome, 
      {/* {props.match.params.error}! */}
  
  <div>You have entered a restricted area.</div><br>
  </br>
  <div><h5>Error 404:<br></br>PAGE NOT FOUND</h5></div>
        <h3>
          {/* No match for <code>{location.pathname}</code> */}
        </h3>
      </div>
    );
  }

export default NoMatch;

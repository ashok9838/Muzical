import React, { useState } from "react";

export default function Test2() {
  const[myStyle,setMyStlye]= useState({ 
    
  color:"white",
  backgroundColor:"black"
   
   

  })
  
  return (
    <div className="container " style={myStyle}>
      <h1 className="text-2xl mx-2 my-2">About us</h1>
      <div class="accordion" id="accordionExample" style={myStyle}>
        <div class="accordion-item " style={myStyle}>
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"style={myStyle}
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        
        
    </div>
    <button className="btn btn-secondary my-3 mx-3" onClick={toggleStyle} >
         Enable dark mode
        </button>
    </div>
  );
}

import React from "react";

function Cat(props) {
    return (
      <div className="col">
          <img alt={props.id} 
            src={props.src} 
            clicked={props.clicked}
            class="img-thumbnail"
            onClick={() => props.picClick(props.id)}/>
      </div>
    );
}

export default Cat;
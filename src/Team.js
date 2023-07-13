import React, {useState, useEffect } from "react";
import "./Team.css"

export function Team(props) { 
    return (
        <>
            <div className="teamSlot" key={props.teamNum}>
                <img src={props.sprite} alt={props.name}></img>
                <button id="x" >
                    X
            </button>
            </div>
            
         </>
    );
}

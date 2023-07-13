import React, {useState, useEffect } from "react";
import "./Team.css"

export function Team(props) { 
    function remove() { 
        props.removeTeamMember(props.name)
    }
    return (
        <>
            <div className="teamSlot" key={props.teamNum}>
                <img src={props.sprite} alt={props.name}></img>
                <button id="x" onClick={remove}>
                    X
                </button>
            </div>
            
         </>
    );
}

import React, {useState, useEffect} from 'react'

export function Pokemon(props) { 

    return (
    <>
        <h1>{props.name}</h1>
        <img src={props.sprite} alt=""/>
    </>
    
    );
}
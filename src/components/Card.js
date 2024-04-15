import React from 'react';

function Card(props){
    return(
        <div style={{ width: "20vw" }}>
            <img src={props.img} alt={props.name} style={{width:200}} />
            <p style={{ color: "black" }}>{props.name}</p>
        </div>
    );
}

export default Card;

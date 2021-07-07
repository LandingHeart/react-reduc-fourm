import React from "react";
import "./card.css";
export default function Card(props) {
    return (
        <div className="card">
            <img className="img" src={props.artwork} alt="img" />
            <p>Name: {props.artistName}</p>
            <p>Name: {props.albumName}</p>
        </div>
    );
}

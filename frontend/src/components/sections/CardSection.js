import React from "react";
import "./cardSection.css";
export default function CardSection(props) {
    return (
        <div className="card-section">
            <div className="row">
                <h3> {props.title} </h3>
                {/* <img className="img" src={} alt="img" /> */}
                <div className="col">
                    <p>{props.username}</p>
                    {/* image */}
                </div>
                <div className="col">
                    <p> {props.description}</p>
                    <p> {props.comment}</p>
                </div>
            </div>
        </div>
    );
}

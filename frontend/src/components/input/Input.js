import React from "react";
import "./input.css";
export default function Input(props) {
    const { handleChange, handleOnClick } = props;
    return (
        <div id="input-text-container">
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Search"
                onChange={handleChange}
            />

            <button onClick={handleOnClick}>
                <i className="fa fa-search" />
            </button>
        </div>
    );
}

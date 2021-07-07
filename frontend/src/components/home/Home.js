import React, { useState } from "react";

export default function Home() {
    const [count, setCount] = useState(4);

    function decrement() {
        setCount((prevCount) => prevCount - 1);
    }
    function increment() {
        setCount((prevCount) => prevCount + 1);
    }
    return (
        <>
            <div className="home-container">
                <button onClick={decrement}> - </button>
                <span> {count}</span>
                <button onClick={increment}> + </button>
            </div>
        </>
    );
}

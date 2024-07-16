import React from "react";

const EventHandling = (onButtonClick) => {
    const handleClick = () => {
        console.log("Button Clicked"); 
        alert("Button Clicked!")
    }

    return (
        <div>
            <h1>Event Handling</h1>
            <button onClick={()=>onButtonClick} className="bg-black">
                Click Me
            </button>
        </div>
    )

}

export default EventHandling;
import React, { useState } from "react";
import './styles/Calculator.css'; // Import the CSS styles
 
function Calculator() {
    const [text1, setText] = useState(""); // Calculator display value
    const [showImage, setShowImage] = useState(false); // Controls image visibility
 
    const ClickHandle = (e) => {
        const value = e.target.value;
        if (value === "C") {
            setText(""); // Clears the display
        } else if (value === "=") {
            try {
                setText(eval(text1)); // Evaluates the input
            } catch {
                setText("Error"); // Handles invalid inputs
            }
        } else {
            setText(text1 + value); // Appends button value to display
        }
    };
 
    const handleShowMe = () => setShowImage(true); // Displays the image
    const handleSquare = () => {
        if (!isNaN(Number(text1))) {
            setText(Math.pow(Number(text1), 2).toString()); // Calculates the square
        } else {
            setText("Error"); // Handles non-numeric inputs
        }
    };
 
    return (
<div className="Calculator">
            {/* Display Screen */}
<div className="screen-row">
<input type="text" readOnly value={text1} />
</div>
 
            {/* Calculator Buttons */}
<div className="button-row">
<button value="(" onClick={ClickHandle} className="ButtonStyle">(</button>
<button value="CE" onClick={ClickHandle} className="ButtonStyle">CE</button>
<button value=")" onClick={ClickHandle} className="ButtonStyle">)</button>
<button value="C" onClick={ClickHandle} className="ButtonStyle">C</button>
</div>
<div className="button-row">
<button value="1" onClick={ClickHandle} className="ButtonStyle">1</button>
<button value="2" onClick={ClickHandle} className="ButtonStyle">2</button>
<button value="3" onClick={ClickHandle} className="ButtonStyle">3</button>
<button value="+" onClick={ClickHandle} className="ButtonStyle">+</button>
</div>
<div className="button-row">
<button value="4" onClick={ClickHandle} className="ButtonStyle">4</button>
<button value="5" onClick={ClickHandle} className="ButtonStyle">5</button>
<button value="6" onClick={ClickHandle} className="ButtonStyle">6</button>
<button value="-" onClick={ClickHandle} className="ButtonStyle">-</button>
</div>
<div className="button-row">
<button value="7" onClick={ClickHandle} className="ButtonStyle">7</button>
<button value="8" onClick={ClickHandle} className="ButtonStyle">8</button>
<button value="9" onClick={ClickHandle} className="ButtonStyle">9</button>
<button value="*" onClick={ClickHandle} className="ButtonStyle">*</button>
</div>
<div className="button-row">
<button value="." onClick={ClickHandle} className="ButtonStyle">.</button>
<button value="0" onClick={ClickHandle} className="ButtonStyle">0</button>
<button value="=" onClick={ClickHandle} className="ButtonStyle">=</button>
<button value="/" onClick={ClickHandle} className="ButtonStyle">/</button>
</div>
 
            {/* Special Buttons */}
<div className="special-buttons-row">
<button className="special-button" onClick={handleShowMe}>
                    Show Me
</button>
<button className="special-button" onClick={handleSquare}>
                    Square
</button>
</div>
 
            {/* Display Image */}
            {showImage && (
<div className="image-container">
<img
                        src="https://i.imgur.com/ZdBu4rL.jpeg"
                        alt="Your Picture"
                        className="profile-picture"
                    />
</div>
            )}
</div>
    );
}
 
export default Calculator;
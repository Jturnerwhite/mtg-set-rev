import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./rating-slider.css";

function RatingSlider(props) {
    // let defaultVal = props.defaultVal;
    // let rangeLow = props.rangeLow;
    // let rangeHigh = props.rangeHigh;

    const [sliderValue, updateSliderValue] = useState(5);

    function handleChange(event) {
        updateSliderValue(event.target.value);
    }

    function valueClick(val) {
        updateSliderValue(val);
    }

    return (
        <div className="slider-container">
            <input className="slider" type="range" min="0" max="10" value={sliderValue} onChange={handleChange} />
            <ul className="rating">
                <li onClick={() => { valueClick(0) }}>0</li>
                <li onClick={() => { valueClick(1) }}>0.5</li>
                <li onClick={() => { valueClick(2) }}>1</li>
                <li onClick={() => { valueClick(3) }}>1.5</li>
                <li onClick={() => { valueClick(4) }}>2</li>
                <li onClick={() => { valueClick(5) }}>2.5</li>
                <li onClick={() => { valueClick(6) }}>3</li>
                <li onClick={() => { valueClick(7) }}>3.5</li>
                <li onClick={() => { valueClick(8) }}>4</li>
                <li onClick={() => { valueClick(9) }}>4.5</li>
                <li onClick={() => { valueClick(10) }}>5</li>
            </ul>
        </div>
    );
}

export default RatingSlider;
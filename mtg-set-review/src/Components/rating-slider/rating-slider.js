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

    return (
        <div className="slider-container">
            <input className="slider" type="range" min="0" max="10" value={sliderValue} onChange={handleChange} />
            <ul className="rating">
                <li>0.0</li>
                <li>1.0</li>
                <li>2.0</li>
                <li>3.0</li>
                <li>4.0</li>
                <li>5.0</li>
            </ul>
        </div>
    );
}

export default RatingSlider;
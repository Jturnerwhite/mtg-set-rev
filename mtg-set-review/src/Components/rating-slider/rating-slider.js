import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./rating-slider.css";

function RatingSlider(props) {
    let values = [
        {
            display: "0",
            desc: "Unplayable."
        },
        {
            display: "0.5",
            desc: "Unplayable."
        },
        {
            display: "1",
            desc: "Unplayable."
        },
        {
            display: "1.5",
            desc: "Unplayable."
        },
        {
            display: "2",
            desc: "Unplayable."
        },
        {
            display: "2.5",
            desc: "Unplayable."
        },
        {
            display: "3",
            desc: "Unplayable."
        },
        {
            display: "3.5",
            desc: "Unplayable."
        },
        {
            display: "4",
            desc: "Unplayable."
        },
        {
            display: "4.5",
            desc: "Unplayable."
        },
        {
            display: "5",
            desc: "Unplayable."
        },
    ];

    const [sliderValue, updateSliderValue] = useState(5);
    //const [sliderOptions, updateSliderOptions] = useState(values);

    function update(value) {
        console.log("val", value);
        values.forEach((item) => { item.selected = false; });
        values[value].selected = false;
        //updateSliderOptions(values);
        updateSliderValue(value);
    }

    function handleChange(event) {
        update(event.target.value);
    }

    let quickSelectDisplay = values.map((val, index) => {
        let classes = (sliderValue == index) ? "selected" : "";
        return <li key={index} className={classes} onClick={() => { update(index) }}>{val.display}</li>
    });

    return (
        <>
            <h2>Stuff</h2>
            <div className="slider-container">
                <input className="slider" type="range" min="0" max={values.length-1} value={sliderValue} onChange={handleChange} />
                <ul className="rating">
                    {quickSelectDisplay}
                </ul>
            </div>
        </>
    );
}

export default RatingSlider;
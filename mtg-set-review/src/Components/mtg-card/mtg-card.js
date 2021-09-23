import React, { useState } from 'react';
import "./mtg-card.css"

function MtgCard(props) {
    let backsideDisplay = "";
    let topLevelClasses = "mtg-card";
    if(props.card.backUrl) {
        backsideDisplay = <img className="card-image" src={props.card.backUrl}/>;
    }
    if(props.showBack) {
        topLevelClasses += " show-back";
    }

    return (
        <div className={topLevelClasses}>
            <div className="front">
                <img className="card-image" src={props.card.frontUrl}/>
            </div>
            <div className="back">
                {backsideDisplay}
            </div>
        </div>
    );
}

export default MtgCard;
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./mtg-card.css"

function MtgCard(props) {
    const [flipStatus, flip] = useState(0);

    let backsideDisplay = "";
    let toggleButton = "";
    let topLevelClasses = "mtg-card";

    if(props.card.backUrl) {
        backsideDisplay = <img className="card-image" src={props.card.backUrl}/>;
        let buttonClass = "flip-toggle" + (flipStatus ? " flipped" : "");
        toggleButton = <span className={buttonClass} onClick={() => flip((flipStatus) ? 0 : 1)}><FontAwesomeIcon icon="retweet"/></span>;
    }

    if(flipStatus) {
        topLevelClasses += " show-back";
    }

    return (
        <div className="mtg-card-container">
            <div className={topLevelClasses}>
                <div className="front">
                    <img className="card-image" src={props.card.frontUrl}/>
                </div>
                <div className="back">
                    {backsideDisplay}
                </div>
            </div>
            
            {toggleButton}
        </div>
    );
}

export default MtgCard;
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./mtg-card.css"

function MtgCard(props) {
    const [flipStatus, flip] = useState(0);

    console.log(props.card.name);

    let frontUrl = "";
    let backsideDisplay = "";
    let toggleButton = "";
    let topLevelClasses = "mtg-card";

    if(props.card.card_faces) {
        frontUrl = props.card.card_faces[0].image_uris.normal;
        
        backsideDisplay = <img className="card-image" src={props.card.card_faces[1].image_uris.normal}/>;
        let buttonClass = "flip-toggle" + (flipStatus ? " flipped" : "");
        toggleButton = <span className={buttonClass} onClick={() => flip((flipStatus) ? 0 : 1)}><FontAwesomeIcon icon="retweet"/></span>;
    }
    else {
        frontUrl = props.card.image_uris.normal;
    }

    return (
        <div className="mtg-card-container">
            <div className={topLevelClasses}>
                <div className="front">
                    <img className="card-image" src={frontUrl}/>
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
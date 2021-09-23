import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MtgCard from '../mtg-card/mtg-card';

import "./card-rating.css"

function CardRating() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    let card1 = {
        frontUrl: "https://c1.scryfall.com/file/scryfall-cards/large/front/3/6/3628a023-3f69-4b7f-a6cc-42e4293ecfdd.jpg?1628196534",
        showBack: false
    };
    let card2 = {
        frontUrl: "https://c1.scryfall.com/file/scryfall-cards/large/front/1/4/14d27a38-6ed1-499e-ab30-26e04a56c071.jpg?1631043289",
        backUrl: "https://c1.scryfall.com/file/scryfall-cards/large/back/1/4/14d27a38-6ed1-499e-ab30-26e04a56c071.jpg?1631043289",
        showBack: false
    };
    let card3 = {
        frontUrl: "https://c1.scryfall.com/file/scryfall-cards/large/front/b/9/b94bc06c-6351-43d3-a58d-b28dc6d4705c.jpg?1631134318",
        showBack: false
    };

    // function flip() {
    //     card2.showBack = !card2.showBack;
    //     console.log("flipped:", card2.showBack);
    // }

    return (
        <div className="mtg-card-display-container">
            <div className="image-container">
                <div className="background-card">
                    <MtgCard card={card1}/>
                    <MtgCard card={card3}/>
                </div>
                <div className="focused-image-container">
                    <MtgCard card={card2} showBack={(count ? true : false)}/>
                </div>
            </div>
            <div className="card">
                <span className="float-control top-left"><FontAwesomeIcon icon="arrow-left"/></span>
                <span className="float-control lower-middle" onClick={() => setCount((count) ? 0 : 1)}><FontAwesomeIcon icon="retweet"/></span>
                <span className="float-control top-right"><FontAwesomeIcon icon="arrow-right"/></span>

                <div className="rating-container">
                    <ul className="rating">
                        <li>0.0</li>
                        <li>0.5</li>
                        <li>1.0</li>
                        <li>1.5</li>
                        <li>2.0</li>
                        <li>2.5</li>
                        <li>3.0</li>
                        <li>3.5</li>
                        <li>4.0</li>
                        <li>4.5</li>
                        <li>5.0</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardRating;
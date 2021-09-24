import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MtgCard from '../mtg-card/mtg-card';
import RatingSlider from '../rating-slider/rating-slider';

import "./card-rating.css"

function CardRating(props) {
    let previousCard = null
    let activeCard = null;
    let nextCard = null;

    if(!props || !props.cards) {
        previousCard = {
            frontUrl: "https://c1.scryfall.com/file/scryfall-cards/large/front/0/8/08950015-eee5-4327-888c-82dfd13bb9ad.jpg?1631222035",
            showBack: false
        };
        activeCard = {
            frontUrl: "https://c1.scryfall.com/file/scryfall-cards/large/front/1/4/14d27a38-6ed1-499e-ab30-26e04a56c071.jpg?1631043289",
            backUrl: "https://c1.scryfall.com/file/scryfall-cards/large/back/1/4/14d27a38-6ed1-499e-ab30-26e04a56c071.jpg?1631043289",
            showBack: false
        };
        nextCard = {
            frontUrl: "https://c1.scryfall.com/file/scryfall-cards/large/front/f/9/f9fc55fd-161a-4d77-82f0-27075210e7e7.jpg?1630959214",
            showBack: false
        };
    }
    else {
        previousCard = props.cards[0];
        activeCard = props.cards[1];
        nextCard = props.cards[2];
    }

    return (
        <div className="card-rating-container">
            <div className="image-container">
                <div className="background-card">
                    <MtgCard card={previousCard}/>
                    <MtgCard card={nextCard}/>
                </div>
                <div className="focused-card">
                    <MtgCard card={activeCard}/>
                </div>
            </div>
            <div className="card">
                <span className="float-control top-left"><FontAwesomeIcon icon="arrow-left"/></span>
                <span className="float-control top-right"><FontAwesomeIcon icon="arrow-right"/></span>

                <div className="rating-container">
                    <RatingSlider/>
                </div>
            </div>
        </div>
    );
}

export default CardRating;
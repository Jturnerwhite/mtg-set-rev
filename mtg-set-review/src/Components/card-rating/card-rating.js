import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MtgCard from '../mtg-card/mtg-card';
import RatingSlider from '../rating-slider/rating-slider';

import "./card-rating.css"

function CardRating(props) {
    let previousCard = null
    let activeCard = null;
    let nextCard = null;

    previousCard = props.cards[0];
    activeCard = props.cards[1];
    nextCard = props.cards[2];

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
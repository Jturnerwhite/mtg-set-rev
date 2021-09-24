import React from "react";
import CardRating from "../Components/card-rating/card-rating";
import BoxLoader from "../Components/misc/box-loader.comp";

export default class CardReviewPage extends React.Component {
    state = {
        Id: 0,
        Cards: []
    };

    constructor(props) {
        super(props);

        this.state = {
            Id: props.sessionId,
            Cards: []
        };
    }

    componentDidMount() {
        let queryString = "?q=set:MID&unique=cards&order=color";
        let sessionId = 0;
        if(this.props && this.props.match.params) {
            sessionId = this.props.match.params.sessionId;
        }

        fetch("https://api.scryfall.com/cards/search" + queryString)
        .then(response => response.json())
        .then((data) => {
            let cards = [];
            if(data.data && data.data.length > 0) {
                cards = data.data;
            }

            this.setState({
                Id: sessionId,
                Cards: cards
            });
        });
    }

    render() {
        if(this.state.Cards == null || this.state.Cards.length == 0) {
            return <BoxLoader/>;
        }
        else {
            return (
                <>
                    <div className="flex v-center h-center f-col">
                        <CardRating cards={this.state.Cards}/>
                    </div>
                </>
            );
        }
    }
}
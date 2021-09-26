import React from "react";
import CardRating from "../Components/card-rating/card-rating";
import SessionService from "../Services/Session.service";

export default class SandboxPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        let cards = testData;
        return (
            <>
                <div className="flex v-center h-center f-col">
                    <CardRating cards={cards}/>
                </div>
            </>
        );
    }
}

let testData = [
    {
        "id": "18092f68-b96e-4084-9eba-b240d2195d81",
        "name": "Adeline, Resplendent Cathar",
        "image_uris": {
            "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/1/8/18092f68-b96e-4084-9eba-b240d2195d81.jpg?1631285896"
        }
    },
    {
        "object": "card",
        "id": "54d4e7c3-294d-4900-8b70-faafda17cc33",
        "name": "Ambitious Farmhand // Seasoned Cathar",
        "layout": "transform",
        "card_faces": [
            {
                "name": "Ambitious Farmhand",
                "image_uris": {
                    "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/4/54d4e7c3-294d-4900-8b70-faafda17cc33.jpg?1631313886",
                }
            },
            {
                "name": "Seasoned Cathar",
                "image_uris": {
                    "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/back/5/4/54d4e7c3-294d-4900-8b70-faafda17cc33.jpg?1631313886",
                }
            }
        ]
    },
    {
        "object": "card",
        "id": "6109b54e-56c5-4014-9f6d-d5f7a0fd725d",
        "name": "Beloved Beggar // Generous Soul",
        "layout": "transform",
        "card_faces": [
            {
                "name": "Beloved Beggar",
                "image_uris": {
                    "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/6/1/6109b54e-56c5-4014-9f6d-d5f7a0fd725d.jpg?1630610048",
                }
            },
            {
                "object": "card_face",
                "name": "Generous Soul",
                "image_uris": {
                    "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/back/6/1/6109b54e-56c5-4014-9f6d-d5f7a0fd725d.jpg?1630610048",
                }
            }
        ]
    },
    {
        "id": "4adee830-62fd-4ab4-b1c6-a8bbe15331d1",
        "name": "Bereaved Survivor // Dauntless Avenger",
        "layout": "transform",
        "card_faces": [
            {
                "object": "card_face",
                "name": "Bereaved Survivor",
                "image_uris": {
                    "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/4/a/4adee830-62fd-4ab4-b1c6-a8bbe15331d1.jpg?1631314326"
                }
            },
            {
                "name": "Dauntless Avenger",
                "image_uris": {
                    "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/back/4/a/4adee830-62fd-4ab4-b1c6-a8bbe15331d1.jpg?1631314326",
                }
            }
        ]
    }
];
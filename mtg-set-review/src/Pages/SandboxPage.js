import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './card-display.css';

export default class SandboxPage extends React.Component {
    render() {
        return (
            <>
                <div className="flex v-center h-center f-col">
                    <div class="mtg-card-display-container">
                        <div class="image-container">
                            <img src="https://c1.scryfall.com/file/scryfall-cards/large/front/e/4/e48c24fe-a584-4b93-8275-240d1c202b26.jpg?1630608897"/>
                        </div>
                        <div class="card">
                            <span class="top-left"><FontAwesomeIcon icon="retweet" /></span>
                            <span class="top-right"><FontAwesomeIcon icon="arrow-right" /></span>

                            <ul class="rating">
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
            </>
        );
    }
}
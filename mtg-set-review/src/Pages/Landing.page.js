import React from "react";
import SessionService from "../Services/Session.service";

export default class LandingPage extends React.Component {
    render() {
        let sessionService = new SessionService();
        let conditionalDisplayElements;
        if(sessionService.GetAll().length > 0) {
            conditionalDisplayElements = <a href="/session/select">Select Session</a>;
        }

        return (
            <div className="flex v-center h-center f-col">
                <h1>MTG: Set Reviewer</h1>
                <a href="/session/start">Start Session</a>
                {conditionalDisplayElements}
                <a href="/sandbox">Sandbox</a>
            </div>
        );
    }
}
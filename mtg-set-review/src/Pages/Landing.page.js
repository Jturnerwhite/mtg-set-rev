import React from "react";

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className="flex v-center h-center f-col">
                <h1>MTG: Set Reviewer</h1>
                <a href="/session/start">Start Session</a>
                <a href="/session/find">Find Session</a>
            </div>
        );
    }
}
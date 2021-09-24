import React from "react";
import BoxLoader from "../../Components/misc/box-loader.comp";
import SessionList from "../../Components/session-form-comps/list-sessions";
import SessionService from "../../Services/Session.service";

export default class SelectPage extends React.Component {
    sessionService = null;
    state = {
        sessions: null
    }

    constructor(props) {
        super(props);
        this.sessionService = new SessionService();
        this.state = {
            sessions: this.sessionService.GetAll()
        }
    }

    render() {
        let display = <BoxLoader/>;
        if(this.state.sessions) {
            console.log(this.state.sessions)
            display = <SessionList sessions={this.state.sessions}/>;
        }

        return (
            <div className="flex v-center h-center f-col">
                <div className="session-form card">
                    {display}
                </div>
            </div>
        );
    }
}
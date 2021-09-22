import React from "react";
import CardDisplay from "../Components/card-display/card-display";

export default class SandboxPage extends React.Component {
    render() {
        return (
            <>
                <div className="flex v-center h-center f-col">
                    <CardDisplay/>
                </div>
            </>
        );
    }
}
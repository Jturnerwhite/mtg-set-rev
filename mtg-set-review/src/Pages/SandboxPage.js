import React from "react";
import CardRating from "../Components/card-rating/card-rating";

export default class SandboxPage extends React.Component {
    render() {
        return (
            <>
                <div className="flex v-center h-center f-col">
                    <CardRating/>
                </div>
            </>
        );
    }
}
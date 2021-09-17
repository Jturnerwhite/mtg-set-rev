import React from "react";

import { SetList } from "../Components/set-comp/set.comp";

export default class LandingPage extends React.Component {
    state = {
        SetList: []
    };

    constructor(props) {
        super(props);
        this.state = {
            SetList: []
        };
    }

    componentDidMount() {
        console.log("componentDidMount");
        fetch("https://api.scryfall.com/sets")
        .then(response => response.json())
        .then((data) => {
            let sets = [];
            if(data.data && data.data.length > 0) {
                sets = data.data.map((set) => {
                    return {
                        Id: set.id,
                        Type: set.set_type,
                        Name: set.name,
                        Code: set.code,
                        Icon: set.icon_svg_uri
                    }
                });
            }

            this.setState({
                SetList: sets
            });
            console.log(this.state);
        });
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        return (
            <div className="flex v-center f-col">
                <h1>MTG: Set Reviewer</h1>
                <SetList sets={this.state.SetList}/>
            </div>
        );
    }
}
import React from "react";

import { SetList } from "../../Components/set-comp/set.comp";
import SetSelect from "../../Components/session-form-comps/set-select";
import BoxLoader from "../../Components/misc/box-loader.comp";
import PrivacySelect from "../../Components/session-form-comps/privacy-select";

import "./session.css";
import Finalize from "../../Components/session-form-comps/finalize";

export default class StartPage extends React.Component {
    state = {
        SetList: [],
        SelectedSet: null,
        SelectedPrivacy: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            SetList: [],
            SelectedSet: null,
            SelectedPrivacy: null,
        };

        this.handleSetSelect = this.handleSetSelect.bind(this);
        this.handlePrivacySelect = this.handlePrivacySelect.bind(this);
    }

    componentDidMount() {
        fetch("https://api.scryfall.com/sets")
        .then(response => response.json())
        .then((data) => {
            let sets = [];
            if(data.data && data.data.length > 0) {
                sets = data.data
                .filter(set => {
                    return set.set_type === "expansion" || set.set_type === "core"
                })
                .map((set) => {
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
        });
    }

    componentWillUnmount() {
    }

    handleSetSelect = function(set) {
        this.setState({ ...this.state, SelectedSet: set});
    }

    handlePrivacySelect = function(privacyLevel) {
        console.log(privacyLevel)
        this.setState({ ...this.state, SelectedPrivacy: privacyLevel});
    }

    render() {
        let display = <BoxLoader/>;
        if(!this.state.SelectedSet) {
            display = <SetSelect setList={this.state.SetList} callback={this.handleSetSelect} />;
        }
        else if(this.state.SelectedPrivacy == null) {
            display = <PrivacySelect callback={this.handlePrivacySelect}/>;
        }
        else if(this.state.SelectedPrivacy != null) {
            display = <Finalize/>
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
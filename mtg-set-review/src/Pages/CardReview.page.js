import React from "react";


export default class CardReviewPage extends React.Component {
    state = {
        Id: 0
    };

    constructor(props) {
        super(props);
        console.log(props);
        console.log(props.sessionId);

        this.setState({ Id: 0 });
    }

    componentDidMount() {
        console.log(this.props);
        if(this.props && this.props.match.params) {
            this.setState({ Id: this.props.match.params.sessionId });
        }
    }

    render() {
        return (
            <div><h1>{ this.state.Id }</h1></div>
        );
    }
}
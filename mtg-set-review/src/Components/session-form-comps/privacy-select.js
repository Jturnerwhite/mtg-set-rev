import React from "react";

function PrivacySelect(props) {
    return (
        <>
            <h1 className="text-center">Select Privacy Level</h1>
            <div className="privacy-form">
                <div className="option hover-select" onClick={() => { props.callback(0); }}>
                    <label>Private (just for you)</label>
                </div>
                <div className="option hover-select" onClick={() => { props.callback(1); }}>
                    <label>Private With Code (just for you and friends)</label>
                </div>
                {/* <div className="option" onClick={() => { props.callback(2); }}>
                    <label>Public (anyone can add to the average)</label>
                </div> */}
            </div>
        </>
    );
}

export default PrivacySelect;
import React from "react";

function Finalize(props) {
    return (
        <>
            <h1 className="text-center">Finalize</h1>
            <div className="finalize-form">
                <button onClick={() => { props.onFinalize(); }}>Start</button>
            </div>
        </>
    );
}

export default Finalize;
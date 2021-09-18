import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback } from 'react';
import BoxLoader from '../misc/box-loader.comp';

import "./set.comp.css";

function SetList(props) {
    let display = [];

    if(props && props.sets && props.sets.length > 0) {
        display = props.sets.map((set, index) => {
            return <SetDisplay key={index} set={set} clickEvent={props.callback} />
        });
    }
    else {
        display = <BoxLoader/>
    }

    return (
        <div className="set-list">
            {display}
        </div>
    );
}

function SetDisplay(props) {
    let { set, clickEvent } = props;
    let onClick = useCallback(() => {
        console.log("functional click");
        clickEvent(set);
    }, [clickEvent]);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="set" onClick={onClick}>
            <div className="left-content">
                <img src={set.Icon}/>
                <label>{set.Name}</label>
            </div>
            <button className="select-set">
                <FontAwesomeIcon icon="arrow-right" />
            </button>
        </div>
    );
}

export { SetList, SetDisplay };
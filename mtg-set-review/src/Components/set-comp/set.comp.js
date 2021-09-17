import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BoxLoader from '../misc/box-loader.comp';

import "./set.comp.css";

function SetList(props) {
    let display = [];

    if(props && props.sets && props.sets.length > 0) {
        display = props.sets.map((set, index) => {
            return <SetDisplay key={index} set={set} />
        });
    }
    else {
        display = <BoxLoader/>
    }

    return (
        <div className="set-list soft-pad">
            {display}
        </div>
    );
}

function SetDisplay(props) {
    let set = props.set;

    return (
        <div className="set">
            <div className="left-content">
                <img src={set.Icon} />
                <label>{set.Name}</label>
            </div>
            <button className="select-set">
                <FontAwesomeIcon icon="arrow-right" />
            </button>
        </div>
    );
}

export { SetList, SetDisplay };
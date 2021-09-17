import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./set.comp.css";

function SetList(props) {
    let listOfSets = [];
    if(props && props.sets) {
        listOfSets = props.sets.map((set, index) => {
            return <SetDisplay key={index} set={set} />
        });
    }
    return <div className="set-list soft-pad">{listOfSets}</div>;
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
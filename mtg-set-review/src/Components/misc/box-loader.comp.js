import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./box-loader.comp.css"

function BoxLoader() {
    return (
        <div className="box-loader">
            <FontAwesomeIcon icon="spinner" />
            <label> Loading</label>
        </div>
    );
}

export default BoxLoader;
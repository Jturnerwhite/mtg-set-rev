import { SetList } from "../../Components/set-comp/set.comp";

function SetSelect(props) {
    return (
        <>
            <h1 className="text-center">Select a Set</h1>
            <SetList sets={props.setList} callback={props.callback}/>
        </>
    );
}

export default SetSelect;
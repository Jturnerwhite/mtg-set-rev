import BoxLoader from "../misc/box-loader.comp";

export default function SessionList(props) {
    let listOfSessions = <BoxLoader/>;
    if(props.sessions) {
        listOfSessions = props.sessions.map((sessh) => {
            return <div>
                {sessh.id} - {sessh.set.Code} - {sessh.created}
            </div>
        });
    }

    return <>
        <div>
            <h1 className="text-center">Select Session</h1>
            {listOfSessions}
        </div>
    </>;
}
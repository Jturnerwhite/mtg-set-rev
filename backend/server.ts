import express from 'express';
import { Schema, model, connect } from 'mongoose';
import { Session, SessionSchema } from './interfaces/session';

const app = express();
const PORT = 3100;

app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "localhost"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    mongoTest();
    console.log("Test");
});

app.listen(PORT, () => {
    console.log(`MTG-SET-REV-BACKEND listening at http://localhost:${PORT}`);
});

async function mongoTest(): Promise<void> {
    await connect("mongodb+srv://backend:RwGn6wd5r7N@mtg-set-rev-0.qhlzk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

    const sessionSchemaInst = new Schema(SessionSchema);
    const sessionModel = model<Session>('Session', sessionSchemaInst);
    const newSession = new sessionModel({
        Set: "MID",
        Privacy: 0
    });
    await newSession.save();

    console.log(newSession);
}
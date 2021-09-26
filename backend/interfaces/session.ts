import { Schema } from 'mongoose';

interface Session {
    _id: string,
    Set: string,
    Privacy: number
}

const SessionSchema = {
    _id: {
        type: String
    },
    Set: {
        type: String,
        required: true
    },
    Privacy: {
        type: String,
        required: true
    }
}

export { Session, SessionSchema };
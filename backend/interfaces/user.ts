import { Schema } from 'mongoose';

interface User {
    _id: string,
    Name: string
    AccessToken: string
}

const UserSchema = {
    _id: {
        type: String
    },
    Name: {
        type: String,
        required: true
    },
    AccessToken: {
        type: String,
        required: true
    },
}

export { User, UserSchema };
import { Schema } from 'mongoose';

interface Rating {
    _id: string,
    CardId: string,
    User: string,
    Value: string,
    Notes: string,
}

const RatingSchema = {
    _id: {
        type: String
    },
    CardId: {
        type: String,
        required: true
    },
    User: {
        type: String,
        required: true
    },
    Value: {
        type: String,
        required: true
    },
    Notes: {
        type: String,
        required: true
    },
}

export { Rating, RatingSchema };
import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    surname: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    phone: {
        type: Number,
        required: true,
        trim: true,
        unique: true,
    },
    message: {
        type: String,
        required: true,
        trim: true,
    },
    file: {
        type: String,
        required: true,
    },
});

export const Message = mongoose.model('Message', MessageSchema);
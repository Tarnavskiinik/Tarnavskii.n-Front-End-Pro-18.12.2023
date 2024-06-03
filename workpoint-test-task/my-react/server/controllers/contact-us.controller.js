import { Message } from '../models/form-message.model.js';
import { validationResult } from 'express-validator';
export const sendMessage = async (req, res) => {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const file = req.file.buffer.toString();
        const { name, surname, email, phone, message } = req.body;

        const newMessage = new Message({ name, surname, email, phone, message, file });
        await newMessage.save();

        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getUsers = async (req, res) => {
    try {
        const messages = await Message.find();

        if(!messages.length) return res.json({ message: 'Users not found' });

        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
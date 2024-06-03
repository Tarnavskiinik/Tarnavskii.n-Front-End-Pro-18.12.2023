import { body } from 'express-validator';

export const ContactUsValidation = [
    body('name', 'Name is required').isString(),
    body('surname', 'Surname is required').isString(),
    body('email', 'Email is required').isEmail(),
    body('phone', 'Phone number is required').isNumeric(),
    body('message', 'Message is required').isString(),
    body('file'),
]
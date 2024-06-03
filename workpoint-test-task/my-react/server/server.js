import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';

import multer from "multer";
const upload = multer({storage: multer.memoryStorage()});

import * as ContactUsController from './controllers/contact-us.controller.js';
import {ContactUsValidation} from "./validations/contact-us.js";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
  try {
    console.log(`Server is running on port ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log('Connected to MongoDB');
});

app.post('/form/contact-us/send', upload.single('file'), ContactUsValidation, ContactUsController.sendMessage);
app.get('/form/contact-us/get', ContactUsController.getUsers);
import express from 'express';
import { engine } from 'express-handlebars';
import 'dotenv/config';
import cors from 'cors';
import { connectionDB } from './database';
import { router } from './routes';

const app = express();
connectionDB();

app.use(cors());
app.use(express.json());

app.engine('handlebars', engine());

app.use('/api/', router);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Run in Port: ${port}`));
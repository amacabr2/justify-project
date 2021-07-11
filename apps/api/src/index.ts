import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import {justify} from '@justify-project/justify';

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.post('/api/justify', (req: Request, res: Response) => {
    const text = req.body.text;
    if (text?.length) {
        res.status(201).json({
            justify: justify(text.toString())
        });
    }
    res.json({
        error: 'ZUT',
    });
});

app.post('/api/token', (req: Request, res: Response) => {
    res.status(201).json({
        token: 'azerty',
    });
});

app.listen(PORT, () => console.log(`Server start on port ${PORT}!`))


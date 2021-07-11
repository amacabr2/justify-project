import express, {Request, Response, Router} from 'express';
import bodyParser from 'body-parser';
import {justify} from '@justify-project/justify';
import {signToken, verifyToken} from "./auth";

const PORT = 3000;
const app = express();
const justifyRouter: Router = Router();

app.use(bodyParser.json());

justifyRouter.use(verifyToken);
justifyRouter.post('/', (req: Request, res: Response) => {
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
app.use('/api/justify', justifyRouter);

app.post('/api/token', (req: Request, res: Response) => {
    const email = req.body.email;
    const token = signToken(email);
    res.status(201).json({
        token,
    });
});

app.listen(PORT, () => console.log(`Server start on port ${PORT}!`))


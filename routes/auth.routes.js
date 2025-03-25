import { Router } from 'express';


const authRouter = Router();

authRouter.post('/sing-up', (req, res) => res.send({title: 'Sing up'}));
authRouter.post('/sign-in', (req, res) => res.send({title: 'Sing in'}));
authRouter.post('/sing-out', (req, res) => res.send({title: 'Sing out'}));

export default authRouter;
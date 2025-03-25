import { Router } from "express";

const userRouter  = Router();


//GET /users -> get all users[Static parameters]

// GET /users/:id -> get user by id [Dynamic parameters]
userRouter.get('/', (req, res) => res.send({ title: 'Get All users' }));
userRouter.get('/:id', (req, res) => res.send({ title: 'Get user details' }));
userRouter.post('/', (req, res) => res.send({ title: 'CREATE new user' }));userRouter.get('/', (req, res) => res.send({ title: 'Get All users' }));
userRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE user' }));
userRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE user' }));


export default userRouter;

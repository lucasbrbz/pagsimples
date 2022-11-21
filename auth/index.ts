import express, {Request, Response} from 'express';
import basicAuth, {IBasicAuthedRequest} from 'express-basic-auth';
import AuthRouter from './src/AuthRouter';
import {UserInterface} from './src/types';
import UserRepository from './src/UserRepository';

const app = express();

/**
 * Autenticação
 */
const userRepository = new UserRepository();
const authUsers: { [key: string]: string } = {};
userRepository.findAll().map((user: UserInterface) => {
    authUsers[user.cpf] = user.senha;
});
app.use(basicAuth({
    users: authUsers
}));

app.post('/auth', (req: IBasicAuthedRequest | Request, res: Response) => AuthRouter(userRepository, req, res));

app.listen(3000);
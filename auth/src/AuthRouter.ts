import {IBasicAuthedRequest} from 'express-basic-auth';
import {Request, Response} from 'express';
import {UserInterface} from './types';
import UserRepository from './UserRepository';

export default async (userRepository: UserRepository, req: IBasicAuthedRequest | Request, res: Response) => {
    let user: UserInterface | undefined;
    if (('auth' in req) && (req.auth.user)) {
        user = userRepository.findUser(req.auth.user);
    }
    if (!user) {
        res.status(401).send();
        return;
    }
    res.send({
        authenticated: true
    });
};

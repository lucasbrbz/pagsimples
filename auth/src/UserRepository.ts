import {UserInterface} from './types';

class UserRepository {

    /**
     * Users database
     *
     * @type {UserInterface[]}
     */
    #data: UserInterface[] = [
        {
            id: 1,
            cpf: 'admin',
            senha: 'admin'
        },
        {
            id: 2,
            cpf: 'nousers',
            senha: 'nousers'
        },
    ];

    /**
     * @returns {UserInterface[]}
     */
    findAll(): UserInterface[] {
        return this.#data;
    }

    /**
     * @param {string} username
     * @returns {UserInterface|undefined}
     */
    findUser(cpf: string): UserInterface | undefined {
        return this.#data.find((user) => user.cpf === cpf) || undefined;
    }

}

export default UserRepository;

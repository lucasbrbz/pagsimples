import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity("Users")
export class User {
    @PrimaryColumn()
    id?: string;

    @Column()
    nome: string;

    @Column()
    cpf: string;

    @Column()
    senha: string

    @Column()
    saldo: string

    @CreateDateColumn()
    created_at: Date

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }

}
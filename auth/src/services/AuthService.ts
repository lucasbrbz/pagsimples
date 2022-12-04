
import axios from "axios";
import { json } from "express";

interface IRequest{
    cpf: string
    senha: string
}


export class AuthService{

    async execute({  cpf , senha}: IRequest){

    try {
    
    let CPF
    let SENHA 


    const data = await axios(`http://localhost:3000/user/${cpf}`)
    const users = data.data

    await users.map(async(teste: any)=>{
        CPF = teste.cpf;
        SENHA = teste.senha;
    })

    if(CPF === cpf && SENHA === senha){
        let message = 'Usuario logado'
        return message
    } else{
        let message = 'Cpf ou senha incorretos'
        return message
    }
        
    } catch (error) {
        return error
    }
    
       


    

    

}

}
import { getRepository } from "typeorm";
import { UserEntity } from "../entities";
import { RepositoryDB } from "./dataAccesNoSql";


export class RepositorySQL implements RepositoryDB {
    entity;

    constructor (entity: any) {
        this.entity = entity
    }

    async findAll():Promise<any[]>{
    //     const users = await getRepository(UserEntity).find();
    //     return users;
        // console.log('resultado ==> ', await getRepository(UserEntity).find())
        // // return await getRepository(this.entity).find();
        return await getRepository(UserEntity).find();
    }
      
    async findById(id: string):Promise<any> {
        return await this.entity.find();
    }
      
    async save(user: any):Promise<any> {
        return await this.entity.find();
    }
}
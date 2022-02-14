import { RepositoryNoSQL } from '../dataAccess/dataAccesNoSql';
import { modelStudent } from '../models/students/studentSchema';
import { IStudent } from '../models/students/studentInterface';
import { RepositorySQL } from '../dataAccess/dataAccesSql';

import { UserEntity } from '../entities';
import { getRepository } from 'typeorm';

interface IStudentMethods {
    //getAll(): Promise<IStudent[]>;
    getById(id: string): Promise<IStudent>;
    save(user: IStudent): Promise<IStudent>; 
}

export class StudentRepository implements IStudentMethods {
    private entity;
    constructor() {
      this.entity = process.env.TYPE_DB || 'MONGO' === 'MONGO' ? 
        new RepositoryNoSQL(modelStudent) :
        new RepositorySQL(UserEntity);
        // new RepositoryNoSQL(modelStudent); 
    }
  
    async getAll() {
        const users = await getRepository(UserEntity).find();
        return users;
    //   return await this.entity.findAll();
    }
  
    async getById(id: string) {
      return await this.entity.findById(id);
    }
  
    async save(user: any) {
      return await this.entity.save(user);
    }
  
}

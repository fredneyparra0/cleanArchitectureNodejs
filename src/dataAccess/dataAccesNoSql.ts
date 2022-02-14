import { Model } from 'mongoose';

export interface RepositoryDB {
    findAll(): Promise<any[]>;
    findById(id: string): Promise<any>;
    save(id: number): Promise<any>;
}

export class RepositoryNoSQL implements RepositoryDB { // Mongoose
    model;
  
    constructor(model: Model<any>) {
      this.model = model;
    }
    
    async findAll():Promise<any[]>{
      return await this.model.find();
    }
    
    async findById(id: string):Promise<any> {
        return await this.model.findById(id);
      }
    
    async save(user: any):Promise<any> {
      return await this.model.create(user);
    }
    
}
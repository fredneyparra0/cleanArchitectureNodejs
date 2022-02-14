import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { UserEntity } from '../../entities';
import { StudentRepository } from '../../usecases/student';

const RepositoryStudent = new StudentRepository();

async function findAll (req:Request, res:Response) {
    const students = await RepositoryStudent.getAll();
    res.send({data: students});
}

// async function findAll (req:Request, res:Response): Promise<any> {
//     const users = await getRepository(UserEntity).find();
//     res.json(users);
// }



async function findById (req:Request, res:Response) {
    const student = await RepositoryStudent.getById(req.params.id);
    res.send({data: student});
}

async function create (req:Request, res:Response) {
    const studentCreated = await RepositoryStudent.save(req.body);
    res.send({data: studentCreated});
}

export const students = {
    findAll,
    findById,
    create
}
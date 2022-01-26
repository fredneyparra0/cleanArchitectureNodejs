import { Request, Response } from 'express';
import { findAllStudents,createStudent, findStudentById, updateStudentById, deleteStudentById } from '../../usecases/student';

async function findAll (req:Request, res:Response) {
    console.log(req);
    const students = await findAllStudents();
    res.send({data: students});
}

async function findById (req:Request, res:Response) {
    const studentResult = await findStudentById(req.params.id);
    res.send({data: studentResult});
}

async function create (req:Request, res:Response) {
    const studentCreated = await createStudent(req.body);
    res.send({data: studentCreated});
}

async function updateById (req:Request, res:Response) {
    const userUpdated = await updateStudentById(req.params.id, req.body);
    res.send({data: userUpdated});
}

async function deleteById (req:Request, res:Response) {
    const userDeleted = await deleteStudentById(req.params.id);
    res.send({data: userDeleted});
}

export const students = {
    findAll,
    findById,
    create,
    updateById,
    deleteById
}
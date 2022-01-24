import { createOne, findAll, findById, updateOneById, deleteOneById } from '../dataAccess/students';
import { modelStudent } from '../models/teachers/studentSchema';

export async function findAllStudents () {
    return await findAll(modelStudent);
}

export async function createStudent (data: any) {
    const dataResCreateOne = await createOne(modelStudent, data); 
    return dataResCreateOne;
}

export async function findStudentById (id:string) {
    return await findById(modelStudent, id);
}

export async function updateStudentById (id:string, data:any) {
    return await updateOneById(modelStudent, id, data);
}

export async function deleteStudentById (id: string) {
    return await deleteOneById(modelStudent,id);
}
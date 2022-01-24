import { Router } from "express"
export const router = Router();

import { students } from './student';

router
    .get('/student', students.findAll)
    .get('/student/:id', students.findById)

router
    .post('/student', students.create);

router
    .put('/student/:id', students.updateById);

router
    .delete('/student/:id', students.deleteById)
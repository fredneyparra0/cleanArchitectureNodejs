import { Router, Request, Response } from "express"
import { getRepository } from "typeorm";
import { UserEntity } from "../../entities";
export const router = Router();

import { students } from './student';

router.get('/student', students.findAll);

// router.get('/student', async ( req: Request, res: Response ): Promise<any> => {
//     const users = await getRepository(UserEntity).find();
//     res.json(users);
// });

router.get('/student/:id', students.findById)

router.post('/student', students.create);

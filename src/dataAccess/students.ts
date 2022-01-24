import { Model } from "mongoose";

async function findAll (model: Model<any>) {
    return await model.find({});
}

async function findById (model: Model<any>, id: string) {
    return await model.findById(id);
}

async function createOne (model: Model<any>, data: any) {
    const userCreate = new model(data);
    await userCreate.save();
    return userCreate;
}

async function deleteOneById (model: Model<any>, id: string) {
    const studentDeleted = await model.findByIdAndDelete(id);
    return studentDeleted;
}

async function updateOneById (model: Model<any>, id: string, data: any) {
    const result = await model.findByIdAndUpdate(id, data, { new: true });
    return result
}

export {
    findAll,
    findById,
    createOne,
    deleteOneById,
    updateOneById
}
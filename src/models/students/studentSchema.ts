import { Schema, model } from "mongoose";
import { IStudent } from "./studentInterface";

export const SchemaStudent = new Schema<IStudent>({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    }
})

export const modelStudent = model<IStudent>('student', SchemaStudent);
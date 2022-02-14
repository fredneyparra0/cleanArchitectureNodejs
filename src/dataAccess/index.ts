import { connect } from 'mongoose';
// import { mainDb } from '../models/typeormStudents/index';
import { createConnection } from 'typeorm';

const DBURI = process.env.URL_DATA_BASE || 'mongodb://localhost/students';

export async function makeDb () {
    try {
        if(process.env.TYPE_DB === 'MONGO') {
            await connect(DBURI)
            console.log('CONNECT TO DATABASE MONOGODB');
        } else {
            createConnection()
            // console.log('CONNECT TO DATABASE MYSQL');
        }
    } catch (err) {
        console.log('ERROR TO CONNECT ==>',err);
    }
};

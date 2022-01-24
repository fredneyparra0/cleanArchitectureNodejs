import { connect } from 'mongoose';

const DBURI = process.env.URL_DATA_BASE || 'mongodb://localhost/students';

export async function makeDb () {
    try {
        await connect(DBURI)
        console.log('CONNECT TO DATABASE');
    } catch (err) {
        console.log('ERROR TO CONNECT ==>',err);
    }
};
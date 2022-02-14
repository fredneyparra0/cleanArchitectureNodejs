/*import { Schema, model } from "mongoose";


export const SchemaStudent = new Schema({
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
});
const ModelStudent = model('student', SchemaStudent);

export class StudentEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}



interface Student {
  name: string;
  age: number;
}

interface IStudent {
  getByName(name: string): Student;
  getById(id: number): Student;
}

interface ConnectionDb {
    createConnection():any;
}

class ConnectMongo implements ConnectionDb{
    createConnection() {

    }
}

class StudentMongo implements IStudent {

    /*connection;
    constructor (private conectionDb: ConnectionDb) {
        this.connection = conectionDb
    }*/

  /*getByName(name: string) {
    return ModelStudent.find({name});
  }
  
  getById(id: number) {
    return ModelStudent.findById(id);
  }
  
}

class StudentSQLDB implements IStudent {

  getByName(name: string) {
    return StudentEntity.findOne<Student>({name});
  }
  
  getById(id: number) {
    return StudentEntity.findById<Student>(id);
  }
  
}

const TYPE_DB = 'mongo'; // JSON file

const repositryStudent = () => {
  if (TYPE_DB === 'mongo')
    return new StudentMongo();

  if (['mysql', 'postgres', 'sqlserver'].includes(TYPE_DB))
    return new StudentSQLDB();
}

export async function findByName (name: string) {
  const repository: IStudent = repositryStudent();
    return await repository.getByName(name);
}*/





// import { Schema, model } from "mongoose";
// import { IStudent } from "./studentInterface";


// export const SchemaStudent = new Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   phone: {
//     type: Number,
//     required: true
//   },
//   age: {
//     type: Number,
//     required: true
//   },
//   country: {
//     type: String,
//     required: true
//   }
// });
// const ModelStudent = model('student', SchemaStudent);

// export class StudentEntity extends BaseEntity {

//     @PrimaryGeneratedColumn()
//     id: number;

//     @Column()
//     firstName: string;

//     @Column()
//     lastName: string;

//     @Column()
//     age: number;

// }



// interface Student {
//   name: string;
//   age: number;
// }

// interface IStudent {
//   getByName(name: string): Student;
//   getById(id: number): Student;
// }

// class StudentMongo implements IStudent {

//   getByName(name: string) {
//     return ModelStudent.find<Student>({name});
//   }
  
//   getById(id: number) {
//     return ModelStudent.findById<Student>(id);
//   }
  
// }


// interface IConnection {
//     connect():any;
// }

// class ConnectionDb implements IConnection {
//     connect() {
        
//     }
// }


// class StudentSQLDB extends ConnectionDb implements IStudent  {
//   connection;
//   constructor() {
//     super()
//     this.connection = this.connect();
//   }

//   getByName(name: string) {
//     return StudentEntity.findOne<Student>({name});
//   }
  
//   getById(id: number) {
//     return StudentEntity.findById<Student>(id);
//   }
  
// }

// const TYPE_DB = 'mongo'; // JSON file

// const repositryStudent = () => {
//   if (TYPE_DB === 'mongo')
//     return new StudentMongo();

//   if (['mysql', 'postgres', 'sqlserver'].includes(TYPE_DB))
//     return new StudentSQLDB();
// }

// export async function findByName (name: string) {
//   const repository: IStudent = repositryStudent();
//     return await repository.getByName(name);
// }
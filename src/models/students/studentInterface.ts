export interface IStudent {
    id: string | number;
    name: String;
    phone: number;
    age: number;
    country: string;
}

//export type AddUserParams = Omit<IStudent, 'id'>
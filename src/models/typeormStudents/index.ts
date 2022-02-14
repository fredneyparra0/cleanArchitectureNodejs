/*import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, getRepository } from "typeorm";

import { UserEntity } from '../../entities/index';

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name?: string;

    @Column()
    phone?: number;

    @Column()
    age?: number;

    @Column()
    country?: string;

}
export async function mainDb() {

    const getData = await getRepository(UserEntity).find();

    console.log('Data bd ==> ',getData);

    // const user = new User();
    // user.name = "fredney";
    // user.phone = 4120643849;
    // user.age = 25;
    // user.country = 'venezuela';
    // await user.save();
    
    // const allUsers = await User.find();
    // // const firstUser = await User.findOne(1);
    // console.log(user);
    // console.log(allUsers);
    // console.log(firstUser);
    // const timber = await User.findOne({ firstName: "Timber", lastName: "Saw" });
    
    // await timber.remove();
}*/
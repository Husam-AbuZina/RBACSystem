import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinColumn, ManyToMany } from "typeorm"
import { Role } from "./Role"
import { User } from "./User"

@Entity()
export class Profile extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    dateOfBirth: Date

    @OneToOne(() => User)
    user:User;
}
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne, ManyToMany, JoinColumn } from "typeorm"
import { Role } from "./Role"
import { Profile } from "./Profile"

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userName: string

    @Column()
    password: string

    @Column()
    email: string

    @OneToOne(() => Profile )
    @ManyToMany(() => Role)
    @JoinColumn()

    profile:Profile;
    roles:Role[];
}
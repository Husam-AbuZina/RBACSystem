import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToMany } from "typeorm"
import { User } from "./User"
import { Permission } from "./Permission"

@Entity()
export class Role extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Role: string

    @ManyToMany(() => User)
    @ManyToMany(() => Permission)

    users:User[]
    permissions:Permission[]
}
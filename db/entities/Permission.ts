import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToMany } from "typeorm"
import { Profile } from "./Profile"

@Entity()
export class Permission extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Permission: string

    @ManyToMany(() => Profile)

    profiles:Profile[]
}
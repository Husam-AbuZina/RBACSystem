import "reflect-metadata"
import { DataSource } from "typeorm"
import { Permission } from "./entities/Permission";
import { Profile } from "./entities/Profile";
import { User } from "./entities/User"
import { Role } from "./entities/Role"
// import { Photo } from "./entity/Photo"

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 4001,
    username: "root",
    password: "",
    database: "RBAC",
    entities: [User, Role, Profile, Permission], // entities: [Photo],
    synchronize: true,
    logging: false,
})

// to initialize the initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
    .then(() => {
        console.log("Connected to DB!");
    })
    .catch((error: any) => console.log(error))
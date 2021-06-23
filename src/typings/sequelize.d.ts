import { Dialect } from "sequelize/types";

export type SequelizeConfigTypes = {
    username: string,
    password: string,
    database: string,
    host: string,
    port: number,
    dialect: Dialect
}
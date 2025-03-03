import { Sequelize } from "sequelize";

const db = new Sequelize('crud_tugas2', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: "+07:00"
});

export default db;
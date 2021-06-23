// 'use strict';

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;


import fs from 'fs'
import path from 'path'
import { Sequelize, DataTypes, ModelCtor } from 'sequelize'
import { SequelizeConfigTypes } from '../../typings/sequelize'

const config: SequelizeConfigTypes = require('../config/config.json')
const basename: string = path.basename(__filename)
const db: {[key: string]: ModelCtor<any> | Sequelize} = {}

const sequelize: Sequelize = new Sequelize({
    username: config.username,
    password: config.password,
    database: config.database,
    host: config.host,
    port: config.port,
    dialect: config.dialect
})

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts')
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))
        console.log(model);
        
        // db[model.name] = model
        // console.log(db);
    })

db.sequlize = sequelize

export default db
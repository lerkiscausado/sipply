import {DataTypes} from 'sequelize'
import {sequelize} from '../database/conexion.js'


export const Usuarios = sequelize.define('usuarios',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,        
    },
    nickName:{
        type: DataTypes.STRING,
        allowNull: false,
        unique:true  
    },
    nombres:{
        type: DataTypes.STRING,
        allowNull: false,        
    },
    apellidos:{
        type: DataTypes.STRING,
        allowNull:false,
    },    
    correo:{
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    telefono:{
        type: DataTypes.STRING,
        allowNull: true,        
    },
    imagen:{
        type:DataTypes.STRING,
        allowNull:true
    },       
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },        
    estado:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:"ACTIVO"
    },
    ultimoLogin:{
        type:DataTypes.DATE,
        allowNull:false,
    }
});

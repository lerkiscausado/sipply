import {DataTypes} from 'sequelize'
import {sequelize} from '../database/conexion.js'
import {Usuarios} from './Usuarios.js'


export const TipoUsuarios = sequelize.define('tipousuarios',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,        
    },
    tipo:{
        type: DataTypes.STRING,
        allowNull: false,
        unique:true  
    },
    usuario:{
        type:DataTypes.STRING,
        allowNull:false,
    }
});
TipoUsuarios.hasMany(Usuarios,{
    foreignKey: 'idTipoUsuario',
    sourceKey: 'id'
});

Usuarios.belongsTo(TipoUsuarios,{
    foreignKey:'idTipoUsuario',
    targetId: 'id'
})
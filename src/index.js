import app from './app.js'
import {sequelize} from './database/conexion.js'

//import './models/Departamentos.js'
//import './models/Municipios.js'
//import './models/Marcas.js'
//import './models/Presentacion.js'
//import './models/Empresas.js'
//import './models/TipoEmpresa.js'
import './models/TipoUsuarios.js'
import './models/Usuarios.js'

async function main(){
    try {
        await sequelize.sync({alter:true});
        console.log('Connection has been established successfully.');
        app.listen(3000)
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }    
}
main();
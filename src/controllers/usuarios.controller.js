import {Usuarios } from '../models/Usuarios.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'



const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
}
const validatePassword =  async (password,pass) => {
    return await bcrypt.compare(password,pass)    
}
// --- Listar Usuarios ---
export const getUsuarios=async(req,res)=>{
    try {
        const result =await Usuarios.findAll()
        res.json(result)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
};
// --- Guardar Usuarios ---
export const createUsuarios=async(req,res)=>{
    try {
        const {
            nickName,
            nombres,
            apellidos,
            empresa,
            correo,
            telefono,
            imagen,            
            password,
            estado,
            ultimoLogin,
            tipoUsuario            
        }=req.body
        let pass= await encryptPassword(password)
        const newUsers=await Usuarios.create({
            nickName,
            nombres,
            apellidos,
            empresa,
            correo,
            telefono,
            imagen,            
            password: pass,
            estado,
            ultimoLogin,
            tipoUsuario
        });
        res.json(newUsers)        
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
};

export const updateUsuarios=(req,res)=>{
    res.send('Actualizando Usuario') 
};
export const deleteUsuarios=(req,res)=>{
    res.send('Eliminando USuarios')
};
export const login=async (req,res,next)=>{
    try {
        const {nickName, correo, password}=req.body
        const response = await Usuarios.findOne({ where: { correo: correo}})
        if(!response){            
            return res.status(200).send({
                auth:false,
                message:"El Email no existe"
            })
        }        
        if(! await validatePassword(password,response.dataValues.password)){
            return res.status(200).send({
                auth:false,
                message:"Contrase??a invalida"
            })
        }

        const token=jwt.sign({id:response.dataValues.id},"secret_key",{
            expiresIn: 60*60*24
        })
        
        res.send({
            auth: true, 
            token
        })    
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
    
};
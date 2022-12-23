import jwt from 'jsonwebtoken'
export const verifyToken = (req, res, next)=>{
    const token = req.headers['key-token'];
    if (!token){
        return res.status(200).json({
            auth:false,
            message: 'Favor verificar token'
        });
    }
    const decoded=jwt.verify(token,"secret_key")
    req.idUsuario=decoded.id;
    next();
}
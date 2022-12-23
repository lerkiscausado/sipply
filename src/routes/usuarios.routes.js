import {Router} from 'express'
import {getUsuarios , createUsuarios, login} from '../controllers/usuarios.controller.js'
import { verifyToken } from '../controllers/verifyToken.js'

const router = Router()

router.get('/usuarios',verifyToken ,getUsuarios)
router.post('/usuarios',verifyToken, createUsuarios)
router.put('/usuarios/:id')
router.delete('/usuarios/:id')
router.get('/usuarios/:id')
router.post('/login',login)


export default router;
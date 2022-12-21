import {Router} from 'express'
import {getUsuarios , createUsuarios, login} from '../controllers/usuarios.controller.js'

const router = Router()

router.get('/usuarios',getUsuarios)
router.post('/usuarios',createUsuarios)
router.put('/usuarios/:id')
router.delete('/usuarios/:id')
router.get('/usuarios/:id')
router.post('/login',login)


export default router;
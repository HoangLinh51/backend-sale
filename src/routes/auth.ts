import { Router } from 'express';
import { AuthController } from '../controller/auth.controller';

const router = Router();
const authCtr = new AuthController();
router.post('/login', authCtr.login);

export default router;

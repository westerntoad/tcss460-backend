import express, { Router } from 'express';

import { signinRouter } from './login';
import { registerRouter } from './register';
import { changePasswordRouter } from './change-password';

const authRoutes: Router = express.Router();

authRoutes.use(signinRouter, registerRouter, changePasswordRouter);

export { authRoutes };

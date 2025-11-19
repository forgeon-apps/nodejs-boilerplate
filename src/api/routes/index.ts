import { Router } from 'express';
import auth from './auth';
import users from './users';
import playground from './playground';

const router = Router();
auth(router);
users(router);

playground(router);

export default router;

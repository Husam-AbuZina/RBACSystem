import express from 'express';
import permission from './permission';
import user from './user';
import role from './role';

const router = express.Router();

export default (): express.Router => {
  permission(router);
  user(router);
  role(router);

  return router;
};

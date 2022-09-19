import express from 'express';
import Users from '../model/UserModel.js';
import bcrypt from 'bcryptjs';
import { jswToken } from '../ultis.js';
import expressAsyncHandler from 'express-async-handler';
import router from 'express-promise-router';
import data from '../data.js';

const UserRouter = express.Router();
//var UserRouter = router();

UserRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await Users.findOne({ email: req.body.email });

    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user.id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: jswToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: 'Invalid email or password' });
  })
);

export default UserRouter;

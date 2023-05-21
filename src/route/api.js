import express from 'express';
import APIControllers from '../controllers/APIControllers';

let router = express.Router();

const initAPIRoute = (app) => {
  router.get('/users', APIControllers.getAllUser); //method:Get ->read data

  router.post('/create-user', APIControllers.createNewUser); // method:Post -> create data

  router.put('/update-user', APIControllers.updateUser); //methoh:Put -> update data

  router.delete('/delete-user/:id', APIControllers.deleteUser); //methoh:delete -> delete data

  return app.use('/api/v1', router);
};

export default initAPIRoute;

import express from 'express';

const router = express.Router();

// healthcheck
router.get('/ping', (req, res, next) => {
  res.send('pong').status(200);
});



export default router;

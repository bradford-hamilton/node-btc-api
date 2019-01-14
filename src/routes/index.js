import express from 'express';
import btcRPC from '../lib/btcRPC';

const router = express.Router();

// healthcheck
router.get('/ping', (req, res, next) => {
  res.send('pong').status(200);
});

router.get('/info', async (req, res, next) => {
  const method = 'getblockchaininfo';

  try {
    const result = await btcRPC.query(method);
    res.json(result);
  } catch (err) {
    res.json({ message: `Error with RPC call ${method}: ${err}` });
  }
});

export default router;

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

router.get('/block/:blockHash', async (req, res, next) => {
  const method = 'getblock';
  const verbosity = req.query.verbosity ? parseInt(req.query.verbosity, 10) : 1;
  const params = [req.params.blockHash, verbosity];

  try {
    const result = await btcRPC.query(method, params);
    res.json(result);
  } catch (err) {
    res.json({ message: `Error with RPC call ${method}: ${err}` });
  }
});

export default router;

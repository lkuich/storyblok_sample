import { Router } from 'express';

const router = Router();

router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from example route!' });
});

router.post('/data', (req, res) => {
  const data = req.body;
  res.json({ received: data });
});

export default router;

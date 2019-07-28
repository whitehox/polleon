import express from 'express';
const router = express.Router();

import { createEvent, getEvents, createUser } from '../controllers';

/* GET home page. */
router.get('/', function(
  _req: express.Request,
  res: express.Response,
  _next: express.NextFunction
) {
  res.render('index', { title: 'Express' });
});

router.get('/events', async (_req: express.Request, res: express.Response) => {
  const data = await getEvents();
  try {
    res.status(200).json({ data });
  } catch {
    res.status(404).json({ error: 'An erro occured' });
  }
});

router.post('/events', async (req: express.Request, res: express.Response) => {
  const data = await createEvent(req.body);
  try {
    res.status(200).json({ data });
  } catch {
    res.status(400).json({ error: 'An error occured' });
  }
});

router.post('/users', async (req: express.Request, res: express.Response) => {
  const data = await createUser(req.body);
  try {
    res.status(200).json({ data });
  } catch {
    res.status(400).json({ message: 'An error occured while creating user' });
  }
});

export default router;

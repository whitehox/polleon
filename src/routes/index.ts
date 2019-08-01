import express from 'express';
const router = express.Router();
import { addEvent, loginUser } from '../controllers';

/* GET home page. */
router.get('/', function(
  _req: express.Request,
  res: express.Response,
  _next: express.NextFunction
) {
  res.render('index', { title: 'Express' });
});

router.post('/event', (req: express.Request, res: express.Response) => {
  const data = addEvent(req.body);
  try {
    res.status(200).json({ data });
  } catch {
    res
      .status(400)
      .json({ errorMessage: 'An error occured. Please try again' });
  }
});
router.post(
  '/users/login',
  async (req: express.Request, res: express.Response) => {
    try {
      const data = await loginUser({
        email: req.body.email,
        password: req.body.password
      });
      if (data.isUser === true) {
        res.status(200).json({ token: data.token });
        return;
      }
      res.status(400).json({ errorMessage: data });
    } catch {
      res
        .status(400)
        .json({ errorMessage: 'Your username or password is incorrect' });
    }
  }
);

export default router;

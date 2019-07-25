import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function(
  _req: express.Request,
  res: express.Response,
  _next: express.NextFunction
) {
  res.send('respond with a resource');
});

export default router;

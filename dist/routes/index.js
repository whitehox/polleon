"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const controllers_1 = require("../controllers");
/* GET home page. */
router.get('/', function (_req, res, _next) {
    res.render('index', { title: 'Express' });
});
router.get('/events', async (_req, res) => {
    const data = await controllers_1.getEvents();
    try {
        res.status(200).json({ data });
    }
    catch (_a) {
        res.status(404).json({ error: 'An erro occured' });
    }
});
router.post('/events', async (req, res) => {
    const data = await controllers_1.createEvent(req.body);
    try {
        res.status(200).json({ data });
    }
    catch (_a) {
        res.status(400).json({ error: 'An error occured' });
    }
});
router.post('/users', async (req, res) => {
    const data = await controllers_1.createUser(req.body);
    try {
        res.status(200).json({ data });
    }
    catch (_a) {
        res.status(400).json({ message: 'An error occured while creating user' });
    }
});
exports.default = router;
//# sourceMappingURL=index.js.map
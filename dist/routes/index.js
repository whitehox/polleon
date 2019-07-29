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
router.post('/event', (req, res) => {
    const data = controllers_1.addEvent(req.body);
    try {
        res.status(200).json({ data });
    }
    catch (_a) {
        res.status(400).json({ error: 'An error occured' });
    }
});
exports.default = router;
//# sourceMappingURL=index.js.map
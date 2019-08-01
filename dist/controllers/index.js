"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __importDefault(require("../models/events"));
const users_1 = __importDefault(require("../models/users"));
const password_hash_1 = __importDefault(require("password-hash"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function getEvents() {
    return events_1.default.find();
}
exports.getEvents = getEvents;
function addEvent(eventInput) {
    const event = new events_1.default(eventInput);
    return event.save();
}
exports.addEvent = addEvent;
function getUsers() {
    return users_1.default.find();
}
exports.getUsers = getUsers;
function getSingleUser(email) {
    return users_1.default.findOne(email);
}
exports.getSingleUser = getSingleUser;
async function addUser(userInput) {
    const dbCheck = await users_1.default.findOne({ email: userInput.email });
    if (dbCheck) {
        throw new Error('This user already exist');
    }
    const user = new users_1.default(userInput);
    return user.save();
}
exports.addUser = addUser;
async function loginUser(userInput) {
    const user = await getSingleUser({ email: userInput.email });
    let isUser;
    // let errorMessage;
    //@ts-ignore
    if (!password_hash_1.default.verify(userInput.password, user.password)) {
        // errorMessage = 'The user name or password is incorrect';
        throw new Error('The user name or password is incorrect');
    }
    else {
        isUser = true;
    }
    const token = jsonwebtoken_1.default.sign({ email: userInput.email }, 'privateKey', {
        expiresIn: '1d'
    });
    return { isUser, token };
}
exports.loginUser = loginUser;
//# sourceMappingURL=index.js.map
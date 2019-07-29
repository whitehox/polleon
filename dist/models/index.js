"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const eventSchema = new mongoose_1.default.Schema({
    title: String,
    description: String,
    category: String
});
const userSchema = new mongoose_1.default.Schema({
    firstname: String,
    lastname: String,
    username: String,
    email: String,
    password: String,
    profilePicture: String
});
const EventSchema = mongoose_1.default.model('Event', eventSchema);
exports.EventSchema = EventSchema;
const UserSchema = mongoose_1.default.model('User', userSchema);
exports.UserSchema = UserSchema;
//# sourceMappingURL=index.js.map
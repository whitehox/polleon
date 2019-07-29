"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    username: String,
    firstname: String,
    lastname: String,
    company_name: String,
    profile_image: String,
    email: String,
    phone_number: String,
    password: String,
    account_type: String,
    created_at: String
});
exports.default = mongoose_1.default.model('User', UserSchema);
//# sourceMappingURL=users.js.map
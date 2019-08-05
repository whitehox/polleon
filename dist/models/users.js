"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true },
    company_name: String,
    profile_image: String,
    email: { type: String, required: true },
    phone_number: String,
    password: { type: String, required: true },
    isPolleon: String,
    created_at: { type: Date, default: new Date() }
}, {
    versionKey: false
});
exports.default = mongoose_1.default.model('User', UserSchema);
//# sourceMappingURL=users.js.map
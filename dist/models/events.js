"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const EventSchema = new mongoose_1.default.Schema({
    title: String,
    description: String,
    start_date: Date,
    end_date: Date,
    votes_per_contestant: Number,
    event_type: String,
    category_id: String,
    created_at: Date
});
exports.default = mongoose_1.default.model('Event', EventSchema);
//# sourceMappingURL=events.js.map
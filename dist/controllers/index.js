"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __importDefault(require("../models/events"));
function getEvents() {
    return events_1.default.find();
}
exports.getEvents = getEvents;
//# sourceMappingURL=index.js.map
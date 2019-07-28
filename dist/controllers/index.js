"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../models/index");
function createEvent(eventBody) {
    const data = new index_1.EventSchema(eventBody);
    return data.save();
}
exports.createEvent = createEvent;
function getEvents() {
    return index_1.EventSchema.find();
}
exports.getEvents = getEvents;
function createUser(userBody) {
    const data = new index_1.UserSchema(userBody);
    return data.save();
}
exports.createUser = createUser;
//# sourceMappingURL=index.js.map
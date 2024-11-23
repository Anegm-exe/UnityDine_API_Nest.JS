"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    contact: { type: String, required: false },
    dateOfBirth: { type: Date, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: Boolean, required: true, },
}, {
    timestamps: true,
});
exports.User = (0, mongoose_1.model)('User', exports.UserSchema);
//# sourceMappingURL=user.schema.js.map
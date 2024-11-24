"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seating = exports.SeatingSchema = void 0;
const mongoose_1 = require("mongoose");
exports.SeatingSchema = new mongoose_1.Schema({
    _Tid: { type: Number, required: true },
    Capacity: { type: Number, required: true },
    Available: { type: Boolean, required: true }
}, {
    timestamps: true,
});
exports.Seating = (0, mongoose_1.model)('Seating', exports.SeatingSchema);
//# sourceMappingURL=Seating.schema.js.map
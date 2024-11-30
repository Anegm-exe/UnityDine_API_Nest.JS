"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const table_schema_1 = require("../schemas/table.schema");
const table_service_1 = require("./table.service");
const table_controller_1 = require("./table.controller");
let TableModule = class TableModule {
};
exports.TableModule = TableModule;
exports.TableModule = TableModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: table_schema_1.Table.name,
                    schema: table_schema_1.TableSchema
                }
            ]),
        ],
        controllers: [table_controller_1.TableController],
        providers: [table_service_1.TableService]
    })
], TableModule);
//# sourceMappingURL=table.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const products_module_1 = require("./products/products.module");
const common_module_1 = require("./common/common.module");
const seed_module_1 = require("./seed/seed.module");
const files_module_1 = require("./files/files.module");
const auth_module_1 = require("./auth/auth.module");
const messages_ws_module_1 = require("./messages-ws/messages-ws.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                ssl: process.env.STAGE === 'prod',
                extra: {
                    ssl: process.env.STAGE === 'prod'
                        ? { rejectUnauthorized: false }
                        : null,
                },
                type: 'postgres',
                host: process.env.DB_HOST,
                port: +process.env.DB_PORT,
                database: process.env.DB_NAME,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                autoLoadEntities: true,
                synchronize: true,
            }),
            products_module_1.ProductsModule,
            common_module_1.CommonModule,
            seed_module_1.SeedModule,
            files_module_1.FilesModule,
            auth_module_1.AuthModule,
            messages_ws_module_1.MessagesWsModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
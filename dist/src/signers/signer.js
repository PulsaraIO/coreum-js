"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _Signer_signerId;
Object.defineProperty(exports, "__esModule", { value: true });
class Signer {
    constructor() {
        _Signer_signerId.set(this, "default");
    }
    sign() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented");
        });
    }
    requestConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented");
        });
    }
}
_Signer_signerId = new WeakMap();
exports.default = Signer;

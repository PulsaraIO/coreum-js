"use strict";
var _Signer_signerId;
Object.defineProperty(exports, "__esModule", { value: true });
class Signer {
    constructor() {
        _Signer_signerId.set(this, "default");
    }
    async sign() {
        throw new Error("Method not implemented");
    }
    async requestConnection() {
        throw new Error("Method not implemented");
    }
}
_Signer_signerId = new WeakMap();
exports.default = Signer;

"use strict";
var _Signer_signerId;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signer = void 0;
class Signer {
    constructor() {
        _Signer_signerId.set(this, "default");
    }
    get address() {
        return this._address;
    }
    async sign(...args) {
        throw new Error("Method not implemented");
    }
    async requestConnection() {
        throw new Error("Method not implemented");
    }
}
exports.Signer = Signer;
_Signer_signerId = new WeakMap();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NpZ25lcnMvc2lnbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFhLE1BQU07SUFBbkI7UUFDRSwyQkFBb0IsU0FBUyxFQUFDO0lBY2hDLENBQUM7SUFYQyxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFTO1FBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsS0FBSyxDQUFDLGlCQUFpQjtRQUNyQixNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNGO0FBZkQsd0JBZUMifQ==
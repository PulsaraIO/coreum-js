"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakingParams = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "coreum.customparams.v1";
function createBaseStakingParams() {
    return { minSelfDelegation: "" };
}
exports.StakingParams = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.minSelfDelegation !== "") {
            writer.uint32(10).string(message.minSelfDelegation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStakingParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.minSelfDelegation = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { minSelfDelegation: isSet(object.minSelfDelegation) ? String(object.minSelfDelegation) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.minSelfDelegation !== undefined && (obj.minSelfDelegation = message.minSelfDelegation);
        return obj;
    },
    create(base) {
        return exports.StakingParams.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStakingParams();
        message.minSelfDelegation = (_a = object.minSelfDelegation) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvcmV1bS9jdXN0b21wYXJhbXMvdjEvcGFyYW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixnREFBd0I7QUFDeEIsaUVBQXFDO0FBRXhCLFFBQUEsZUFBZSxHQUFHLHdCQUF3QixDQUFDO0FBUXhELFNBQVMsdUJBQXVCO0lBQzlCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUNuQyxDQUFDO0FBRVksUUFBQSxhQUFhLEdBQUc7SUFDM0IsTUFBTSxDQUFDLE9BQXNCLEVBQUUsU0FBcUIsaUJBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1FBQ3JFLElBQUksT0FBTyxDQUFDLGlCQUFpQixLQUFLLEVBQUUsRUFBRTtZQUNwQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNyRDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBOEIsRUFBRSxNQUFlO1FBQ3BELE1BQU0sTUFBTSxHQUFHLEtBQUssWUFBWSxpQkFBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxpQkFBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUUsSUFBSSxHQUFHLEdBQUcsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDbEUsTUFBTSxPQUFPLEdBQUcsdUJBQXVCLEVBQUUsQ0FBQztRQUMxQyxPQUFPLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFO1lBQ3ZCLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QixRQUFRLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pCLEtBQUssQ0FBQztvQkFDSixJQUFJLEdBQUcsSUFBSSxFQUFFLEVBQUU7d0JBQ2IsTUFBTTtxQkFDUDtvQkFFRCxPQUFPLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUM1QyxTQUFTO2FBQ1o7WUFDRCxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFO2dCQUM5QixNQUFNO2FBQ1A7WUFDRCxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMxQjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBVztRQUNsQixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ3hHLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBc0I7UUFDM0IsTUFBTSxHQUFHLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxpQkFBaUIsS0FBSyxTQUFTLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0YsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsTUFBTSxDQUFpRCxJQUFRO1FBQzdELE9BQU8scUJBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxhQUFKLElBQUksY0FBSixJQUFJLEdBQUksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELFdBQVcsQ0FBaUQsTUFBUzs7UUFDbkUsTUFBTSxPQUFPLEdBQUcsdUJBQXVCLEVBQUUsQ0FBQztRQUMxQyxPQUFPLENBQUMsaUJBQWlCLEdBQUcsTUFBQSxNQUFNLENBQUMsaUJBQWlCLG1DQUFJLEVBQUUsQ0FBQztRQUMzRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0NBQ0YsQ0FBQztBQWNGLElBQUksaUJBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLGNBQUksRUFBRTtJQUMxQixpQkFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsY0FBVyxDQUFDO0lBQzVCLGlCQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7Q0FDakI7QUFFRCxTQUFTLEtBQUssQ0FBQyxLQUFVO0lBQ3ZCLE9BQU8sS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxDQUFDO0FBQy9DLENBQUMifQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLeapOfflineSigner = exports.connectLeap = void 0;
const connectLeap = async (config) => {
    try {
        if (window.leap) {
            await window.leap.enable(config.chain_id);
        }
        else {
            throw "Please install the Leap Wallet Extension";
        }
    }
    catch (e) {
        throw {
            thrower: "connectLeap",
            error: e === "Error: Please install the Leap Wallet Extension"
                ? "Extension not installed."
                : e,
        };
    }
};
exports.connectLeap = connectLeap;
const getLeapOfflineSigner = async (chain_id) => {
    return window.leap.getOfflineSignerAuto(chain_id);
};
exports.getLeapOfflineSigner = getLeapOfflineSigner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9sZWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlPLE1BQU0sV0FBVyxHQUFHLEtBQUssRUFBRSxNQUEyQixFQUFFLEVBQUU7SUFDL0QsSUFBSTtRQUNGLElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtZQUNmLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDTCxNQUFNLDBDQUEwQyxDQUFDO1NBQ2xEO0tBQ0Y7SUFBQyxPQUFPLENBQU0sRUFBRTtRQUNmLE1BQU07WUFDSixPQUFPLEVBQUUsYUFBYTtZQUN0QixLQUFLLEVBQ0gsQ0FBQyxLQUFLLGlEQUFpRDtnQkFDckQsQ0FBQyxDQUFDLDBCQUEwQjtnQkFDNUIsQ0FBQyxDQUFDLENBQUM7U0FDUixDQUFDO0tBQ0g7QUFDSCxDQUFDLENBQUM7QUFoQlcsUUFBQSxXQUFXLGVBZ0J0QjtBQUVLLE1BQU0sb0JBQW9CLEdBQUcsS0FBSyxFQUFFLFFBQWdCLEVBQUUsRUFBRTtJQUM3RCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDcEQsQ0FBQyxDQUFDO0FBRlcsUUFBQSxvQkFBb0Isd0JBRS9CIn0=
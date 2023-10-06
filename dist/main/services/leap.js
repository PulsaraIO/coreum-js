"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLeapOfflineSigner = exports.connectLeap = void 0;
const connectLeap = async (config) => {
    try {
        if (window.leap) {
            await window.leap.enable(config.chain_id);
        }
        else {
            throw "Extension not installed.";
        }
    }
    catch (e) {
        throw {
            thrower: "connectLeap",
            error: e,
        };
    }
};
exports.connectLeap = connectLeap;
const getLeapOfflineSigner = async (chain_id) => {
    return window.leap.getOfflineSignerAuto(chain_id);
};
exports.getLeapOfflineSigner = getLeapOfflineSigner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9sZWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlPLE1BQU0sV0FBVyxHQUFHLEtBQUssRUFBRSxNQUEyQixFQUFFLEVBQUU7SUFDL0QsSUFBSTtRQUNGLElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtZQUNmLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDTCxNQUFNLDBCQUEwQixDQUFDO1NBQ2xDO0tBQ0Y7SUFBQyxPQUFPLENBQU0sRUFBRTtRQUNmLE1BQU07WUFDSixPQUFPLEVBQUUsYUFBYTtZQUN0QixLQUFLLEVBQUUsQ0FBQztTQUNULENBQUM7S0FDSDtBQUNILENBQUMsQ0FBQztBQWJXLFFBQUEsV0FBVyxlQWF0QjtBQUVLLE1BQU0sb0JBQW9CLEdBQUcsS0FBSyxFQUFFLFFBQWdCLEVBQUUsRUFBRTtJQUM3RCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDcEQsQ0FBQyxDQUFDO0FBRlcsUUFBQSxvQkFBb0Isd0JBRS9CIn0=
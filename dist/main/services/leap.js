"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLeapOfflineSigner = exports.connectLeap = void 0;
const connectLeap = async (config) => {
    try {
        if (window.leap) {
            await window.leap.enable(config.chain_id);
        }
        else {
            throw {
                thrower: "_connectLeap",
                error: new Error("Please install the Leap Wallet Extension"),
            };
        }
    }
    catch (e) {
        throw {
            thrower: e.thrower || "connectLeap",
            error: e,
        };
    }
};
exports.connectLeap = connectLeap;
const getLeapOfflineSigner = async (chain_id) => {
    return window.leap.getOfflineSignerAuto(chain_id);
};
exports.getLeapOfflineSigner = getLeapOfflineSigner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9sZWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlPLE1BQU0sV0FBVyxHQUFHLEtBQUssRUFBRSxNQUEyQixFQUFFLEVBQUU7SUFDL0QsSUFBSTtRQUNGLElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtZQUNmLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDTCxNQUFNO2dCQUNKLE9BQU8sRUFBRSxjQUFjO2dCQUN2QixLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsMENBQTBDLENBQUM7YUFDN0QsQ0FBQztTQUNIO0tBQ0Y7SUFBQyxPQUFPLENBQU0sRUFBRTtRQUNmLE1BQU07WUFDSixPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxhQUFhO1lBQ25DLEtBQUssRUFBRSxDQUFDO1NBQ1QsQ0FBQztLQUNIO0FBQ0gsQ0FBQyxDQUFDO0FBaEJXLFFBQUEsV0FBVyxlQWdCdEI7QUFFSyxNQUFNLG9CQUFvQixHQUFHLEtBQUssRUFBRSxRQUFnQixFQUFFLEVBQUU7SUFDN0QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQztBQUZXLFFBQUEsb0JBQW9CLHdCQUUvQiJ9
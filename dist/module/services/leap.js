export const connectLeap = async (config) => {
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
export const getLeapOfflineSigner = async (chain_id) => {
    return window.leap.getOfflineSignerAuto(chain_id);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9sZWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxLQUFLLEVBQUUsTUFBMkIsRUFBRSxFQUFFO0lBQy9ELElBQUk7UUFDRixJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDZixNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0wsTUFBTSwwQkFBMEIsQ0FBQztTQUNsQztLQUNGO0lBQUMsT0FBTyxDQUFNLEVBQUU7UUFDZixNQUFNO1lBQ0osT0FBTyxFQUFFLGFBQWE7WUFDdEIsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDO0tBQ0g7QUFDSCxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRyxLQUFLLEVBQUUsUUFBZ0IsRUFBRSxFQUFFO0lBQzdELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNwRCxDQUFDLENBQUMifQ==
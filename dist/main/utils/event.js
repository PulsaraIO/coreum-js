"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSubscriptionEvents = void 0;
/**
 *
 * @param events Subscription events
 * @returns A well-defined object showcasing all the events of a subscription
 */
const parseSubscriptionEvents = (events) => {
    let parsedEvents = {};
    Object.entries(events).map((entry) => {
        const [key, value] = entry;
        const splitKey = key.split(".");
        const last = splitKey.pop();
        const property = splitKey.join(".");
        parsedEvents[property] = parsedEvents[property] || {};
        try {
            parsedEvents[property][last] = JSON.parse(value[0]);
        }
        catch (e) {
            parsedEvents[property][last] = value[0];
        }
    });
    return parsedEvents;
};
exports.parseSubscriptionEvents = parseSubscriptionEvents;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUE7Ozs7R0FJRztBQUNJLE1BQU0sdUJBQXVCLEdBQUcsQ0FBQyxNQUEwQixFQUFFLEVBQUU7SUFDcEUsSUFBSSxZQUFZLEdBQVEsRUFBRSxDQUFDO0lBRTNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDbkMsTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7UUFFM0IsTUFBTSxRQUFRLEdBQWEsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFZLENBQUM7UUFDdEMsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVwQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV0RCxJQUFJO1lBQ0YsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckQ7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sWUFBWSxDQUFDO0FBQ3RCLENBQUMsQ0FBQztBQXBCVyxRQUFBLHVCQUF1QiwyQkFvQmxDIn0=
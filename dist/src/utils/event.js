export const parseSubscriptionEvents = (events) => {
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

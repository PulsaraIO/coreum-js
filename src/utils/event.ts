interface SubscriptionEvents {
  [key: string]: string[];
}

export const parseSubscriptionEvents = (events: SubscriptionEvents) => {
  let parsedEvents: any = {};

  Object.entries(events).map((entry) => {
    const [key, value] = entry;

    const splitKey: string[] = key.split(".");
    const last = splitKey.pop() as string;
    const property = splitKey.join(".");

    parsedEvents[property] = parsedEvents[property] || {};

    try {
      parsedEvents[property][last] = JSON.parse(value[0]);
    } catch (e) {
      parsedEvents[property][last] = value[0];
    }
  });

  return parsedEvents;
};

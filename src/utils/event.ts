interface SubscriptionEvents {
  [key: string]: string[];
}

/**
 * @param events Subscription events
 * @returns A well-defined object showcasing all the events of a subscription
 */
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

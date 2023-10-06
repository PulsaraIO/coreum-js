import { CoreumNetworkConfig } from "../types";

declare let window: any;

export const connectLeap = async (config: CoreumNetworkConfig) => {
  try {
    if (window.leap) {
      await window.leap.enable(config.chain_id);
    } else {
      throw "Please install the Leap Wallet Extension";
    }
  } catch (e: any) {
    throw {
      thrower: "connectLeap",
      error:
        e === "Error: Please install the Leap Wallet Extension"
          ? "Extension not installed."
          : e,
    };
  }
};

export const getLeapOfflineSigner = async (chain_id: string) => {
  return window.leap.getOfflineSignerAuto(chain_id);
};

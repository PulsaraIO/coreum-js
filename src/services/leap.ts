import { CoreumNetworkConfig } from "../types";

declare let window: any;

export const connectLeap = async (config: CoreumNetworkConfig) => {
  try {
    if (window.leap) {
      await window.leap.enable(config.chain_id);
    } else {
      throw "Extension not installed.";
    }
  } catch (e: any) {
    throw {
      thrower: "connectLeap",
      error: e,
    };
  }
};

export const getLeapOfflineSigner = async (chain_id: string) => {
  return window.leap.getOfflineSignerAuto(chain_id);
};

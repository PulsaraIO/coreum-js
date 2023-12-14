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

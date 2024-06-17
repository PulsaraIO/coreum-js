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

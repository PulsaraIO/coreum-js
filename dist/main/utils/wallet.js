"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateWalletFromMnemonic = exports.isValidCoreumAddress = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const crypto_1 = require("@cosmjs/crypto");
const bech32_1 = require("bech32");
const coreum_1 = require("../types/coreum");
/**
 *
 * @param address String representing an address on the Coreum blockchain
 * @returns A boolean defining if the passed address is a valid address on the Coreum Blockchain
 */
const isValidCoreumAddress = (address) => {
    try {
        const { prefix = null } = bech32_1.bech32.decode(address);
        if (prefix !== coreum_1.CoreumPrefixes.MAINNET &&
            prefix !== coreum_1.CoreumPrefixes.DEVNET &&
            prefix !== coreum_1.CoreumPrefixes.TESTNET)
            return false;
        return true;
    }
    catch (e) {
        console.log(e);
        return false;
    }
};
exports.isValidCoreumAddress = isValidCoreumAddress;
/**
 *
 * @param mnemonic Mnemonic words of a Cosmos SDK wallet
 * @param prefix The prefix to use - "core" | "testcore" | "devcore"
 * @returns A wallet with the default hdPath for the Coreum Blockchain, and with the selected prefix.
 */
const generateWalletFromMnemonic = async (mnemonic, prefix) => {
    const hdPath = "m/44'/990'/0'/0/0";
    const wallet = await proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
        prefix,
        hdPaths: [(0, crypto_1.stringToPath)(hdPath)],
    });
    return wallet;
};
exports.generateWalletFromMnemonic = generateWalletFromMnemonic;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL3dhbGxldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5REFHK0I7QUFDL0IsMkNBQThDO0FBQzlDLG1DQUFnQztBQUNoQyw0Q0FBaUQ7QUFFakQ7Ozs7R0FJRztBQUNJLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBRTtJQUN0RCxJQUFJO1FBQ0YsTUFBTSxFQUFFLE1BQU0sR0FBRyxJQUFJLEVBQUUsR0FBRyxlQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWpELElBQ0UsTUFBTSxLQUFLLHVCQUFjLENBQUMsT0FBTztZQUNqQyxNQUFNLEtBQUssdUJBQWMsQ0FBQyxNQUFNO1lBQ2hDLE1BQU0sS0FBSyx1QkFBYyxDQUFDLE9BQU87WUFFakMsT0FBTyxLQUFLLENBQUM7UUFFZixPQUFPLElBQUksQ0FBQztLQUNiO0lBQUMsT0FBTyxDQUFNLEVBQUU7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsT0FBTyxLQUFLLENBQUM7S0FDZDtBQUNILENBQUMsQ0FBQztBQWhCVyxRQUFBLG9CQUFvQix3QkFnQi9CO0FBRUY7Ozs7O0dBS0c7QUFDSSxNQUFNLDBCQUEwQixHQUFHLEtBQUssRUFDN0MsUUFBZ0IsRUFDaEIsTUFBc0IsRUFDUSxFQUFFO0lBQ2hDLE1BQU0sTUFBTSxHQUFHLG1CQUFtQixDQUFDO0lBRW5DLE1BQU0sTUFBTSxHQUFHLE1BQU0sdUNBQXVCLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTtRQUNsRSxNQUFNO1FBQ04sT0FBTyxFQUFFLENBQUMsSUFBQSxxQkFBWSxFQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2hDLENBQUMsQ0FBQztJQUVILE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQVpXLFFBQUEsMEJBQTBCLDhCQVlyQyJ9
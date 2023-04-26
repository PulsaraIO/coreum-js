"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateWalletFromMnemonic = exports.generateKey = exports.isValidCoreumAddress = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const crypto_1 = require("@cosmjs/crypto");
const bech32_1 = require("bech32");
const coreum_1 = require("../types/coreum");
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
const generateKey = async () => {
    const wallet = await proto_signing_1.DirectSecp256k1HdWallet.generate(24);
    return wallet.mnemonic;
};
exports.generateKey = generateKey;
const generateWalletFromMnemonic = async (mnemonic) => {
    const hdPath = "m/44'/990'/0'/0/0";
    const prefix = "testcore";
    const wallet = await proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
        prefix,
        hdPaths: [(0, crypto_1.stringToPath)(hdPath)],
    });
    return wallet;
};
exports.generateWalletFromMnemonic = generateWalletFromMnemonic;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL3dhbGxldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5REFHK0I7QUFDL0IsMkNBQThDO0FBQzlDLG1DQUFnQztBQUNoQyw0Q0FBaUQ7QUFFMUMsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLE9BQWUsRUFBRSxFQUFFO0lBQ3RELElBQUk7UUFDRixNQUFNLEVBQUUsTUFBTSxHQUFHLElBQUksRUFBRSxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFakQsSUFDRSxNQUFNLEtBQUssdUJBQWMsQ0FBQyxPQUFPO1lBQ2pDLE1BQU0sS0FBSyx1QkFBYyxDQUFDLE1BQU07WUFDaEMsTUFBTSxLQUFLLHVCQUFjLENBQUMsT0FBTztZQUVqQyxPQUFPLEtBQUssQ0FBQztRQUVmLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFBQyxPQUFPLENBQU0sRUFBRTtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0gsQ0FBQyxDQUFDO0FBaEJXLFFBQUEsb0JBQW9CLHdCQWdCL0I7QUFFSyxNQUFNLFdBQVcsR0FBRyxLQUFLLElBQXFCLEVBQUU7SUFDckQsTUFBTSxNQUFNLEdBQ1YsTUFBTSx1Q0FBdUIsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFN0MsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDO0FBQ3pCLENBQUMsQ0FBQztBQUxXLFFBQUEsV0FBVyxlQUt0QjtBQUVLLE1BQU0sMEJBQTBCLEdBQUcsS0FBSyxFQUM3QyxRQUFnQixFQUNjLEVBQUU7SUFDaEMsTUFBTSxNQUFNLEdBQUcsbUJBQW1CLENBQUM7SUFDbkMsTUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDO0lBRTFCLE1BQU0sTUFBTSxHQUFHLE1BQU0sdUNBQXVCLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTtRQUNsRSxNQUFNO1FBQ04sT0FBTyxFQUFFLENBQUMsSUFBQSxxQkFBWSxFQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2hDLENBQUMsQ0FBQztJQUVILE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQVpXLFFBQUEsMEJBQTBCLDhCQVlyQyJ9
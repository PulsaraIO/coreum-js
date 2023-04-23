import { DirectSecp256k1HdWallet, } from "@cosmjs/proto-signing";
import { stringToPath } from "@cosmjs/crypto";
import { bech32 } from "bech32";
export var CoreumPrefixes;
(function (CoreumPrefixes) {
    CoreumPrefixes["MAINNET"] = "core";
    CoreumPrefixes["TESTNET"] = "testcore";
    CoreumPrefixes["DEVNET"] = "devcore";
})(CoreumPrefixes || (CoreumPrefixes = {}));
export const isValidCoreumAddress = (address) => {
    try {
        const { prefix = null } = bech32.decode(address);
        if (prefix !== CoreumPrefixes.MAINNET &&
            prefix !== CoreumPrefixes.DEVNET &&
            prefix !== CoreumPrefixes.TESTNET)
            return false;
        return true;
    }
    catch (e) {
        console.log(e);
        return false;
    }
};
export const generateKey = async () => {
    const wallet = await DirectSecp256k1HdWallet.generate(24);
    return wallet.mnemonic;
};
export const generateWalletFromMnemonic = async (mnemonic) => {
    const hdPath = "m/44'/990'/0'/0/0";
    const prefix = "testcore";
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
        prefix,
        hdPaths: [stringToPath(hdPath)],
    });
    return wallet;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL3dhbGxldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEdBRXhCLE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFaEMsTUFBTSxDQUFOLElBQVksY0FJWDtBQUpELFdBQVksY0FBYztJQUN4QixrQ0FBZ0IsQ0FBQTtJQUNoQixzQ0FBb0IsQ0FBQTtJQUNwQixvQ0FBa0IsQ0FBQTtBQUNwQixDQUFDLEVBSlcsY0FBYyxLQUFkLGNBQWMsUUFJekI7QUFFRCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLE9BQWUsRUFBRSxFQUFFO0lBQ3RELElBQUk7UUFDRixNQUFNLEVBQUUsTUFBTSxHQUFHLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFakQsSUFDRSxNQUFNLEtBQUssY0FBYyxDQUFDLE9BQU87WUFDakMsTUFBTSxLQUFLLGNBQWMsQ0FBQyxNQUFNO1lBQ2hDLE1BQU0sS0FBSyxjQUFjLENBQUMsT0FBTztZQUVqQyxPQUFPLEtBQUssQ0FBQztRQUVmLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFBQyxPQUFPLENBQU0sRUFBRTtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLEtBQUssSUFBcUIsRUFBRTtJQUNyRCxNQUFNLE1BQU0sR0FDVixNQUFNLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUU3QyxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUM7QUFDekIsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sMEJBQTBCLEdBQUcsS0FBSyxFQUM3QyxRQUFnQixFQUNjLEVBQUU7SUFDaEMsTUFBTSxNQUFNLEdBQUcsbUJBQW1CLENBQUM7SUFDbkMsTUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDO0lBRTFCLE1BQU0sTUFBTSxHQUFHLE1BQU0sdUJBQXVCLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTtRQUNsRSxNQUFNO1FBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2hDLENBQUMsQ0FBQztJQUVILE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQyJ9
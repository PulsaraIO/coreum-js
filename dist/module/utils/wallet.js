import { DirectSecp256k1HdWallet, } from "@cosmjs/proto-signing";
import { stringToPath } from "@cosmjs/crypto";
import { bech32 } from "bech32";
import { CoreumPrefixes } from "../types/coreum";
/**
 *
 * @param address String representing an address on the Coreum blockchain
 * @returns A boolean defining if the passed address is a valid address on the Coreum Blockchain
 */
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
/**
 *
 * @param mnemonic Mnemonic words of a Cosmos SDK wallet
 * @param prefix The prefix to use - "core" | "testcore" | "devcore"
 * @returns A wallet with the default hdPath for the Coreum Blockchain, and with the selected prefix.
 */
export const generateWalletFromMnemonic = async (mnemonic, prefix) => {
    const hdPath = "m/44'/990'/0'/0/0";
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
        prefix,
        hdPaths: [stringToPath(hdPath)],
    });
    return wallet;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL3dhbGxldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEdBRXhCLE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDaEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWpEOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLE9BQWUsRUFBRSxFQUFFO0lBQ3RELElBQUk7UUFDRixNQUFNLEVBQUUsTUFBTSxHQUFHLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFakQsSUFDRSxNQUFNLEtBQUssY0FBYyxDQUFDLE9BQU87WUFDakMsTUFBTSxLQUFLLGNBQWMsQ0FBQyxNQUFNO1lBQ2hDLE1BQU0sS0FBSyxjQUFjLENBQUMsT0FBTztZQUVqQyxPQUFPLEtBQUssQ0FBQztRQUVmLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFBQyxPQUFPLENBQU0sRUFBRTtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0gsQ0FBQyxDQUFDO0FBRUY7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQUMsTUFBTSwwQkFBMEIsR0FBRyxLQUFLLEVBQzdDLFFBQWdCLEVBQ2hCLE1BQXNCLEVBQ1EsRUFBRTtJQUNoQyxNQUFNLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQztJQUVuQyxNQUFNLE1BQU0sR0FBRyxNQUFNLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7UUFDbEUsTUFBTTtRQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNoQyxDQUFDLENBQUM7SUFFSCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUMifQ==
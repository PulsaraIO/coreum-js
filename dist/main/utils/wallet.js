"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMultisigFromPubkeys = exports.generateWalletFromMnemonic = exports.isValidCoreumAddress = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const crypto_1 = require("@cosmjs/crypto");
const bech32_1 = require("bech32");
const coreum_1 = require("../types/coreum");
const amino_1 = require("@cosmjs/amino");
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
const generateMultisigFromPubkeys = (pubkeys, threshold, prefix) => {
    const secpPubkeys = pubkeys.map((p) => {
        return {
            type: "tendermint/PubKeySecp256k1",
            value: p,
        };
    });
    const multisigPubkey = (0, amino_1.createMultisigThresholdPubkey)(secpPubkeys, threshold);
    return (0, amino_1.pubkeyToAddress)(multisigPubkey, prefix);
};
exports.generateMultisigFromPubkeys = generateMultisigFromPubkeys;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL3dhbGxldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5REFHK0I7QUFDL0IsMkNBQThDO0FBQzlDLG1DQUFnQztBQUNoQyw0Q0FBaUQ7QUFDakQseUNBQStFO0FBRS9FOzs7O0dBSUc7QUFDSSxNQUFNLG9CQUFvQixHQUFHLENBQUMsT0FBZSxFQUFFLEVBQUU7SUFDdEQsSUFBSTtRQUNGLE1BQU0sRUFBRSxNQUFNLEdBQUcsSUFBSSxFQUFFLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVqRCxJQUNFLE1BQU0sS0FBSyx1QkFBYyxDQUFDLE9BQU87WUFDakMsTUFBTSxLQUFLLHVCQUFjLENBQUMsTUFBTTtZQUNoQyxNQUFNLEtBQUssdUJBQWMsQ0FBQyxPQUFPO1lBRWpDLE9BQU8sS0FBSyxDQUFDO1FBRWYsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUFDLE9BQU8sQ0FBTSxFQUFFO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7QUFDSCxDQUFDLENBQUM7QUFoQlcsUUFBQSxvQkFBb0Isd0JBZ0IvQjtBQUVGOzs7OztHQUtHO0FBQ0ksTUFBTSwwQkFBMEIsR0FBRyxLQUFLLEVBQzdDLFFBQWdCLEVBQ2hCLE1BQXNCLEVBQ1EsRUFBRTtJQUNoQyxNQUFNLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQztJQUVuQyxNQUFNLE1BQU0sR0FBRyxNQUFNLHVDQUF1QixDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7UUFDbEUsTUFBTTtRQUNOLE9BQU8sRUFBRSxDQUFDLElBQUEscUJBQVksRUFBQyxNQUFNLENBQUMsQ0FBQztLQUNoQyxDQUFDLENBQUM7SUFFSCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7QUFaVyxRQUFBLDBCQUEwQiw4QkFZckM7QUFFSyxNQUFNLDJCQUEyQixHQUFHLENBQ3pDLE9BQWlCLEVBQ2pCLFNBQWlCLEVBQ2pCLE1BQWMsRUFDZCxFQUFFO0lBQ0YsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ3BDLE9BQU87WUFDTCxJQUFJLEVBQUUsNEJBQTRCO1lBQ2xDLEtBQUssRUFBRSxDQUFDO1NBQ1QsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxjQUFjLEdBQUcsSUFBQSxxQ0FBNkIsRUFBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDN0UsT0FBTyxJQUFBLHVCQUFlLEVBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2pELENBQUMsQ0FBQztBQWRXLFFBQUEsMkJBQTJCLCtCQWN0QyJ9
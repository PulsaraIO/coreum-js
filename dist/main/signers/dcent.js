"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _DCentSigner_signerID, _DCentSigner_path;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DCentSigner = void 0;
const signing_1 = require("../types/signing");
const signer_1 = require("./signer");
const any_1 = require("../google/protobuf/any");
const tx_1 = require("cosmjs-types/cosmos/tx/v1beta1/tx");
const signing_2 = require("cosmjs-types/cosmos/tx/signing/v1beta1/signing");
const stargate_1 = require("@cosmjs/stargate");
const DcentWebConnector = require("dcent-web-connector");
class DCentSigner extends signer_1.Signer {
    constructor() {
        super(...arguments);
        _DCentSigner_signerID.set(this, signing_1.WalletMethods.DCENT);
        _DCentSigner_path.set(this, void 0);
    }
    async sign(msgs, options) {
        const { sequence, gasPrice, chainId, accountNumber, memo = undefined, } = options;
        try {
            const pubKeyAny = any_1.Any.fromPartial({
                typeUrl: "/cosmos.crypto.secp256k1.PubKey",
                value: Buffer.from("0a21ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", "hex"), //temp value
            });
            const txBody = await this._getTxBody(msgs, memo);
            const signerInfo = tx_1.SignerInfo.fromPartial({
                publicKey: pubKeyAny,
                modeInfo: { single: { mode: signing_2.SignMode.SIGN_MODE_DIRECT } },
                sequence,
            });
            const amount = (0, stargate_1.calculateFee)(200000, gasPrice);
            let fee = tx_1.Fee.fromPartial({
                amount: amount.amount,
                gasLimit: 200000,
            });
            const authInfo = tx_1.AuthInfo.fromPartial({ signerInfos: [signerInfo], fee });
            const bodyBytes = tx_1.TxBody.encode(txBody).finish();
            const authInfoBytes = tx_1.AuthInfo.encode(authInfo).finish();
            const signDoc = tx_1.SignDoc.fromPartial({
                bodyBytes,
                authInfoBytes,
                chainId,
                accountNumber,
            });
            let signMessage = tx_1.SignDoc.encode(signDoc).finish();
            const sigHash = Buffer.from(signMessage).toString("hex");
            const txJSON = {
                coinType: DcentWebConnector.coinType.COREUM,
                sigHash,
                path: __classPrivateFieldGet(this, _DCentSigner_path, "f"),
                decimals: "6",
                fee: String(amount.gas),
                symbol: "CORE",
            };
            console.log(txJSON);
            const result = await DcentWebConnector.getCosmosSignedTransaction(txJSON);
            console.log(result);
        }
        catch (e) {
            console.log(e);
        }
    }
    async requestConnection() {
        try {
            const info = await DcentWebConnector.getAccountInfo();
            const coreum_account = info.body.parameter.account.find((acc) => acc.coin_name === "COREUM");
            if (typeof coreum_account === "undefined") {
                throw new Error("Ripple Account Not Found.");
            }
            __classPrivateFieldSet(this, _DCentSigner_path, coreum_account.address_path, "f");
            const coreum_address = await DcentWebConnector.getAddress("coreum", __classPrivateFieldGet(this, _DCentSigner_path, "f"));
            if (coreum_address.body.parameter.address) {
                DcentWebConnector.popupWindowClose();
            }
            this._address = coreum_address.body.parameter.address;
            return {
                address: coreum_address.body.parameter.address,
            };
        }
        catch (e) {
            console.log(e);
            throw {
                thrower: e.thrower || "requestConnection: Dcent",
                error: e,
            };
        }
    }
    async _getTxBody(msgs, memo) {
        const msgsAny = msgs.map((m) => {
            return any_1.Any.fromPartial({
                typeUrl: m.typeUrl,
                value: m.value,
            });
        });
        return tx_1.TxBody.fromPartial({
            messages: msgsAny,
            memo,
        });
    }
}
exports.DCentSigner = DCentSigner;
_DCentSigner_signerID = new WeakMap(), _DCentSigner_path = new WeakMap();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGNlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2lnbmVycy9kY2VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSw4Q0FBaUQ7QUFDakQscUNBQWtDO0FBQ2xDLGdEQUE2QztBQUM3QywwREFNMkM7QUFDM0MsNEVBQTBFO0FBQzFFLCtDQUEwRDtBQUUxRCxNQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBU3pELE1BQWEsV0FBWSxTQUFRLGVBQU07SUFBdkM7O1FBQ0UsZ0NBQVksdUJBQWEsQ0FBQyxLQUFLLEVBQUM7UUFDaEMsb0NBQWM7SUFvSGhCLENBQUM7SUFsSEMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUE2QixFQUFFLE9BQXlCO1FBQ2pFLE1BQU0sRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUNSLE9BQU8sRUFDUCxhQUFhLEVBQ2IsSUFBSSxHQUFHLFNBQVMsR0FDakIsR0FBRyxPQUFPLENBQUM7UUFFWixJQUFJO1lBQ0YsTUFBTSxTQUFTLEdBQUcsU0FBRyxDQUFDLFdBQVcsQ0FBQztnQkFDaEMsT0FBTyxFQUFFLGlDQUFpQztnQkFDMUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQ2hCLHdFQUF3RSxFQUN4RSxLQUFLLENBQ04sRUFBRSxZQUFZO2FBQ2hCLENBQUMsQ0FBQztZQUNILE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFakQsTUFBTSxVQUFVLEdBQUcsZUFBVSxDQUFDLFdBQVcsQ0FBQztnQkFDeEMsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxrQkFBUSxDQUFDLGdCQUFnQixFQUFFLEVBQUU7Z0JBQ3pELFFBQVE7YUFDVCxDQUFDLENBQUM7WUFFSCxNQUFNLE1BQU0sR0FBUSxJQUFB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
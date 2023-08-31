import { WalletMethods } from "../types/signing";
import { Signer } from "./signer";
import { Any } from "../google/protobuf/any";
import { AuthInfo, Fee, SignDoc, SignerInfo, TxBody, } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { SignMode } from "cosmjs-types/cosmos/tx/signing/v1beta1/signing";
import { calculateFee } from "@cosmjs/stargate";
const DcentWebConnector = require("dcent-web-connector");
export class DCentSigner extends Signer {
    #signerID = WalletMethods.DCENT;
    #path;
    async sign(msgs, options) {
        const { sequence, gasPrice, chainId, accountNumber, memo = undefined, } = options;
        try {
            const pubKeyAny = Any.fromPartial({
                typeUrl: "/cosmos.crypto.secp256k1.PubKey",
                value: Buffer.from("0a21ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", "hex"), //temp value
            });
            const txBody = await this._getTxBody(msgs, memo);
            const signerInfo = SignerInfo.fromPartial({
                publicKey: pubKeyAny,
                modeInfo: { single: { mode: SignMode.SIGN_MODE_DIRECT } },
                sequence,
            });
            const amount = calculateFee(200000, gasPrice);
            let fee = Fee.fromPartial({
                amount: amount.amount,
                gasLimit: 200000,
            });
            const authInfo = AuthInfo.fromPartial({ signerInfos: [signerInfo], fee });
            const bodyBytes = TxBody.encode(txBody).finish();
            const authInfoBytes = AuthInfo.encode(authInfo).finish();
            const signDoc = SignDoc.fromPartial({
                bodyBytes,
                authInfoBytes,
                chainId,
                accountNumber,
            });
            let signMessage = SignDoc.encode(signDoc).finish();
            const sigHash = Buffer.from(signMessage).toString("hex");
            const txJSON = {
                coinType: DcentWebConnector.coinType.COREUM,
                sigHash,
                path: this.#path,
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
            this.#path = coreum_account.address_path;
            const coreum_address = await DcentWebConnector.getAddress("coreum", this.#path);
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
            return Any.fromPartial({
                typeUrl: m.typeUrl,
                value: m.value,
            });
        });
        return TxBody.fromPartial({
            messages: msgsAny,
            memo,
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGNlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2lnbmVycy9kY2VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNsQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0MsT0FBTyxFQUNMLFFBQVEsRUFDUixHQUFHLEVBQ0gsT0FBTyxFQUNQLFVBQVUsRUFDVixNQUFNLEdBQ1AsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDMUUsT0FBTyxFQUFZLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTFELE1BQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFTekQsTUFBTSxPQUFPLFdBQVksU0FBUSxNQUFNO0lBQ3JDLFNBQVMsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ2hDLEtBQUssQ0FBUztJQUVkLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBNkIsRUFBRSxPQUF5QjtRQUNqRSxNQUFNLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFDUixPQUFPLEVBQ1AsYUFBYSxFQUNiLElBQUksR0FBRyxTQUFTLEdBQ2pCLEdBQUcsT0FBTyxDQUFDO1FBRVosSUFBSTtZQUNGLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7Z0JBQ2hDLE9BQU8sRUFBRSxpQ0FBaUM7Z0JBQzFDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUNoQix3RUFBd0UsRUFDeEUsS0FBSyxDQUNOLEVBQUUsWUFBWTthQUNoQixDQUFDLENBQUM7WUFDSCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FB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
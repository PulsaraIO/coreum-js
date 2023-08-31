import { EncodeObject } from "@cosmjs/proto-signing";
import { WalletMethods } from "../types/signing";
import { Signer } from "./signer";
import { Any } from "../google/protobuf/any";
import {
  AuthInfo,
  Fee,
  SignDoc,
  SignerInfo,
  TxBody,
} from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { SignMode } from "cosmjs-types/cosmos/tx/signing/v1beta1/signing";
import { GasPrice, calculateFee } from "@cosmjs/stargate";

const DcentWebConnector = require("dcent-web-connector");

interface DcentSignOptions {
  sequence: number;
  accountNumber: number;
  gasPrice: string | GasPrice;
  chainId: string;
  memo?: string;
}
export class DCentSigner extends Signer {
  #signerID = WalletMethods.DCENT;
  #path: string;

  async sign(msgs: readonly EncodeObject[], options: DcentSignOptions) {
    const {
      sequence,
      gasPrice,
      chainId,
      accountNumber,
      memo = undefined,
    } = options;

    try {
      const pubKeyAny = Any.fromPartial({
        typeUrl: "/cosmos.crypto.secp256k1.PubKey",
        value: Buffer.from(
          "0a21ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
          "hex"
        ), //temp value
      });
      const txBody = await this._getTxBody(msgs, memo);

      const signerInfo = SignerInfo.fromPartial({
        publicKey: pubKeyAny,
        modeInfo: { single: { mode: SignMode.SIGN_MODE_DIRECT } },
        sequence,
      });

      const amount: any = calculateFee(200000, gasPrice);

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
    } catch (e) {
      console.log(e);
    }
  }

  async requestConnection(): Promise<{ address: string }> {
    try {
      const info = await DcentWebConnector.getAccountInfo();

      const coreum_account = info.body.parameter.account.find(
        (acc: { coin_name: string }) => acc.coin_name === "COREUM"
      );

      if (typeof coreum_account === "undefined") {
        throw new Error("Ripple Account Not Found.");
      }

      this.#path = coreum_account.address_path;

      const coreum_address = await DcentWebConnector.getAddress(
        "coreum",
        this.#path
      );

      if (coreum_address.body.parameter.address) {
        DcentWebConnector.popupWindowClose();
      }

      this._address = coreum_address.body.parameter.address;

      return {
        address: coreum_address.body.parameter.address,
      };
    } catch (e: any) {
      console.log(e);
      throw {
        thrower: e.thrower || "requestConnection: Dcent",
        error: e,
      };
    }
  }

  private async _getTxBody(msgs: readonly EncodeObject[], memo?: string) {
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

import { GeneratedType } from "@cosmjs/proto-signing";
import {
  MsgStoreCode,
  MsgInstantiateContract,
  MsgInstantiateContract2,
  MsgExecuteContract,
  MsgMigrateContract,
  MsgUpdateAdmin,
  MsgClearAdmin,
  MsgUpdateInstantiateConfig,
  MsgUpdateParams,
  MsgSudoContract,
  MsgPinCodes,
  MsgUnpinCodes,
  MsgStoreAndInstantiateContract,
  Exact,
  DeepPartial,
} from "./tx";
import { MsgIBCSend, MsgIBCCloseChannel } from "./ibc";

const baseUrl = "/cosmwasm.wasm.v1.";

export const cosmwasmRegistry: ReadonlyArray<[string, any]> = [
  [baseUrl + "MsgStoreAndInstantiateContract", MsgStoreAndInstantiateContract],
  [baseUrl + "MsgUpdateParams", MsgUpdateParams],
  [baseUrl + "MsgSudoContract", MsgSudoContract],
  [baseUrl + "MsgUnpinCodes", MsgUnpinCodes],
  [baseUrl + "MsgPinCodes", MsgPinCodes],
  [baseUrl + "MsgStoreCode", MsgStoreCode],
  [baseUrl + "MsgInstantiateContract", MsgInstantiateContract],
  [baseUrl + "MsgInstantiateContract2", MsgInstantiateContract2],
  [baseUrl + "MsgExecuteContract", MsgExecuteContract],
  [baseUrl + "MsgMigrateContract", MsgMigrateContract],
  [baseUrl + "MsgUpdateAdmin", MsgUpdateAdmin],
  [baseUrl + "MsgClearAdmin", MsgClearAdmin],
  [baseUrl + "MsgUpdateInstantiateConfig", MsgUpdateInstantiateConfig],
  [baseUrl + "MsgIBCSend", MsgIBCSend],
  [baseUrl + "MsgIBCCloseChannel", MsgIBCCloseChannel],
];

/**
 * Transaction Module for the IBC Module (wasm)
 */
export namespace IBC {
  /** MsgIBCSend message creator
   *
   * @param object Represents the properties available for this MsgIBCSend message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const IBCSend = function (object: MsgIBCSend) {
    return {
      typeUrl: baseUrl + "MsgIBCSend",
      value: MsgIBCSend.fromPartial(object),
    };
  };
  /** MsgIBCCloseChannel message creator
   *
   * @param object Represents the properties available for this MsgIBCCloseChannel message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const IBCCloseChannel = function (object: MsgIBCCloseChannel) {
    return {
      typeUrl: baseUrl + "MsgIBCCloseChannel",
      value: MsgIBCCloseChannel.fromPartial(object),
    };
  };
}

/**
 * Transaction Module for the Smart Contracts Module (wasm)
 */
export namespace CosmWasm {
  /** MsgStoreAndInstantiateContract message creator
   *
   * @param object Represents the properties available for this MsgStoreAndInstantiateContract message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const StoreAndInstantiateContract = function (
    object: MsgStoreAndInstantiateContract
  ) {
    return {
      typeUrl: baseUrl + "MsgStoreAndInstantiateContract",
      value: MsgStoreAndInstantiateContract.fromPartial(object),
    };
  };

  /** MsgUnpinCodes message creator
   *
   * @param object Represents the properties available for this MsgUnpinCodes message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const UnpinCodes = function (object: MsgUnpinCodes) {
    return {
      typeUrl: baseUrl + "MsgUnpinCodes",
      value: MsgUnpinCodes.fromPartial(object),
    };
  };

  /** MsgPinCodes message creator
   *
   * @param object Represents the properties available for this MsgPinCodes message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const PinCodes = function (object: MsgPinCodes) {
    return {
      typeUrl: baseUrl + "MsgPinCodes",
      value: MsgPinCodes.fromPartial(object),
    };
  };

  /** MsgSudoContract message creator
   *
   * @param object Represents the properties available for this MsgSudoContract message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const SudoContract = function (object: MsgSudoContract) {
    return {
      typeUrl: baseUrl + "MsgSudoContract",
      value: MsgSudoContract.fromPartial(object),
    };
  };

  /** MsgUpdateParams message creator
   *
   * @param object Represents the properties available for this MsgUpdateParams message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const UpdateParams = function (object: MsgUpdateParams) {
    return {
      typeUrl: baseUrl + "MsgUpdateParams",
      value: MsgUpdateParams.fromPartial(object),
    };
  };

  /** MsgUpdateInstantiateConfig message creator
   *
   * @param object Represents the properties available for this MsgUpdateInstantiateConfig message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const UpdateInstantiateConfig = function (
    object: MsgUpdateInstantiateConfig
  ) {
    return {
      typeUrl: baseUrl + "MsgUpdateInstantiateConfig",
      value: MsgUpdateInstantiateConfig.fromPartial(object),
    };
  };

  /**
   * MsgStoreCode message creator
   * Submit Wasm code to the system
   *
   * @param object Represents the properties available for this MsgStoreCode message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const StoreCode = function (object: MsgStoreCode) {
    return {
      typeUrl: baseUrl + "MsgStoreCode",
      value: MsgStoreCode.fromPartial(object),
    };
  };

  /**
   * MsgInstantiateContract message creator
   * Creates a new smart contract instance for the given code id.
   *
   * @param object Represents the properties available for this MsgInstantiateContract message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const InstantiateContract = function (object: MsgInstantiateContract) {
    return {
      typeUrl: baseUrl + "MsgInstantiateContract",
      value: MsgInstantiateContract.fromPartial(object),
    };
  };

  /** MsgInstantiateContract2 message creator
   * Creates a new smart contract instance for the given code id with a predictable address
   *
   * @param object Represents the properties available for this MsgInstantiateContract2 message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const InstantiateContract2 = function (
    object: MsgInstantiateContract2
  ) {
    return {
      typeUrl: baseUrl + "MsgInstantiateContract2",
      value: MsgInstantiateContract2.fromPartial(object),
    };
  };

  /** MsgClearAdmin message creator
   * Removes any admin stored for a smart contract
   *
   * @param object Represents the properties available for this MsgClearAdmin message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const ClearAdmin = function (object: MsgClearAdmin) {
    return {
      typeUrl: baseUrl + "MsgClearAdmin",
      value: MsgClearAdmin.fromPartial(object),
    };
  };

  /** MsgUpdateAdmin message creator
   * Sets a new admin for a smart contract
   *
   * @param object Represents the properties available for this MsgUpdateAdmin message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const UpdateAdmin = function (object: MsgUpdateAdmin) {
    return {
      typeUrl: baseUrl + "MsgUpdateAdmin",
      value: MsgUpdateAdmin.fromPartial(object),
    };
  };

  /** MsgExecuteContract message creator
   * Submits the given message data to a smart contract
   *
   * @param object Represents the properties available for this MsgExecuteContract message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const ExecuteContract = function (object: MsgExecuteContract) {
    return {
      typeUrl: baseUrl + "MsgExecuteContract",
      value: MsgExecuteContract.fromPartial(object),
    };
  };

  /** MsgMigrateContract message creator
   *  Runs a code upgrade/ downgrade for a smart contract
   *
   * @param object Represents the properties available for this MsgMigrateContract message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const MigrateContract = function (object: MsgMigrateContract) {
    return {
      typeUrl: baseUrl + "MsgMigrateContract",
      value: MsgMigrateContract.fromPartial(object),
    };
  };
}

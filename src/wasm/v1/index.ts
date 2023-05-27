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

const baseUrl = "/cosmwasm.wasm.v1.";

/**
 * Transaction Module for the Smart Contracts Module (wasm)
 */
export namespace CosmWasm {
  /** MsgStoreAndInstantiateContract message creator
   *
   * @param object Represents the properties available for this MsgStoreAndInstantiateContract message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const StoreAndInstantiateContract = function <
    I extends Exact<DeepPartial<MsgStoreAndInstantiateContract>, I>
  >(object: I) {
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
  export const UnpinCodes = function <
    I extends Exact<DeepPartial<MsgUnpinCodes>, I>
  >(object: I) {
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
  export const PinCodes = function <
    I extends Exact<DeepPartial<MsgPinCodes>, I>
  >(object: I) {
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
  export const SudoContract = function <
    I extends Exact<DeepPartial<MsgSudoContract>, I>
  >(object: I) {
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
  export const UpdateParams = function <
    I extends Exact<DeepPartial<MsgUpdateParams>, I>
  >(object: I) {
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
  export const UpdateInstantiateConfig = function <
    I extends Exact<DeepPartial<MsgUpdateInstantiateConfig>, I>
  >(object: I) {
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
  export const StoreCode = function <
    I extends Exact<DeepPartial<MsgStoreCode>, I>
  >(object: I) {
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
  export const InstantiateContract = function <
    I extends Exact<DeepPartial<MsgInstantiateContract>, I>
  >(object: I) {
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
  export const InstantiateContract2 = function <
    I extends Exact<DeepPartial<MsgInstantiateContract2>, I>
  >(object: I) {
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
  export const ClearAdmin = function <
    I extends Exact<DeepPartial<MsgClearAdmin>, I>
  >(object: I) {
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
  export const UpdateAdmin = function <
    I extends Exact<DeepPartial<MsgUpdateAdmin>, I>
  >(object: I) {
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
  export const ExecuteContract = function <
    I extends Exact<DeepPartial<MsgExecuteContract>, I>
  >(object: I) {
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
  export const MigrateContract = function <
    I extends Exact<DeepPartial<MsgMigrateContract>, I>
  >(object: I) {
    return {
      typeUrl: baseUrl + "MsgMigrateContract",
      value: MsgMigrateContract.fromPartial(object),
    };
  };
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace WorkerRegistration {
  export type WorkerStruct = {
    account: PromiseOrValue<string>;
    libp2pPubKey: PromiseOrValue<BytesLike>;
    bond: PromiseOrValue<BigNumberish>;
    registeredAt: PromiseOrValue<BigNumberish>;
    deregisteredAt: PromiseOrValue<BigNumberish>;
  };

  export type WorkerStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    account: string;
    libp2pPubKey: string;
    bond: BigNumber;
    registeredAt: BigNumber;
    deregisteredAt: BigNumber;
  };
}

export interface WorkerRegistrationInterface extends utils.Interface {
  functions: {
    "BOND_AMOUNT()": FunctionFragment;
    "activeWorkerIds(uint256)": FunctionFragment;
    "deregister()": FunctionFragment;
    "epochLength()": FunctionFragment;
    "getActiveWorkers()": FunctionFragment;
    "lockPeriod()": FunctionFragment;
    "register(bytes32)": FunctionFragment;
    "tSQD()": FunctionFragment;
    "withdraw()": FunctionFragment;
    "workerIds(address)": FunctionFragment;
    "workers(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "BOND_AMOUNT"
      | "activeWorkerIds"
      | "deregister"
      | "epochLength"
      | "getActiveWorkers"
      | "lockPeriod"
      | "register"
      | "tSQD"
      | "withdraw"
      | "workerIds"
      | "workers"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "BOND_AMOUNT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "activeWorkerIds",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "deregister",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "epochLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getActiveWorkers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lockPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "tSQD", values?: undefined): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "workerIds",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "workers",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "BOND_AMOUNT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "activeWorkerIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deregister", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "epochLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getActiveWorkers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lockPeriod", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tSQD", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "workerIds", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "workers", data: BytesLike): Result;

  events: {
    "WorkerDeregistered(uint256,address)": EventFragment;
    "WorkerRegistered(uint256,address,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "WorkerDeregistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WorkerRegistered"): EventFragment;
}

export interface WorkerDeregisteredEventObject {
  workerId: BigNumber;
  account: string;
}
export type WorkerDeregisteredEvent = TypedEvent<
  [BigNumber, string],
  WorkerDeregisteredEventObject
>;

export type WorkerDeregisteredEventFilter =
  TypedEventFilter<WorkerDeregisteredEvent>;

export interface WorkerRegisteredEventObject {
  workerId: BigNumber;
  account: string;
  libp2pPubKey: string;
}
export type WorkerRegisteredEvent = TypedEvent<
  [BigNumber, string, string],
  WorkerRegisteredEventObject
>;

export type WorkerRegisteredEventFilter =
  TypedEventFilter<WorkerRegisteredEvent>;

export interface WorkerRegistration extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WorkerRegistrationInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    BOND_AMOUNT(overrides?: CallOverrides): Promise<[BigNumber]>;

    activeWorkerIds(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    deregister(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    epochLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    getActiveWorkers(
      overrides?: CallOverrides
    ): Promise<[WorkerRegistration.WorkerStructOutput[]]>;

    lockPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    register(
      libp2pPubKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tSQD(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    workerIds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    workers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, BigNumber] & {
        account: string;
        libp2pPubKey: string;
        bond: BigNumber;
        registeredAt: BigNumber;
        deregisteredAt: BigNumber;
      }
    >;
  };

  BOND_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

  activeWorkerIds(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  deregister(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  epochLength(overrides?: CallOverrides): Promise<BigNumber>;

  getActiveWorkers(
    overrides?: CallOverrides
  ): Promise<WorkerRegistration.WorkerStructOutput[]>;

  lockPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  register(
    libp2pPubKey: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tSQD(overrides?: CallOverrides): Promise<string>;

  withdraw(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  workerIds(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  workers(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, BigNumber, BigNumber] & {
      account: string;
      libp2pPubKey: string;
      bond: BigNumber;
      registeredAt: BigNumber;
      deregisteredAt: BigNumber;
    }
  >;

  callStatic: {
    BOND_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    activeWorkerIds(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deregister(overrides?: CallOverrides): Promise<void>;

    epochLength(overrides?: CallOverrides): Promise<BigNumber>;

    getActiveWorkers(
      overrides?: CallOverrides
    ): Promise<WorkerRegistration.WorkerStructOutput[]>;

    lockPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    register(
      libp2pPubKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    tSQD(overrides?: CallOverrides): Promise<string>;

    withdraw(overrides?: CallOverrides): Promise<void>;

    workerIds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    workers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, BigNumber] & {
        account: string;
        libp2pPubKey: string;
        bond: BigNumber;
        registeredAt: BigNumber;
        deregisteredAt: BigNumber;
      }
    >;
  };

  filters: {
    "WorkerDeregistered(uint256,address)"(
      workerId?: PromiseOrValue<BigNumberish> | null,
      account?: PromiseOrValue<string> | null
    ): WorkerDeregisteredEventFilter;
    WorkerDeregistered(
      workerId?: PromiseOrValue<BigNumberish> | null,
      account?: PromiseOrValue<string> | null
    ): WorkerDeregisteredEventFilter;

    "WorkerRegistered(uint256,address,bytes32)"(
      workerId?: PromiseOrValue<BigNumberish> | null,
      account?: PromiseOrValue<string> | null,
      libp2pPubKey?: null
    ): WorkerRegisteredEventFilter;
    WorkerRegistered(
      workerId?: PromiseOrValue<BigNumberish> | null,
      account?: PromiseOrValue<string> | null,
      libp2pPubKey?: null
    ): WorkerRegisteredEventFilter;
  };

  estimateGas: {
    BOND_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    activeWorkerIds(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deregister(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    epochLength(overrides?: CallOverrides): Promise<BigNumber>;

    getActiveWorkers(overrides?: CallOverrides): Promise<BigNumber>;

    lockPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    register(
      libp2pPubKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tSQD(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    workerIds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    workers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BOND_AMOUNT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    activeWorkerIds(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deregister(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    epochLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getActiveWorkers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lockPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    register(
      libp2pPubKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tSQD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    workerIds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    workers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
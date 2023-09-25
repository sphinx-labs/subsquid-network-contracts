// SPDX-License-Identifier: Unlicensed
pragma solidity 0.8.18;

interface IWorkerRegistration {
  function getActiveWorkerCount() external view returns (uint);
  function effectiveTVL() external view returns (uint);
  function getOwnedWorkers(address who) external view returns (uint[] memory);
}

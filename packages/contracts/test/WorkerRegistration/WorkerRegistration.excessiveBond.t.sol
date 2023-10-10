// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.18;

import "./WorkerRegistration.t.sol";

contract WorkerRegistrationExcessiveBondTest is WorkerRegistrationTest {
  function test_ReturnExcessiveBondReturnsExcessiveBondForWorker() public {
    workerRegistration.register(workerId);
    jumpEpoch();
    assertEq(workerRegistration.effectiveTVL(), 100);
    networkController.setBondAmount(60);
    assertEq(workerRegistration.effectiveTVL(), 60);
    uint256 balanceBefore = token.balanceOf(address(creator));
    workerRegistration.returnExcessiveBond(workerId);
    assertEq(token.balanceOf(address(creator)), balanceBefore + 40);
  }

  function test_CannotReturnSameBondTwice() public {
    workerRegistration.register(workerId);
    jumpEpoch();
    networkController.setBondAmount(60);
    workerRegistration.returnExcessiveBond(workerId);
    uint256 balanceBefore = token.balanceOf(address(creator));
    workerRegistration.returnExcessiveBond(workerId);
    assertEq(token.balanceOf(address(creator)), balanceBefore);
  }

  function test_RevertsIf_NotCalledByCreator() public {
    workerRegistration.register(workerId);
    jumpEpoch();
    networkController.setBondAmount(60);
    vm.expectRevert("Not worker creator");
    vm.startPrank(address(1));
    workerRegistration.returnExcessiveBond(workerId);
  }
}
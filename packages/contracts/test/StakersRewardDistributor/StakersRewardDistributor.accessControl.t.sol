// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.20;

import "./StakersRewardDistributorTest.sol";

contract StakingAccessControlTest is StakersRewardDistributionTest {
  function test_RevertsIf_NotRewardsDistributorCallDistribute() public {
    vm.expectRevert(
      "AccessControl: account 0x0000000000000000000000000000000000000001 is missing role 0x9df62d436bfc9f3be4953ab398f3aa862316b013d490e2138c80b4b2eadeabd7"
    );
    uint256[] memory amounts = new uint256[](1);
    amounts[0] = 100;
    hoax(address(1));
    staking.distribute(workers, amounts);
  }

  function test_RevertsIf_NotRewardsDistributorCallClaim() public {
    vm.expectRevert(
      "AccessControl: account 0x0000000000000000000000000000000000000001 is missing role 0x9df62d436bfc9f3be4953ab398f3aa862316b013d490e2138c80b4b2eadeabd7"
    );
    hoax(address(1));
    staking.claim(address(this));
  }
}

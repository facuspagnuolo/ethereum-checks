pragma solidity ^0.4.18;

contract Loop {
  function nativeLoop(uint256 times) public pure returns (uint256 result) {
    for(uint256 i = 0; i < times; i++) {
      result++;
    }
  }

  function assemblyLoop(uint256 times) public view returns (uint256 result) {
    assembly {
      let i := 0
      loop:
      i := add(i, 1)
      result := add(result, 1)
      jumpi(loop, lt(i, times))
    }
  }
}

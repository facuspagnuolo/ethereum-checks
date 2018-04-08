pragma solidity ^0.4.18;

contract Conditional {
  function nativeConditional(int256 n) public pure returns (uint256 result) {
    if(n >= 0) result = 1;
    else result = 0;
  }

  function assemblyConditional(int256 n) public pure returns (uint256 result) {
    assembly {
      result := add(0, 0)
      switch lt(n, 0)
      case 0 { result := add(1, 0) }
      default { result := add(0, 0) }
    }
  }
}

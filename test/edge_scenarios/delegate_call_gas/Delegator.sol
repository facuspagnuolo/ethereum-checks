pragma solidity ^0.4.18;

contract Delegator {
  event DelegatorLog(uint gas);

  address public implementation;

  function Delegator(address _implementation) public {
    require(_implementation != address(0));
    implementation = _implementation;
  }

  function () public payable {
    DelegatorLog(msg.gas);

    address _impl = implementation;
    bytes memory data = msg.data;
    assembly {
      let result := delegatecall(gas, _impl, add(data, 0x20), mload(data), 0, 0)
    }

    DelegatorLog(msg.gas);
  }
}

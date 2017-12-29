pragma solidity ^0.4.18;

contract Implementation {
  event ImplementationLog(uint gas);

  function() public payable {
    ImplementationLog(msg.gas);
    assert(false);
  }
}

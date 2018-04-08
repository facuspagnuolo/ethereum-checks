const NonPayable = artifacts.require('NonPayable.sol')

contract('NonPayable', accounts => {
  it('reverts if someone tries to send it funds', async function () {
    const nonPayable = await NonPayable.new()

    try {
      await nonPayable.sendTransaction({ from: accounts[0], value: 1000, gasPrice: 0 })
      assert.fail();
    } catch(error) {
      assert(error.message.search('revert') > 0);
    }
  })
})

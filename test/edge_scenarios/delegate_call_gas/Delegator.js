const Delegator = artifacts.require('./Delegator.sol')
const Implementation = artifacts.require('./Implementation.sol')

contract('Given a proxy contract', accounts => {
  it('throws if some tries to send it funds', async function () {
    const implementation = await Implementation.new();
    const proxy = await Delegator.new(implementation.address);

    const {logs} = await proxy.sendTransaction({ from: accounts[0], value: 1000, gasPrice: 0, gas: 640000 });

    assert(logs.length === 2);

    assert(logs[0].event === 'DelegatorLog');
    assert(logs[0].args.gas.eq(618884)); //

    assert(logs[1].event === 'DelegatorLog');
    assert(logs[1].args.gas.eq(9629)); //
  });
});

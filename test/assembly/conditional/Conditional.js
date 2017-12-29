const Conditional = artifacts.require('./Conditional.sol')

contract('Given an assembly conditional', () => {

  xit('works as native conditional', async function () {
    const conditional = await Conditional.new()

    const nativeResult = await conditional.nativeConditional(10)
    const assemblyResult = await conditional.assemblyConditional(10)

    assert.equal(nativeResult, assemblyResult);
  })
})

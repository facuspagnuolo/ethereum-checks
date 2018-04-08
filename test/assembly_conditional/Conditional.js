const Conditional = artifacts.require('Conditional.sol')

contract('Conditional', () => {
  it('works as native conditional', async function () {
    const conditional = await Conditional.new()

    const nativeResult = await conditional.nativeConditional(10)
    const assemblyResult = await conditional.assemblyConditional(10)

    assert(nativeResult.eq(assemblyResult));
  })
})

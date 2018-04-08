const Loop = artifacts.require('Loop.sol')

contract('Loop', () => {
  it('works as native loops', async function () {
    const loop = await Loop.new()

    const nativeResult = await loop.nativeLoop(10)
    const assemblyResult = await loop.assemblyLoop(10)

    assert(nativeResult.eq(assemblyResult));
  })
})

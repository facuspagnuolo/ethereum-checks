const Loop = artifacts.require('./Loop.sol')

contract('Given an assembly loop', () => {

  xit('works as native loops', async function () {
    const loop = await Loop.new()

    const nativeResult = await loop.nativeLoop(10)
    const assemblyResult = await loop.assemblyLoop(10)

    assert.equal(nativeResult, assemblyResult);
  })
})

describe('#add', function() {
  it('it should throw exception if negative num', function() {
    expect(function() {
      calc.add("-1")
    }).toThrow("negatives not allowed: -1 ")
  })
  it('it should throw exception if negative num', function() {
    expect(function() {
      calc.add("-1,-1")
    }).toThrow("negatives not allowed: -1 -1 ")
  })
})
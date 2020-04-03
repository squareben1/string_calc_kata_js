describe('StringCalc', function() {
  describe('Add', function() {
    calc = new StringCalc
    it('should return single number', function() {
      expect(calc.add("1")).toEqual(1)
    })
    
    it('should return zero when given empty string', function() {
      expect(calc.add("")).toEqual(0)
    })

    it('should return zero when given empty string', function() {
      expect(calc.add("1,2")).toEqual(3)
    })
    it('It should add 3 unknown numbers', function() {
      expect(calc.add("1,2,3")).toEqual(6)
    })
  })
})
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
    it('It should allow there to be new lines instead of commas', function() {
      expect(calc.add("1\n2,3")).toEqual(6) 
    })
    it('should allow user to select own delimiter if first 2 chars are //', function() {
      expect(calc.add("//;\n1;2")).toEqual(3)
    })
  })
})
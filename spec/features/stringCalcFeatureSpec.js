describe('StringCalc Feature', function() {
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
    it('It should allow there to be new lines instead of commas', function() {
      expect(calc.add("1\n2,3")).toEqual(6) 
    })
    it('should allow user to select own delimiter if first 2 chars are //', function() {
      expect(calc.add("//;\n1;2")).toEqual(3)
    })
  })
})

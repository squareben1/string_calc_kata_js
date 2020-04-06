describe("StringCalc", function () {
  calc = new StringCalc()
  describe("Add", function () {
    it("should return single number", function () {
      expect(calc.add("1")).toEqual(1)
    })
    it("should return zero when given empty string", function () {
      expect(calc.add("")).toEqual(0)
    })
    it("should add the numbers numbers within array", function () {
      expect(calc.add("1,2")).toEqual(3)
    })
    it("It should add 3 unknown numbers", function () {
      expect(calc.add("1,2,3")).toEqual(6)
    })
  })

  describe('subtract', function() {
    it('should subtract two numbers passed in as string', function() {
      expect(calc.subtract('3,2')).toEqual(1)
    })
  })

  describe("#negativeCheck", function () {
    it("it should throw exception if negative num", function () {
      expect(function () {
        calc.negativeCheck(["-1"])
      }).toThrow("negatives not allowed: -1 ")
    })
    it("it should throw exception if negative numbers plural", function () {
      expect(function () {
        calc.negativeCheck(["-1", "-1"])
      }).toThrow("negatives not allowed: -1 -1 ")
    })
  })

  describe("#splitString", function () {
    it("It should allow there to be new lines instead of commas", function () {
      expect(calc.splitString("1\n2,3")).toEqual(["1", "2", "3"])
    })
    it("should allow user to select own delimiter if first 2 chars are //", function () {
      expect(calc.splitString("//[;]\n1;2")).toEqual(["1", "2"])
    })
    it("should allow delimeters to be any length", function () {
      expect(calc.splitString("//[***]\n1***2***3")).toEqual(["1", "2", "3"])
    })
    it("should allow multiple delimeters", function() {
      expect(calc.splitString("//[*][%]\n1*2%3")).toEqual(["1", "2", "3"])
    })
    it("should allow delimeters of multiple chars", function() {
      expect(calc.splitString("//[***]\n1***2***3")).toEqual(["1", "2", "3"])
    })
    it("should allow multiple delimeters of more than 1 character", function () {
      expect(calc.splitString("//[***][%%%]\n1***2%%%3")).toEqual(["1", "2", "3"])
    })
  })

  // describe('#stripString', function() {
  //   it('should return a string devoid of ')
  // })

  describe('#intifyArray', function() {
    it('should turn array of strings into array of integers', function() {
      expect(calc.intifyArray(["1"])).toEqual([1])
    })
  })

  describe("#ignoreThousands", function () {
    it("It should ignore any numbers higher than 1000", function () {
      expect(calc.ignoreThousands([1001, 2])).toEqual([2])
    })
  })

  describe('#returnCheckedNumArray', function() {
    it('should return array of integers under 1k', function() {
      expect(calc.returnCheckedNumArray("1001,2")).toEqual([2])
    })
  })

  describe('#checkLength', function() {
    it('should return zero when passed empty string', function() {
      expect(calc.checkLength("")).toEqual(0)
    })
    it('should return single number as int', function() {
      expect(calc.checkLength("1")).toEqual(1)
    })
  })
})
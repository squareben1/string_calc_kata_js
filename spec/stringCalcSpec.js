describe("StringCalc", function () {
  calc = new StringCalc()
  describe("Add", function () {
    it("should return single number", function () {
      expect(calc.add("1")).toEqual(1)
    })
    it("should return zero when given empty string", function () {
      expect(calc.add("")).toEqual(0)
    })
    it("should return zero when given empty string", function () {
      expect(calc.add("1,2")).toEqual(3)
    })
    it("It should add 3 unknown numbers", function () {
      expect(calc.add("1,2,3")).toEqual(6)
    })
  })

  describe("#negativeCheck", function () {
    it("it should throw exception if negative num", function () {
      expect(function () {
        calc.negativeCheck(["-1"])
      }).toThrow("negatives not allowed: -1 ")
    })
    it("it should throw exception if negative num", function () {
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
      expect(calc.splitString("//;\n1;2")).toEqual(["1", "2"])
    })
  })

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
})
class StringCalc {
  negativeCheck(numbers) {
    let hasNegative = numbers.some(v => v < 0);
    if (hasNegative == true) {
      var errorString = "negatives not allowed: "
      for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
          errorString = errorString.concat(`${numbers[i]} `)
        }
      }
      throw errorString
    }
  }

  splitString(string) {
    if (string.slice(0,2) == '//') {
      var char = string.substring(
        string.lastIndexOf("[")+1, 
        string.lastIndexOf("]")
      )
      var bracketCount = string.split('[').length-1
      
      if (bracketCount > 1) {
        var newString = string.substring(0, char.length+4)
        var charTwo = newString.substring(
          newString.lastIndexOf("[")+1, 
          newString.lastIndexOf("]")
        )
        var strippedString = string.substring(char.length+4).replace(/(\r\n|\n|\r)/gm, "")
        return strippedString.substring(char.length+2).replace(charTwo, char).split(char)
      } else {
        var strippedString = string.substring(char.length+4).replace(/(\r\n|\n|\r)/gm, "")
        return strippedString.split(char)
      }
    } else {
      return string.split(/\,|\n/) 
    }
  }

  returnCheckedNumArray(string) {
    var numbersOverOneThousand = this.intifyArray(this.splitString(string))
    this.negativeCheck(numbersOverOneThousand)
    return this.ignoreThousands(numbersOverOneThousand)
  }
  
  add(string) {
    var numbers = this.returnCheckedNumArray(string)
    var total = 0

    if(string.length < 1) {
      return 0
    } else if (string.length === 1) {
      return numbers[0]
    } else {
      for (var i = 0; i < numbers.length; i++) {
        total += numbers[i]
      }
      return total
    }
  }

  intifyArray(array) {
    var integerArray = []
    for (var i = 0; i < array.length; i++) {
      integerArray.push(parseInt(array[i], 10))
    }
    return integerArray
  }

  ignoreThousands(numbers) {
    function checkNum(num) {
      return num < 1000
    }
    return numbers.filter(checkNum)
  }
}


class StringCalc {
  add(string) {
    var numbers = this.returnCheckedNumArray(string)
    var total = 0

    for (var i = 0; i < numbers.length; i++) {
      total += numbers[i]
    }
    return total
  }

  subtract(string) {
    var numbers = this.returnCheckedNumArray(string)
    return numbers[0] - numbers[1]
  }

  returnCheckedNumArray(string) {
    var numbersOverOneThousand = this.intifyArray(this.splitString(string))
    this.negativeCheck(numbersOverOneThousand)
    this.checkLength(string)
    return this.ignoreThousands(numbersOverOneThousand)
  }

  intifyArray(array) {
    var integerArray = []
    for (var i = 0; i < array.length; i++) {
      integerArray.push(parseInt(array[i], 10))
    }
    return integerArray
  }

  splitString(string) { // returns array of seperate strings
    // checks for user generated delimiter
    if (string.slice(0,2) == '//') {
      return this.selectDelimiter(string)
    } else {
      // split at commas and new lines by default
      return string.split(/\,|\n/) 
    }
  }

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

  checkLength(string) {
    if(string.length < 1) {
      return 0
    } else if (string.length === 1) {
      return parseInt(string, 10)
    }  
  }

  removeChars(string, char) {
    return string.substring(char.length+4).replace(/(\r\n|\n|\r)/gm, "")
  }

  selectDelimiter(string) {
    var char = string.substring(
      string.lastIndexOf("[")+1, 
      string.lastIndexOf("]")
    )
    // removes start of string, removes new lines
    var strippedString = this.removeChars(string, char)
    // checks for second user generated delimiter
    var bracketCount = string.split('[').length-1

    if (bracketCount > 1) {
      var newString = string.substring(0, char.length+4)
      var charTwo = newString.substring(
        newString.lastIndexOf("[")+1, 
        newString.lastIndexOf("]")
      )
      // if 2 delimiters then replaces one with the other, splits 
      return strippedString.substring(char.length+2).replace(charTwo, char).split(char)
    } else {
      // split at user-generated character
      return strippedString.split(char)
    }
  }

  ignoreThousands(numbers) {
    function checkNum(num) {
      return num < 1000
    }
    return numbers.filter(checkNum)
  }
}


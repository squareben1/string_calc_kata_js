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
      var char = string[2]
      var strippedString = string.replace(/(\r\n|\n|\r)/gm, "")
      return strippedString.substring(3).split(char)
    } else {
      return string.split(/\,|\n/) 
    }
  }
  
  add(string) {
    var numbersOneThousand = this.intifyArray(this.splitString(string))
    this.negativeCheck(numbersOneThousand)
    var numbers = this.ignoreThousands(numbersOneThousand)
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
      return num < 1000;
    }
    return numbers.filter(checkNum)
  }
}


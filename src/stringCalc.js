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
      // var char = string[2] 
      // var char = string.split(/[:;]/)
      var char = string.substring(
        string.lastIndexOf("[")+1, 
        string.lastIndexOf("]")
      )
      var strippedString = string.replace(/(\r\n|\n|\r)/gm, "")
      return strippedString.substring(char.length+4).split(char)
    } else {
      return string.split(/\,|\n/) 
    }
  }
  
  add(string) {
    var numbersOverOneThousand = this.intifyArray(this.splitString(string))
    this.negativeCheck(numbersOverOneThousand)
    var numbers = this.ignoreThousands(numbersOverOneThousand)
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


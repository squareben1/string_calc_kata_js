class StringCalc {
  add(string) {
    // var numbers = []
    if (string.slice(0,2) == '//') {
      var char = string[2]
      var numbers = string.substring(3).split(char)
    } else {
      var numbers = string.split(/\,|\n/) 
      console.log("normal")
      console.log(numbers)
    }
    
    var total = 0

    if(string.length < 1) {
      return 0
    } else if (string.length === 1) {
      return parseInt(string, 10)
    } else {
      for (var i = 0; i < numbers.length; i++) {
        total += parseInt(numbers[i], 10)
      }
      return total
    }
  }
}


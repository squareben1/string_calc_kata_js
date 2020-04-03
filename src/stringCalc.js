class StringCalc {
  add(string) {
    var numbers = string.split(',')
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


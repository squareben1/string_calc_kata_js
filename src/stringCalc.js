class StringCalc {
  add(string) {
    var numbers = string.split(',')
    
    if(string.length < 1) {
      return 0
    } else if (string.length == 1) {
      return parseInt(string, 10)
    } else {
      return parseInt(numbers[0], 10) + parseInt(numbers[1], 10)
    }
  }
}
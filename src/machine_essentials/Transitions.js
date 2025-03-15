// to use these, iterate through all saved lambda functions of a state by creating a new timeline 
// per possible transition but excluding those that return false
function scan(input_tape, scan_symbol) {
  return input_tape.scan(scan_symbol)
}

function print(output_tape, print_symbol) {
  output_tape.print(print_symbol)
  return true 
}

// Storing Functions in an Array

// const operations = [
//   () => print(5), // Store function without executing it
//   () => print(6),
// ];

// // Execute the stored functions
// operations[0](); // Output: 5
// operations[1](); // Output: 6
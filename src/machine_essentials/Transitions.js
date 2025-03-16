// to use these, iterate through all saved lambda functions of a state by creating a new timeline 
// per possible transition but excluding those that return false

/**
 * 
 * @param {InputTape} input_tape 
 * @param {char} scan_symbol 
 * @returns true if scan_right was successful
 *          false if otherwise
 */
function scan(input_tape, scan_symbol) {
  return input_tape.scan_right(scan_symbol)
}

/**
 * 
 * @param {OutputTape} output_tape 
 * @param {char} print_symbol 
 * @returns true after storing the print symbol in the output tape
 */
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
// to use these, iterate through all saved lambda functions of a state by creating a new timeline 
// per possible transition but excluding those that return false

/**
 * 
 * @param {InputTape} input_tape 
 * @param {char} scan_symbol 
 * @returns true if scan_right was successful
 *          false if otherwise
 */
export function scan(input_tape, scan_symbol) {
  return input_tape.scan_right(scan_symbol)
}

/**
 * 
 * @param {OutputTape} output_tape 
 * @param {char} print_symbol 
 * @returns true after storing the print symbol in the output tape
 */
export function print(output_tape, print_symbol) {
  output_tape.print(print_symbol)
  return true 
}

/**
 * 
 * @param {InputTape} input_tape 
 * @param {char} scan_symbol 
 * @returns true if scan_right was successful
 *          false if otherwise
 */
export function scan_right(input_tape, scan_symbol) {
  return input_tape.scan_right(scan_symbol)
}

/**
 * 
 * @param {InputTape} input_tape 
 * @param {char} scan_symbol 
 * @returns true if scan_left was successful
 *          false if otherwise
 */
export function scan_left(input_tape, scan_symbol) {
  return input_tape.scan_left(scan_symbol)
}

/**
 * 
 * @param {Stack | Queue} memory_object 
 * @returns true if the read operation was successful
 *          false if otherwise
 */
export function read(memory_object) {
  return memory_object.read()
}

/**
 * 
 * @param {Stack | Queue} memory_object 
 * @param {char} write_symbol 
 * @returns true if the write operation was successful
 *          false if otherwise
 */
export function write(memory_object, write_symbol) {
  return memory_object.write(write_symbol)
}

/**
 * 
 * @param {Tape1D | Tape2D} memory_object 
 * @param {char} read_symbol 
 * @param {char} write_symbol 
 * @returns true if the right operation was successful
 *          false if otherwise
 */
export function right(memory_object, read_symbol, write_symbol) {
  return memory_object.right(read_symbol, write_symbol)
}

/**
 * 
 * @param {Tape1D | Tape2D} memory_object 
 * @param {char} read_symbol 
 * @param {char} write_symbol 
 * @returns true if the left operation was successful
 *          false if otherwise
 */
export function left(memory_object, read_symbol, write_symbol) {
  return memory_object.left(read_symbol, write_symbol)
}

/**
 * 
 * @param {Tape2D} memory_object 
 * @param {char} read_symbol 
 * @param {char} write_symbol 
 * @returns true if the up operation was successful
 *          false if otherwise
 */
export function up(memory_object, read_symbol, write_symbol) {
  return memory_object.up(read_symbol, write_symbol)
}

/**
 * 
 * @param {Tape2D} memory_object 
 * @param {char} read_symbol 
 * @param {char} write_symbol 
 * @returns true if the down operation was successful
 *          false if otherwise
 */
export function down(memory_object, read_symbol, write_symbol) {
  return memory_object.down(read_symbol, write_symbol)
}


// Storing Functions in an Array

// const operations = [
//   () => print(5), // Store function without executing it
//   () => print(6),
// ];

// // Execute the stored functions
// operations[0](); // Output: 5
// operations[1](); // Output: 6
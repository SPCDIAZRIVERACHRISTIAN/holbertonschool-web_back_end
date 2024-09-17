console.log('Welcome to Holberton School, what is your name?\n');

// Capture user input from stdin
process.stdin.setEncoding('utf8');

// Event listener for when data is entered by the user
process.stdin.on('data', (input) => {
  // Remove any extra newline or carriage return characters
  const name = input.trim();

  // Display the inputted name
  console.log(`Your name is: ${name}`);

  // Display closing message and exit the program
  console.log('This important software is now closing');
  process.exit();
});

// Function to decode a ROT13 encoded string
function rot13(str) {
	// Split the input string into an array of characters
	return str
		.split("")
		.map(function (char) {
			// Check if the character is an uppercase letter
			if (char.match(/[A-Z]/)) {
				// Convert the letter using ROT13 algorithm
				// ASCII code for A is 65, and for Z is 90
				// Apply ROT13 transformation
				return String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65);
			} else {
				// If the character is not an uppercase letter, return it as is
				return char;
			}
		})
		.join(""); // Join the array into a string
}

// Test cases
console.log(rot13("SERR PBQR PNZC")); // Output: FREE CODE CAMP
console.log(rot13("SERR CVMMN!")); // Output: FREE PIZZA!
console.log(rot13("SERR YBIR?")); // Output: FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // Output: THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

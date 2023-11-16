# ROT13 Cipher in JavaScript

## Introduction

This JavaScript code is a simple implementation of the ROT13 cipher, also known as the Caesar cipher with a fixed shift of 13 places. The ROT13 cipher is a substitution cipher where each letter in the plaintext is shifted 13 places down or up the alphabet. This code takes a ROT13 encoded string as input and decodes it, preserving non-alphabetic characters.

## How it Works

The `rot13` function in the code performs the following steps:

1. **Character Processing:**

   - The function splits the input string into an array of characters.

2. **ROT13 Transformation:**
   - It iterates through each character, checking if it is an uppercase letter.
   - Uppercase letters are transformed using the ROT13 algorithm while non-alphabetic characters are left unchanged.
   - The transformed characters are then joined back into a string.

## Test Cases

The code includes test cases to ensure the correct functionality of the `rot13` function:

- `rot13("SERR PBQR PNZC")` should decode to the string "FREE CODE CAMP".
- `rot13("SERR CVMMN!")` should decode to the string "FREE PIZZA!".
- `rot13("SERR YBIR?")` should decode to the string "FREE LOVE?".
- `rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")` should decode to the string "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

## How to Use

1. Clone this repository to your local machine.
2. Open the JavaScript file (`rot13.js`) in your preferred code editor.
3. Modify the test cases or add your own if needed.
4. Run the script to see the results of the ROT13 decoding.

const { validateEmail, validatePasswordStrength, validatePhoneNumber } = require('./src/index.js');

console.log(validateEmail("test@example.com")); // Should output true or false
console.log(validatePasswordStrength("ExamplePassword1")); // Should output true or false
console.log(validatePhoneNumber("202-555-0178")); // Should output true or false

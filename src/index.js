// Import the validator library
const validator = require('validator');

// Function to validate an email address
function validateEmail(email) {
  return validator.isEmail(email);
}

// Function to validate password strength
// This example requires the password to be at least 8 characters long, including at least one uppercase letter, one lowercase letter, and one number.
// The validator.isStrongPassword method allows for additional configurations, which can be adjusted as needed.
function validatePasswordStrength(password) {
  return validator.isStrongPassword(password, {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 0,
  });
}

// Function to validate a phone number
// Uses validator to check if the phone number is valid for the US
function validatePhoneNumber(phoneNumber) {
  return validator.isMobilePhone(phoneNumber, 'en-US');
}

// Export the validation functions
module.exports = {
  validateEmail,
  validatePasswordStrength,
  validatePhoneNumber,
};

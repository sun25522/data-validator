# easy-data-validator

A simple, easy-to-use library providing common data validation functionalities such as email, password strength, and US phone number validation. Designed to be straightforward and meet most basic data validation needs.

## Features

- **Email Validation**: Validates if the given string is a valid email address.
- **Password Strength Validation**: Checks if the password meets the minimum strength requirements.
- **US Phone Number Validation**: Validates if the given string is a valid US phone number.

## Installation

To install `easy-data-validator`, run the following command in your terminal:

```bash
npm install easy-data-validator
```

## Usage

After installation, you can use easy-data-validator in your project by requiring the library:

### Importing the Library

```javascript
const validator = require('easy-data-validator');
```

### Validating an Email

```javascript
const isValidEmail = validator.validateEmail('example@example.com');
console.log(isValidEmail); // Output: true or false
```

### Checking Password Strength

```javascript
const isStrongPassword = validator.validatePasswordStrength('ExamplePassword1!');
console.log(isStrongPassword); // Output: true or false
```

### Validating a US Phone Number

```javascript
const isValidPhoneNumber = validator.validatePhoneNumber('202-555-0178');
console.log(isValidPhoneNumber); // Output: true or false
```

## API Reference

- **validateEmail(email)**: Validates if the given string is a valid email address.
- **validatePasswordStrength(password)**: Checks if the password meets the minimum strength requirements. A strong password should be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.
- **validatePhoneNumber(phoneNumber)**: Validates if the given string is a valid US phone number.

## Contributing

Contributions to **easy-data-validator** are always welcome! If you have any ideas for improvement, feel free to open an issue or submit a pull request.

## License
easy-data-validator is open source software licensed under the MIT License. See the LICENSE file for more details.

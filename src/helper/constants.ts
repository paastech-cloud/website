// Minimum eight characters, at least one uppercase letter,
// one lowercase letter, one number and one special character
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,255}$/;

// 3 to 30 characters, starts with a letter, only has letters, digits and underscores
export const USERNAME_REGEX =/^[A-Za-z][A-Za-z0-9_]{2,29}$/;
// Minimum eight characters, at least one uppercase letter,
// one lowercase letter, one number and one special character
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

// starts with a letter, ends with a letter or a figure, contains alphanumerical and hyphens/underscores
export const USERNAME_REGEX = /^[A-Za-z][A-Za-z0-9_-]+[A-Za-z0-9]$/;

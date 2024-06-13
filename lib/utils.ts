export const validateString = (value: unknown, maxLength: number): boolean =>
  typeof value === "string" && value.length <= maxLength;

export const getErrorMessage = (error: unknown): string =>
  error instanceof Error
    ? error.message
    : typeof error === "string"
    ? error
    : typeof error === "object" && error !== null && "message" in error
    ? String((error as { message: unknown }).message)
    : "something went wrong";

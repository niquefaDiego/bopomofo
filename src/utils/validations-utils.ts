import { ValidationError } from "@/utils/errors";

function validateIsTrue(flag: boolean, errorMessage: string): void {
  if (!flag) {
    throw new ValidationError(errorMessage);
  }
}

export { validateIsTrue };
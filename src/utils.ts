/**
 * Check if the value is empty
 * @param value
 */
export const isEmpty = (
  value:
    null | undefined | string | unknown[] |
    Record<any, unknown> | number
): boolean => {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === 'string') {
    return value.trim().length === 0;
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === 'object') {
    return Object.keys(value || {}).length === 0;
  }

  if (typeof value === 'number') {
    return false;
  }

  throw new Error('Unsupported type');
}

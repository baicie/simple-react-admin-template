const storePrefix = 'store';
export function getStoreKey(key: string) {
  return `${storePrefix}:${key}`;
}
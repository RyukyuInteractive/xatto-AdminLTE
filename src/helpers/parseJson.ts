export function parseJson (value: any): any {
  if (null == value) {
    return null
  }
  try {
    return 'string' === typeof value ? JSON.parse(value) : value
  } catch (e) {
    return null
  }
}

export function objectFilter<T>(obj: T, excludeProp: string): unknown {
  const asArray = Object.entries(obj);
  const filteredArray = asArray.filter(([key]) => key !== excludeProp);
  return Object.fromEntries(filteredArray);
}

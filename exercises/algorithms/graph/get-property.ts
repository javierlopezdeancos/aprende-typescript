export const getProperty = <K extends keyof O, O>(key: K, obj: O) => {
  return obj[key];
};

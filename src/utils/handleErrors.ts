export const handleErrors = <A extends any[]>(
  p: (...args: A) => Promise<void>,
): ((...args: A) => void) => {
  return (...args: A) => {
    try {
      p(...args).catch(err => console.log('Error thrown asynchronously', err));
    } catch (err) {
      console.log('Error thrown synchronously', err);
    }
  };
};

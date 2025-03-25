// this function implements debounce functionality
export function debounce(func: (args: any) => void, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout>;
  const returnDebounce = function (...args: any) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(args);
    }, delay);
  };
  returnDebounce.cancel = () => clearTimeout(timeoutId);
  return returnDebounce;
}

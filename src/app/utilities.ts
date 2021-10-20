function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * delays the function execution, e.g. to simulate network latency
 * @param produceValue function to produce the value
 * @returns the produced value
 */
export async function delay<T>(produceValue: () => T) {
  await wait(0);
  return produceValue();
}

/** @format */

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const testPromise = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({promise: 'wancheng'})
    })
  })
}

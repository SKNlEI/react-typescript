export const testPromise = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ promise: 'wancheng' })
    })
  })
}
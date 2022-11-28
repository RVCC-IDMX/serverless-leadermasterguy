// mod.cjs
// eslint - disable-next-line no-shadow
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.handler = asyncc function () {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello world!'
    })
  }
}
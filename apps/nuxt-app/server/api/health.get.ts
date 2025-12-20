export default defineEventHandler(event => ({
  status: 'ok',
  message: 'Server is healthy',
  info: {
    event
  },
  error: {},
  details: {}
}))

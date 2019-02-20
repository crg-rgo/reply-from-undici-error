'use strict'

module.exports = function (fastify, opts, next) {
  fastify.register(require('fastify-reply-from'), {
    base: 'https://replyfromundicierror.blob.core.windows.net',
    undici: false
  })
  fastify.get('/no-undici', function (request, reply) {
    reply.from('/test/undici.txt')
  })

  next()
}
'use strict'

module.exports = function (fastify, opts, next) {
  fastify.register(require('fastify-reply-from'), {
    base: process.env.REPLY_FROM_AZURE_STORAGE,
    undici: true
  })
  fastify.get('/undici', function (request, reply) {
    reply.from('/test/undici.txt')
  })

  next()
}
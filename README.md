# reply-from-undici-error

This is a repository to test [https://github.com/fastify/fastify-reply-from/issues/44]().

Start the fastify server (e.g. with `npm run dev`) and try those 2 routes:

* http://127.0.0.1:3000/no-undici -> 200
* http://127.0.0.1:3000/undici -> 400 Bad Request (Invalid Header)


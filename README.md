# reply-from-undici-error

This is a repository to test [https://github.com/fastify/fastify-reply-from/issues/44]().

You just have to create an azure storage account with an blob container named "test". 
Then upload the file "undici.txt" located in the storage directory to this container.

The base url of your azure storage account (`https://<valid-azure-storage-account>.blob.core.windows.net`) 
must be set to an environment variable named "REPLY_FROM_AZURE_STORAGE".

For example in a '.env' file in root:

```
REPLY_FROM_AZURE_STORAGE=https://<valid-azure-storage-account>.blob.core.windows.net
```

If you now start your fastify server (e.g. with `npm run dev`) you can call 2 routes:

* http://127.0.0.1:3000/no-undici -> 200
* http://127.0.0.1:3000/undici -> 400 Bad Request (Invalid Header)


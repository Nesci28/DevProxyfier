# DevProxyfier

Let's say you are working on a project which has 3 layers (Front-end, Middleware, Back-end). Middleware is the layer where, normally, on the Prod Environment, calls the Back-end with the API Key already in it. Problem is, during the development, when you are working locally, you got to set the headers manually to test your endpoints. This is dangerous and time consuming. This is where DevProxifier comes up handy.

1. Set you local environment url variable to call localhost:3000
2. Set the url of your backend in the PROXY_URL variable in the .env file

```ex:
PROXY_URL=http://www.myBackEnd.com
```

2. Set the API Key in the .env file in this format: KEY_ENDPOINT_URL

```ex:
endpoint: http://www.backend_url.com/find/all/mark
KEY_FIND_ALL=thisIsASuperSecretAPIKEYForFindAll
endpoint: http://www.backend_url.com/find/one/mark
KEY_FIND_ONE=thisIsASuperSecretAPIKEYForFindOne
```

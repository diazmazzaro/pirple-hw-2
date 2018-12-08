# pirple-hw-2

Pirple Homework Assignment #2

This API provides all endpoints for a Pizza Delivery application.

## 1. Security

The application security is based on __Tokens__. You can get a token by tokens endpoint, using user's email and password.

_POST_ body to __~/tokens__
```javascript
{
	"email" : "mail@server.com",
	"password" : "12345678"
}
```

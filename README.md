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
Response
```javascript
{
    "email": "mail@server.com",
    "id": "vh6tvkd3vj0ylsg4kvqt",
    "expires": 1544311736418
}
```
Also you can __extend__ token's live by _put_ method or __delete__ by _delete_ method

### Use token
Always add the token header.
```
token:e666uvyq3d1j3mo02gju
```

## 2. Users

Endpoint for user management.
### Create User
_POST_ body to __~/users__
```javascript
{
	"firstName" : "test",
	"lastName" : "user",
	"phone" : "4567121322",
	"email" : "test@gmail.com",
	"address" : "5th street, CA",
	"password" : "12345678",
	"tosAgreement" : true
}
```
Response
```javascript
{ }
```

### Update User
_PUT_ body to __~/users__ (email is the key for users)
```javascript
{
	"email" : "test@gmail.com",
	"address" : "NEW street, CA"
}
```
Response
```javascript
{ }
```

### Delete User
_DELETE_ body to __~/users__ (Only email is required)
```javascript
{
	"email" : "test@gmail.com"
}
```
Response
```javascript
{ }
```

### Get User
_GET_ to __~/users__ (Only email is required)
You can get by body:
```javascript
{
	"email" : "test@gmail.com"
}
```

Or you can get by query url:
```javascript
~/users?email=test@gmail.com
```
Response
```javascript
{
	"firstName" : "test",
	"lastName" : "user",
	"phone" : "4567121322",
	"email" : "test@gmail.com",
	"address" : "5th street, CA",
	"tosAgreement" : true
}
```

## 3. Menus

Endpoint for menus listing.

### Get especific menu item
_GET_ to __~/menus__ (email and menu id is required)
```javascript
~/menus?email=test@gmail.com&menuid=menu1
```
Response
```javascript
{
    "id": "menu1",
    "name": "GODFATHER",
    "description": "Pepperoni, fresh tomato, capsicum, Italian sausage, olives, oregano & garlic sauce",
    "price": 3.2
}
```

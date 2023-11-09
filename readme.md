# Project: Reset Password with OTP
Very basic auth app api to grasp sending mails and the reset password flow
# 📁 Collection: Auth 


## End-point: Register
### Method: POST
>```
>localhost:4000/auth/register
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Body (**raw**)

```json
{
    "email": "ugwu_kasie@yahoo.com",
    "userName": "VivTracy",
    "password": "vivtracy",
    "phone": "07067676756"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Login
### Method: POST
>```
>localhost:4000/auth/login
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Body (**raw**)

```json
{
    "userName": "VivTracy",
    "password": "vivtracy"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Forgot Password
### Method: POST
>```
>localhost:4000/auth/forgot-password
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Body (**raw**)

```json
{
    "email": "ugwu_kasie@yahoo.com"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Reset Password
### Method: POST
>```
>localhost:4000/auth/reset-password
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Body (**raw**)

```json
{
    "cipherText": " U2FsdGVkX1/bMDl+fqnEJolLH5dRXnv/79aHvBe5cCXAhCqmVJyPKwVzTjWV09UR",
    "otp": "375765",
    "newPassword": "Hello@45"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
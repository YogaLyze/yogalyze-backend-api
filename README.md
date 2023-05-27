## API DOCUMENTATION

### REGISTER

Endpoint: `/auth/register`

@body request:

```json
{
  "name": "fulan",
  "email": "fulan@example.com",
  "password": "fulan123",
  "confirmpass": "fulan123"
}
```

@body response:

```json
{ "msg": "Register Success" }
```

### LOGIN

Endpoint `/auth/login`

@body request:

```json
{
  "email": "fulan@example.com",
  "password": "fulan123"
}
```

@body response:

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJuYXVmYWwiLCJlbWFpbCI6Im5hdWZhbEBnbWFpbC5jb20iLCJpYXQiOjE2ODUxMDIxNDIsImV4cCI6MTY4NTEwMjE2Mn0.A_18H9za7h3wbIF3VbbUITAlHuXLxTcC89ryqNeow0A"
}
```

### LOGOUT

Endpoint: `/auth/logout`

@body response:

```json
{
  "code": 200
}
```

### GET USERS

Endpoint: `/user/`

@body response:

```json
{}
```

### UPDATE USER

Endpoint: `/user/`

@body request:

```json
{
  "age": 17,
  "gender": "Male",
  "height": 178.0,
  "weight": 50.0
}
```

@body response:

```json
{
  "status": 200,
  "user": {
    "name": "fulan",
    "email": "fulan@example.com",
    "password": "fulan123",
    "age": 17,
    "gender": "Male",
    "height": 178.0,
    "weight": 50.0
  }
}
```

### DELETE USER

Endpoint: `/user/`

@body request:

```json
{
  "userId": 1
}
```

@body response:

```json
{
  "status": 200,
  "msg": "User deleted"
}
```

### ADD HISTORY

Endpoint: `/history/add`

@body request:

```json
{
  "yoga_type": "example",
  "yoga_pose": "pose_example",
  "score": 100,
  "date": "2020-12-12"
}
```

@body response:

```json
{
  "msg": "history added"
}
```

### GET HISTORY

Endpoint:`/history/:id`

@body response:

```json
{
  "yoga_type": "example",
  "yoga_pose": "pose_example",
  "score": 100,
  "date": "2020-12-12"
}
```

### ADD REMINDER

Endpoint: `/reminder/add`

@body request:

```json
{
  "isMonday": 0,
  "isTuesday": 1,
  "isWednesday": 0,
  "isThursday": 1,
  "isFriday": 1,
  "isSaturday": 0,
  "isSunday": 1,
  "time_hour": "13:00",
  "userId": 1
}
```

@body response:

```json
{
  "msg": "reminder added"
}
```

### GET REMINDER

Endpoint: `/reminder/:id`

@body_response:

```json
{
  "isMonday": 0,
  "isTuesday": 1,
  "isWednesday": 0,
  "isThursday": 1,
  "isFriday": 1,
  "isSaturday": 0,
  "isSunday": 1,
  "time_hour": "13:00",
  "userId": 1
}
```

### UPDATE REMINDER

Endpoint: `/reminder/:id`

@body_request:

```json
{
  "isMonday": 0,
  "isTuesday": 1,
  "isWednesday": 0,
  "isThursday": 1,
  "isFriday": 1,
  "isSaturday": 0,
  "isSunday": 1,
  "time_hour": "13:00"
}
```

@body_response:

```json
{
  "msg": "reminder updated"
}
```

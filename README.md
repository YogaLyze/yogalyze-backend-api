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

### GET USER

Endpoint: `/user/profile`

@body response:

```json
{
  "name": "fulan",
  "email": "fulan@example.com",
  "age": 17,
  "gender": "Male",
  "height": 178.0,
  "weight": 50.0
}
```

### UPDATE USER

Endpoint: `/user/update`

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
  "msg": "User Updated"
}
```

### DELETE USER

Endpoint: `/user/delete`

@body response:

```json
{
  "msg": "User Deleted"
}
```

### ADD HISTORY

Endpoint: `/history/add`

@body request:

```json
{
  "yoga_type": "Chest Pain",
  "yoga_pose": "Downward Dog Pose",
  "score": 100,
  "date": "2023-03-03T00:00:00.000Z"
}
```

@body response:

```json
{
  "msg": "History Added"
}
```

### GET HISTORY

Endpoint:`/history/user`

@body response:

```json
{
  "yoga_type": "Chest Pain",
  "yoga_pose": "Downward Dog Pose",
  "score": 100,
  "date": "2023-03-03T00:00:00.000Z"
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
  "time_hour": "13:00:00"
}
```

@body response:

```json
{
  "msg": "Reminder Added"
}
```

### GET REMINDER

Endpoint: `/reminder/user`

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
  "time_hour": "13:00:00"
}
```

### UPDATE REMINDER

Endpoint: `/reminder/update`

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
  "time_hour": "11:00:00"
}
```

@body_response:

```json
{
  "msg": "Reminder Updated"
}
```

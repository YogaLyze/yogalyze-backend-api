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

### UPDATE PRODUCT

Endpoint: `/api/p/{id}`

url: `http://localhost:8080/api/p/idA123`

@body request:

```json
{
  "name": "Product A",
  "calories": 1,
  "totalFat": 1,
  "saturatedFat": 1,
  "protein": 1,
  "totalCarbohydrate": 1,
  "sugar": 1,
  "sodium": 1,
  "servingSize": 0,
  "url": "https://static.wikia.nocookie.net/himoto-umaruchan/images/a/a2/Umaru%27s_anime_design_%28chibi%29.png/revision/latest?cb=20200411195915"
}
```

@body response:

```json
{
  "code": 200,
  "status": "OK",
  "data": {
    "id": "idA123",
    "name": "Product A",
    "createdAt": 1653909614431,
    "updatedAt": 1653909689524,
    "nutritionFact": {
      "calories": 1,
      "totalFat": 1,
      "saturatedFat": 1,
      "protein": 1,
      "totalCarbohydrate": 1,
      "sugar": 1,
      "sodium": 1,
      "servingSize": 0
    },
    "url": "https://static.wikia.nocookie.net/himoto-umaruchan/images/a/a2/Umaru%27s_anime_design_%28chibi%29.png/revision/latest?cb=20200411195915"
  }
}
```

### DELETE PRODUCT

Endpoint: `/api/p/{id}`

url: `http://localhost:8080/api/p/idA123`

@body response:

```json
{
  "code": 200,
  "status": "OK",
  "data": "idA123 deleted"
}
```

### CREATE PRODUCTS

Endpoint: `/api/p/`

url: `http://localhost:8080/api/p/`

@body request:

```json
[
  {
    "id": "idB123",
    "name": "Product B",
    "calories": 150,
    "totalFat": 4,
    "saturatedFat": 4,
    "protein": 7,
    "totalCarbohydrate": 20,
    "sugar": 18,
    "sodium": 60,
    "servingSize": 200,
    "url": "https://static.wikia.nocookie.net/himoto-umaruchan/images/a/a2/Umaru%27s_anime_design_%28chibi%29.png/revision/latest?cb=20200411195915"
  },
  {
    "id": "idC123",
    "name": "Product C",
    "calories": 140,
    "totalFat": 3.5,
    "saturatedFat": 3.5,
    "protein": 1,
    "totalCarbohydrate": 25,
    "sugar": 14,
    "sodium": 150,
    "servingSize": 200,
    "url": "https://static.wikia.nocookie.net/himoto-umaruchan/images/a/a2/Umaru%27s_anime_design_%28chibi%29.png/revision/latest?cb=20200411195915"
  }
]
```

@body response:

```json
{
  "code": 200,
  "status": "OK",
  "data": "2 products added"
}
```

### DELETE PRODUCTS

Endpoint: `/api/p/`

url: `http://localhost:8080/api/p/`

@Body response:

```json
{
  "code": 200,
  "status": "OK",
  "data": "2 products deleted"
}
```

### LIST PRODUCT

Endpoint: `/api/p`

@Param: `name` `page` `size`

url `http://localhost:8080/api/p?name=Product&page=2&size=3`

@Body response:

```json
{
  "code": 200,
  "status": "OK",
  "data": [
    {
      "id": "idG123",
      "name": "Product G",
      "createdAt": 1653304234181,
      "updatedAt": null,
      "nutritionFact": {
        "calories": 140,
        "totalFat": 3,
        "saturatedFat": 3,
        "protein": 1,
        "totalCarbohydrate": 25,
        "sugar": 14,
        "sodium": 150,
        "servingSize": 200
      },
      "url": "https://static.wikia.nocookie.net/himoto-umaruchan/images/a/a2/Umaru%27s_anime_design_%28chibi%29.png/revision/latest?cb=20200411195915"
    },
    {
      "id": "idH123",
      "name": "Product H",
      "createdAt": 1653304234181,
      "updatedAt": null,
      "nutritionFact": {
        "calories": 150,
        "totalFat": 4,
        "saturatedFat": 4,
        "protein": 7,
        "totalCarbohydrate": 20,
        "sugar": 18,
        "sodium": 60,
        "servingSize": 200
      },
      "url": "https://static.wikia.nocookie.net/himoto-umaruchan/images/a/a2/Umaru%27s_anime_design_%28chibi%29.png/revision/latest?cb=20200411195915"
    },
    {
      "id": "idI123",
      "name": "Product I",
      "createdAt": 1653304234182,
      "updatedAt": null,
      "nutritionFact": {
        "calories": 140,
        "totalFat": 3,
        "saturatedFat": 3,
        "protein": 1,
        "totalCarbohydrate": 25,
        "sugar": 14,
        "sodium": 150,
        "servingSize": 200
      },
      "url": "https://static.wikia.nocookie.net/himoto-umaruchan/images/a/a2/Umaru%27s_anime_design_%28chibi%29.png/revision/latest?cb=20200411195915"
    }
  ]
}
```

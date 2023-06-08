## YogaLyze API Documentation

We use **NodeJS** using the **Express Framework** to create the APIs and deploy it to **Google Cloud Platform** by using **Google App Engine** for communication with **Mobile Development**. We also use **Identity Platform** with **Firebase Auth** for User authentication and authorization based on User ID Token. The database will stored user's history and profile in **Cloud SQL**. For each URL that can be used will be explained below.

### Create / Update User Profile 

Updating the user profile or create if the profile doesn't exist based on the userId in the database.

URL: 
> /user/profile

Method: 
> PUT

Headers: 
> Authorization : Bearer {token}

Request Body: 
```json
{
  "date_of_birth": 2000-01-01,
  "gender": "Male",
  "height": 165.0,
  "weight": 60.5
}
```

Response Body:

```json
{
  "msg": "Profile Updated",
  "updated_profile": [
    1
  ]
}
```

### Get User Profile

Get the user profile attributes based on the userId.

URL: 
> /user/profile

Method: 
> GET

Headers: 
> Authorization : Bearer {token}

Response Body

```json
{
  "msg": "Profile Retrieved",
  "profile": {
    "date_of_birth": "2003-04-04",
    "gender": "Male",
    "weight": 70,
    "height": 165
  }
}
```

### Add History

Create history based on the user's activities and store it in the database.

URL: 
> /history/add

Method: 
> POST

Headers: 
> Authorization : Bearer {token}

Request Body:

```json
{
  "yoga_type": "Chest Pain",
  "yoga_pose": "Downward Cat poses",
  "score": 80,
  "date": "2023-03-03"
}
```

Response Body:

```json
{
  "msg": "History Created",
  "created_history": {
    "id": 6,
    "yoga_type": "Chest Pain",
    "yoga_pose": "Downward Cat poses",
    "score": 80,
    "date": "2023-03-03",
    "userId": "nesqZpjp6IhIjwUqqTTe4PAbdeJ3",
    "updatedAt": "2023-06-08T08:15:59.732Z",
    "createdAt": "2023-06-08T08:15:59.732Z"
  }
}
```

### Get User History

Get all history based on the current user from the database that matched with the userId.

URL: 
> /history/user

Method: 
> GET

Headers: 
> Authorization : Bearer {token}

Response Body:

```json
{
  "msg": "History Retrieved",
  "user_history": [
    {
      "yoga_type": "Chest Pain",
      "yoga_pose": "Downward Cat poses",
      "score": 80,
      "date": "2023-03-03T00:00:00.000Z"
    },
    {
      "yoga_type": "Back Pain",
      "yoga_pose": "Downward Cat poses",
      "score": 78,
      "date": "2023-03-03T00:00:00.000Z"
    }
  ]
}
```

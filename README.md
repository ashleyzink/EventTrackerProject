# EventTrackerProject - Cookie Tracker :cookie:

### MySQL Schema

![alt text](https://raw.githubusercontent.com/ashleyzink/EventTrackerProject/main/DB/cookiedb.png)

### Overview

This tracker was created to keep track of all the cookie recipes in my life using a database and REST API. The Cookie Tracker has full CRUD operations. The website will have the ability to search for cookies by id, or keyword. If interested you can see a full  list of the cookies available in the datebase as well.

### Expected Routes

| Return Type   | Route                            | Functionality                      |
|---------------|----------------------------------|------------------------------------|
| `List<Cookie>`|`GET api/cookies`                 | Gets all cookies                   |
| `Cookie`      |`GET api/cookies/{id}`            | Gets one cookie by id              |
| `Cookie`      |`POST api/cookies`                | Creates a new cookie               |
| `Cookie`      |`PUT api/cookies/{id}`            | Replaces an existing cookie by id  |
| `void`        |`DELETE api/cookies/{id}`         | Deletes an existing cookie by id   |
| `List<Cookie>`|`GET api/cookies/search{keyword}` | Gets cookies with matching keyword |

### Technologies Used:

* Java
* JPA
* REST API
* Spring Boot
* MySQL Workbench
* AWS ec2
* Gradle
* Postman
* JSON
* JUnit Testing

### Lessons Learned

I was very comfortable with the first part of this project. I know that won't be the case for the second part, and look forward to getting my hands dirty in JavaScript.

### How To Run

Use the above routes to access the back end information. Next week there will be a website to access the database.

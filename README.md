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

Week 2 - Additional
* JS
* DOM Manipulation

Week 3 - Additional
* Angular
* Visual Studio Code
* Bootstrap

### Lessons Learned

I was very comfortable with the first part of this project. I know that won't be the case for the second part, and look forward to getting my hands dirty in JavaScript.

As I went on there was definitely more to learn. I wanted to add some curb appeal to the site, so I worked more in bootstrap than I had previously. It's a learning curve to get things placed where you'd like them, and to still look how you want. I also really wanted more search options. I intended to put a search by texture in using a pipe, but didn't get it to work in time. Also, I have not found any decent way to display the ingredients list. It should have just been it's own table connected to the cookies, so that they could have been line separated in the end, and been more visually uniform across the board.

### How To Run
Week 1
Use the above routes to access the back end information. Next week there will be a website to access the database.

Week 2
When you first load the webpage, there is a table of the available cookies to view. By clicking on one of the cookie rows, it will display all of the cookie information available in the database, for that one cookie. The other option to get all of the information to display is by searching for the id # that is provided for each cookie in the table. There is also the option to add a new cookie to the database, or update an existing cookie.

Week 3

The front page of the website has two options that can be closed upon clicking. The first option is the list of all the cookies in the database. It only has the id number, cookie name, description, picture, and if you need to the option to delete the cookie. If you want more information about the cookie, just click on the cookie name and it'll display all of the information the database has about said cookie. From there you can update the cookie's information, or click back to the main list. If you'd like to add a cookie to the database, just click on the bottom bar of adding a cookie. From there you're able to add all of the info, and it will immediately show in the list of cookies if you open the list back up. 

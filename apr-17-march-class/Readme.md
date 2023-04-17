# School API

### **ENTITIES/Resources**
* Students
  * firstname
  * lastname
  * email
  * matricNo
  
* Tutors
  * firstname
  * lastname
  * email
  * matricNo

* Courses
  * title
  * code
  * tutor


System Analysis and Design
1. What do we want for this application?
   1. Register students
   2. Register a course
   3. See all their courses


Endpoints
* **GET** ***/courses*** : fetch all courses available in our school
* **GET** ***/courses/course_id***: Fetch a particular course












# *Application Programming Interface API*

***

* **Restful APIs**
* Graphql APIS
* Rpc APIs
* SOAP APIS

* **Restful APIs**
  * REPRESENTATIONAL STATE TRANSFER
  
* Examples
  * ***"/register"*** -> Students register.
  * 
  * ***"/courses"*** -> All courses.
* Methods
  * GET 
  ```json {
      "definition": Fetching a resource.
    ```
  * POST
  ```json {
      "definition": Creating a new resource.
    ```
  * PUT
  ```json {
      "definition": Creating/updating a resource.
  ```
  * DELETE
  ```json {
      "definition": Removing a resource.
  ```

***

### REVISION

* Requests:
* url [Compulsory]  "localhost:3000/courses/10?showTutor=fals"
  * query [compulsory] eg [show tutor]
  * parameters [not compulsory] for example [10]
* body [not compulsory]
* headers [compulsory]


### REQUEST-RESPONSE-LIFECYCLE


outside-world --> [Application] --> outside-world
[request]     [middlewares/Handlers]   [response]


***
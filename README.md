# **_short-url-service_**

it's a web service for shorten urls, it's also support api interface, it's built using Docker, NodeJS and ReactJs

## How to run the app

### Note

In order to run the whole app including Database and server you will need a docker to be installed.

### **Installation Steps**

1. Install docker and docker compose if they are note already installed.
2. Clone the the repository
3. inside the repository folder run `docker-compose up` this will build the whole app and run it.
4. Go to `http://localhost:3000` and test app.

### **Testing user interface Steps**

1. create a short URL by inserting the url you want to covert and click convert.
2. Go URL List and browse the list.

### **Testing API interface Steps**

- POST `http://localhost:3000/api/shorten` BODY `{"url":"https://google.com"}` Creates a short URL and store it in the database and response with {"short":"some-short-url"}
- GET `http://localhost:3000/api/<shortUrl>` redirects you to the URL associated with `<shortUrl>`
- GET `http://localhost:3000/api/stats/<shortUrl>` response with the total access count of the `<shortUrl>` e.g. `{"accessCount":10"}`
- GET `http://localhost:3000/api/urls` response with the first 20 URLs stored in the database
- GET `http://localhost:3000/api/urls?offset=20&lmit=40` response with 20 URLs based on the query offset, if there are any.

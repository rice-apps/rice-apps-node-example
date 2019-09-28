# Example Node.js Server with Express

To run, navigate to the project directory in terminal and  type `npm start` or `node server.js`.

## Routes
1. '/' (GET) - response is simple "hello world" home page
    * Params: None

2. '/team/:name' (GET) - response is a string that changes whether or not a team member is making the request
    * Params: name - first name of a team member

2. '/pokemon/:name' (GET) - return the response of the pokemon API for that specific pokemon
    * Params: name - name of a pokemon

3. '/secret' (GET) -  response is a secret image ;)
    * Params: None

5. '/count' (POST) - Displays a simple page where you can increment the count by clicking a button.
    * Params: None
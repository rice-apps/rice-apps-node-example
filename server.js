const express = require('express')
const request = require('request');
const app = express()
const port = 3000

// Home page of the website
const homepage = `
<h1>Hello World</h1> 
<p>This server is SO GOOD you guys. Unlike SOME other servers, 
this one won't kick you out of Applebees for eating the wax fruit.</p>
`

// Get request that displays the home page
app.get('/', (req, res) => res.send(homepage)
)

// Names of the members of the best team
const teamNames = ['jamie', 'will', 'skylar', 'peter', 'max', 'david', 'manan']
// Get request that will respond more enthusiastically if you are on the team.
app.get('/team/:name', function (req, res) {
    const name = req.params.name;
    if (teamNames.includes(name.toLowerCase())) {
        res.send("Nice to see you, team member " + name + " :D")
    } else {
        res.send("Thanks for visiting " + name + " :)")
    }
})

// Get request that will get information about the pokemon you've named
app.get('/pokemon/:name', function (req, res) {
    const name = req.params.name;
    res.setHeader('Content-Type', 'application/json');
    request("https://pokeapi.co/api/v2/pokemon-species/"+name.toString(), (err, response, body) => {
        // If there is an error, return an error string.
        if (err) {
            console.log(err);
            res.send(name + " is not the name of a pokemon (yet)")
        }
        // Otherwise, send the response body.
        res.send(body);
    })
})

// Get request that responds with a secret image
app.get('/secret', function (req, res) {
    console.log("This could be you!")
    res.sendFile('/secret.jpg', { root: '.' })
});

// Counting button
const count_button = `
<form action="count" method="post">
    <button name="inc" value="1">Count</button>
</form>
`
// Number of times this page has been requested.
let count = 0;
app.get('/count', (req, res) => {
    res.send(count_button + "<p>" + count + "</p>");
})
app.post('/count', (req, res) => {
    count += 1;
    res.send(count_button + "<p>" + count + "</p>");
})

// Starts the server.
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
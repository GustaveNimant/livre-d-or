let express = require ('express'); 
let app = express ();

let port = 8080;

// Moteur de template
app.set ('view engine', 'ejs');

// Routing : 
app.get ('/', (request, response) => {
    response.render ('pages/index', {test: 'Ceci est un test'})
});

app.listen (port, () => {
    console.log ("Server listening on port http://localhost:" + port)
});


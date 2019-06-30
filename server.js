let express = require ('express'); 
let app = express ();

let port = 8080;

// Routing : 
app.get ('/', (request, response) => {
    response.send ('Salut !');
});

app.listen (port, () => {
    console.log ("Server listening on port http://localhost:" + port)
});


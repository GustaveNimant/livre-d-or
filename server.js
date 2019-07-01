let express = require ('express'); 
let app = express ();

let bodyParser = require ('body-parser');

// Middleware body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let port = 8080;

// Moteur de template
app.set ('view engine', 'ejs');

// fichiers statics /assets/public
app.use('/assets', express.static('public'));

// Routing : 
app.get ('/', (request, response) => {
    response.render ('pages/index', {test: 'Ceci est un test'})
});

app.post ('/', (request, response) => {
    if (request.body.message === undefined ||request.body.message === '' ){
	response.render('pages/index', {error :"Vous n'avez pas posté de message"});
    }
});

app.listen (port, () => {
    console.log ("Server listening on port http://localhost:" + port)
});


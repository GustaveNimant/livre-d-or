let express = require ('express'); 
let app = express ();

let bodyParser = require ('body-parser');
let session = require ('express-session');

// Middleware body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let port = 8080;

// Moteur de template
app.set ('view engine', 'ejs');

// fichiers statics /assets/public
app.use('/assets', express.static('public'));

// sessions cookie
app.use(session({
  secret: 'blablabla',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } /* pas de https */
}));

// Routing : 
app.get ('/', (request, response) => {
    if (request.session.error) {
	response.locals.error = request.session.error;
	request.session.error = undefined;
    };
    response.render ('pages/index');
});

app.post ('/', (request, response) => {
    if (request.body.message === undefined ||request.body.message === '' ){
	request.session.error = "Il y a une erreur";
	response.redirect ('/');
    }
});

app.listen (port, () => {
    console.log ("Server listening on port http://localhost:" + port)
});


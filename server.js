let express = require ('express'); 
let app = express ();

let bodyParser = require ('body-parser');
let session = require ('express-session');

let port = 8080;

// Moteur de template
app.set ('view engine', 'ejs');

// fichiers statics /assets/public
app.use('/assets', express.static('public'));

// Middleware body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// sessions cookie
app.use(session({
  secret: 'blablabla',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } /* pas de https */
}));

// Middleware flash
app.use(require('./middlewares/flash'));

// Routing : 
app.get ('/', (request, response) => {
    console.log(request.session);
    response.render ('pages/index');
});

app.post ('/', (request, response) => {
    if (request.body.message === undefined ||request.body.message === '' ){
	request.flash('error', "Vous n'avez pas posté de message");
	response.redirect ('/');
    }
});

app.listen (port, () => {
    console.log ("Server listening on port http://localhost:" + port)
});


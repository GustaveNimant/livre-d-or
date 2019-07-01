module.exports = function (request, response, next) {

    if (request.session.flash){
	console.log('if ...');
	response.locals.flash = request.session.flash;
	request.session.flash = undefined;
    }
    
    request.flash = function(type, content){
	if (request.session.flash === undefined){
	    request.session.flash = [];
	}
	request.session.flash[type] = content;
    }
    next();
}

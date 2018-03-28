const Authentication = require('./controllers/authentication');
const passwordService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {

    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup', Authentication.signup);

    app.get('/dashboard', requireAuth, function(req,res){
    	res.send('welcome to dashboard');
    });
};

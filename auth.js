/**
 * @class  Auth
 * @author  Flavio De Stefano <flavio.destefano@caffeinalab.com>
 * Authentication module interfaced with an API server
 */

/**
 * * `loginUrl` URL to login-in
 * * `logoutUrl` URL to logout
 * @type {Object
 */
var config = _.extend({
	loginUrl: '/login',
	logoutUrl: '/logout'
}, Alloy.CFG.T.auth);
exports.config = config;

var Q = require('T/ext/q');
var HTTP = require('T/http');
var Event = require('T/event');

function load(n) {
	return require('T/auth/'+n);
}

var silent = true;
var Me = null;


/**
 * @method getUser
 * Get current User model
 * @return {Object}
 */
exports.getUser = function(){
	return Me;
};

/**
 * Check if the user is logged in
 *
 * @return {Boolean}
 */
exports.isLoggedIn = function() {
	return Me !== null;
};


/**
 * @method getUserID
 * Get current User ID
 * @return {Number}
 */
exports.getUserID = function(){
	if (Me === null) return null;
	return Me.id;
};


function getStoredDriver(){
	if (!Ti.App.Properties.hasProperty('auth.driver')) return null;
	return Ti.App.Properties.getString('auth.driver');
}

/**
 * @method isStoredLoginAvailable
 * Check if the AL feature is available
 * @return {Boolean}
 */
exports.isStoredLoginAvailable = function() {
	return getStoredDriver() != null;
};


function driverLogin(opt) {
	var q = Q.defer();

	load(opt.driver)[ opt.stored === true ? 'storedLogin' : 'login' ]({
		data: opt.data,
		success: q.resolve,
		error: q.reject
	});

	return q.promise;
}

function apiLogin(data) {
	var q = Q.defer();

	HTTP.send({
		url: config.loginUrl,
		method: 'POST',
		data: data,
		silent: silent,
		success: q.resolve,
		error: q.reject
	});

	return q.promise;
}

function fetchUserModel(info) {
	var q = Q.defer();

	Me = Alloy.createModel('user', { id: info.id || 'me' });
	Me.fetch({
		http: {
			refresh: true,
			cache: false,
			silent: silent
		},
		success: q.resolve,
		error: q.reject
	});

	return q.promise;
}


/**
 * @method login
 * Login using selected driver
 * @param  {Object} opt
 */
exports.login = function(opt) {
	if (opt.driver == null) throw new Error('Please set a driver');
	silent = false;

	driverLogin(opt)
	.then(apiLogin)
	.then(fetchUserModel)
	.then(function(){
		Ti.App.Properties.setObject('auth.me', Me.toJSON());
		Ti.App.Properties.setString('auth.driver', opt.driver);
	})

	.then(function(){
		Event.trigger('auth.success', { id: Me.id });
		opt.success({ id: Me.id });
	})
	.fail(function(err){
		Event.trigger('auth.error', err);
		opt.error(err);
	});
};

/**
 * @method storedLogin
 * Login using stored driver
 * @param  {Object} opt
 */
exports.storedLogin = function(opt) {
	silent = true;

	if (HTTP.isOnline()) {
		exports.login(_.extend(opt, {
			stored: true,
			driver: getStoredDriver()
		}));
	} else {

		if (Ti.App.Property.hasObject('auth.me')) {
			Me = Alloy.createModel('user', Ti.App.Properties.getObject('auth.me'));
			opt.success();
		} else {
			opt.error({
				message: L('auth_error_nostoredinfo')
			});
		}

	}
};

/**
 * @method logout
 * @param  {Object} opt
 */
exports.logout = function(callback) {
	var id = getUserID();
	var storedDriver = getStoredDriver();

	// Remove stored infos
	Me = null;
	Ti.App.Properties.removeProperty('auth.me');
	Ti.App.Properties.removeProperty('auth.driver');

	// Remove cache because can contain sensibile data
	Cache.prune();
	HTTP.resetCookies();

	// Logout on used driver
	load(storedDriver).logout(function(){
		Event.trigger('auth.logout', { id: id });
		if (_.isFunction(callback)) callback();
	});
};

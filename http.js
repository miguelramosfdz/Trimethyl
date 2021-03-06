/**
 * @class  HTTP
 * @author  Flavio De Stefano <flavio.destefano@caffeinalab.com>
 * HTTP network module
 */

/**
 * * `base` The base URL of the API. Default: `http://localhost`
 * * `timeout` Global timeout for the requests; after this value (express in milliseconds) the requests throw an error. Default `10000`
 * * `headers` Global headers for all requests. Default: `{}`
 * * `autoOfflineMessage` Enable the automatic alert if the connection is offline. Default `true`
 * @type {Object}
 */
var config = _.extend({
	base: 'http://localhost',
	timeout: 10000,
	headers: {},
	autoOfflineMessage: true,
}, Alloy.CFG.T.http);
exports.config = config;


var errorHandler = function(err) {
	require('T/dialog').alert(L('Error'), require('T/util').getErrorMessage(err));
};

/**
 * @method getErrorHandler
 * @return {Function}
 */
exports.getErrorHandler = function() {
	return errorHandler;
};


/**
 * Check the internet connectivity
 * @return {Boolean} The status
 */
function isOnline() {
	return Ti.Network.online;
}
exports.isOnline = isOnline;


var headers = _.clone(config.headers);

/**
 * @method getHeaders
 * @return {Object}
 */
exports.getHeaders = function() {
	return headers;
};

/**
 * @method addHeader
 * Add a global header for all requests
 * @param {String} key 		The header key
 * @param {String} value 	The header value
 */
exports.addHeader = function(key, value) {
	headers[key] = value;
};

/**
 * @method removeHeader
 * Remove a global header
 * @param {String} key 		The header key
 */
exports.removeHeader = function(key) {
	delete headers[key];
};

/**
 * @method resetHeaders
 * Reset all globals headers
 */
exports.resetHeaders = function() {
	headers = {};
};


/**
 * @property queue
 * Queue for HTTP Requests
 * @type {Function}
 */
var queue = [];

/**
 * @method isQueueEmpty
 * Check if the requests queue is empty
 * @return {Boolean}
 */
exports.isQueueEmpty = function(){
	return _.isEmpty(queue);
};

/**
 * @method getQueue
 * Get the current requests queue
 * @return {Array}
 */
exports.getQueue = function(){
	return queue;
};

/**
 * @method addToQueue
 * Add a request to queue
 * @param {HTTP.Request} request
 */
exports.addToQueue = function(request) {
	queue[request.hash] = request;
};

/**
 * @method removeFromQueue
 * Remove a request from queue
 */
exports.removeFromQueue = function(request) {
	delete queue[request.hash];
};


/**
 * @method resetCookies
 * Reset the cookies for all requests
 */
exports.resetCookies = function() {
	Ti.Network.createHTTPClient().clearCookies(config.base);
};


/**
 * The main function of the module.
 *
 * Create an HTTP.Request and resolve it
 *
 * @param  {Object}	 opt 		The request dictionary
 * * * **url**: The endpoint URL
 * * **method**: The HTTP method to use (GET|POST|PUT|PATCH|..)
 * * **headers**: An Object key-value of additional headers
 * * **timeout**: Timeout after stopping the request and triggering an error
 * * **cache**: Set to false to disable the cache
 * * **success**: The success callback
 * * **error**: The error callback
 * * **format**: Override the format for that request (like `json`)
 * * **ttl**: Override the TTL seconds for the cache
 * @return {HTTP.Request}
 */
function send(opt) {
	var request = new (require('T/http/request'))(opt);
	request.resolve();
	return request;
}
exports.send = send;


/**
 * @method get
 * Make a GET request to that URL
 * @param  {String}   	url The endpoint url
 * @param  {Function} 	success  Success callback
 * @param  {Function} 	error Error callback
 * @return {HTTP.Request}
 */
exports.get = function(url, success, error) {
	return send({
		url: url,
		method: 'GET',
		success: success,
		error: error
	});
};


/**
 * @method post
 * Make a POST request to that URL
 * @param  {String}   	url 		The endpoint url
 * @param  {Object}   	data 		The data
 * @param  {Function} 	success  Success callback
 * @param  {Function} 	error 	Error callback
 * @return {HTTP.Request}
 */
exports.post = function(url, data, success, error) {
	return send({
		url: url,
		method: 'POST',
		data: data,
		success: success,
		error: error
	});
};


/**
 * @method  getJSON
 * Make a GET request to that url with that data and setting the format forced to JSON
 * @param  {String}   	url 		The endpoint url
 * @param  {Object}   	data 		The data
 * @param  {Function} 	success  Success callback
 * @param  {Function} 	error 	Error callback
 * @return {HTTP.Request}
 */
exports.getJSON = function(url, data, success, error) {
	return send({
		url: url,
		data: data,
		method: 'GET',
		format: 'json',
		success: success,
		error: error
	});
};


/**
 * @method  postJSON
 * Make a POST request to that url with that data and setting the format forced to JSON
 * @param  {String}   	url 			The endpoint url
 * @param  {Object}   	data 			The data
 * @param  {Function} 	success  	Success callback
 * @param  {Function} 	error 		Error callback
 * @return {HTTP.Request}
 */
exports.postJSON = function(url, data, success, error) {
	return send({
		url: url,
		data: data,
		method: 'POST',
		format: 'json',
		success: success,
		error: error
	});
};


/**
 * @method download
 * @param  {String}  			url  				The url
 * @param  {String|Ti.File}  	filename  		File name to save
 * @param  {Function}  			success  		Success callback
 * @param  {Function} 			error  			Error callback
 * @param  {Function}  			ondatastream  	Progress callback
 * @return {HTTP.Request}
 */
exports.download = function(url, file, success, error, ondatastream) {
	return send({
		url: url,
		cache: false,
		refresh: true,
		format: 'blob',
		ondatastream: ondatastream,
		success: function(text, data) {
			var f = file.nativePath ? file : Ti.Filesystem.getFile(Util.getAppDataDirectory(), file);
			if (f.write(data)) {
				if (_.isFunction(success)) success(f);
			} else {
				if (_.isFunction(error)) error({ message: L('http_filewrite_error') });
			}
		},
		error: error
	});
};

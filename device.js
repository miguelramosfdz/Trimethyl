/**
 * @class  Device
 * @author  Flavio De Stefano <flavio.destefano@caffeinalab.com>
 *
 * Query current device for informations
 */

/**
 * @type {Object}
 */
var config = _.extend({
}, Alloy.CFG.T.device);
exports.config = config;


/**
 * @method getScreenDensity
 * Get the device screen density
 *
 * @return {Number} The density
 */
exports.getScreenDensity = function() {
	if (OS_ANDROID) return Ti.Platform.displayCaps.logicalDensityFactor;
	return Titanium.Platform.displayCaps.dpi/160;
};

/**
 * @method getScreenWidth
 * Get the device screen width
 *
 * @return {Number} The width
 */
exports.getScreenWidth = function() {
	if (OS_IOS) return Ti.Platform.displayCaps.platformWidth;
	return Ti.Platform.displayCaps.platformWidth/Ti.Platform.displayCaps.logicalDensityFactor;
};

/**
 * @method getScreenHeight
 * Get the device screen width
 *
 * @return {Number} The height
 */
exports.getScreenHeight = function() {
	if (OS_IOS) return Ti.Platform.displayCaps.platformHeight;
	return Ti.Platform.displayCaps.platformHeight/Ti.Platform.displayCaps.logicalDensityFactor;
};

/**
 * @method isSimulator
 * Check if current device is a Simulator
 * @return {Boolean}
 */
exports.isSimulator = function() {
	return Ti.Platform.model === 'Simulator' || Ti.Platform.model.indexOf('sdk') !== -1;
};

/**
 * @method isIPad
 * @return {Boolean}
 */
exports.isIPad = function() {
	return Ti.Platform.osname === 'ipad';
};


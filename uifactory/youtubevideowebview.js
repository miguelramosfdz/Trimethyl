/**
 * @class  UIFactory.YoutubeVideoWebView
 * @author  Flavio De Stefano <flavio.destefano@caffeinalab.com>
 * View that contain a Youtube video.
 * Internally use a WebView to provide the content.
 *
 * To provide the Video ID, you need to pass to the `videoId` property.
 * All property set in the `youtube` property are passed into the Youtube API.
 *
 * On iOS, clicking on the video cause the video to play in native iOS player in fullscreen.
 *
 * More info at [https://developers.google.com/youtube/iframe_api_reference](https://developers.google.com/youtube/iframe_api_reference)
 *
 * @param  {Object} args [description]
 * @return {Ti.UI.WebView}      [description]
 */

module.exports = function(args) {
	args = _.extend(args, {
		disableBounce : true,
		willHandleTouches : true,
		showScrollbars : false,
		scalesPageToFit : false,
		hideLoadIndicator : true,
		enableZoomControls : false,
		youtube: {}
	},
	OS_ANDROID ? {
		overScrollMode : Ti.UI.Android.OVER_SCROLL_NEVER,
		pluginState : Ti.UI.Android.WEBVIEW_PLUGINS_ON
	} : {});


	var yt = _.extend(_.pick(args, 'videoId'), args.youtube);
	if (yt.width == null) yt.width = args.width;
	if (yt.height == null) yt.height = args.height;

	var $this = Ti.UI.createWebView(args);

	var html = '<!doctype html><html><head>';
	html += '<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no" />';
	html += '<style>html,body{padding:0;background:black;margin:0;overflow:hidden;}</style>';
	html += '</head><body><div id="player"></div>';
	html += '<script src="http://www.youtube.com/player_api"></script>';
	html += '<script>function onYouTubePlayerAPIReady(){window.player=new YT.Player("player",'+JSON.stringify(yt)+');}</script>';
	html += '</body></html>';
	$this.html = html;

	return $this;
};
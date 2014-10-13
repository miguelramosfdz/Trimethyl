Ext.data.JsonP.Geo({"tagname":"class","name":"Geo","autodetected":{},"files":[{"filename":"geo.js","href":"geo.html#Geo"}],"author":[{"tagname":"author","name":"Flavio De Stefano","email":"flavio.destefano@caffeinalab.com"}],"members":[{"name":"config","tagname":"property","owner":"Geo","id":"property-config","meta":{}},{"name":"checkForDependencies","tagname":"method","owner":"Geo","id":"method-checkForDependencies","meta":{}},{"name":"distanceInKm","tagname":"method","owner":"Geo","id":"method-distanceInKm","meta":{}},{"name":"enableServicesAlert","tagname":"method","owner":"Geo","id":"method-enableServicesAlert","meta":{}},{"name":"geocode","tagname":"method","owner":"Geo","id":"method-geocode","meta":{}},{"name":"getCurrentPosition","tagname":"method","owner":"Geo","id":"method-getCurrentPosition","meta":{}},{"name":"getRegionBounds","tagname":"method","owner":"Geo","id":"method-getRegionBounds","meta":{}},{"name":"markerCluster","tagname":"method","owner":"Geo","id":"method-markerCluster","meta":{}},{"name":"originalErrorHandler","tagname":"method","owner":"Geo","id":"method-originalErrorHandler","meta":{}},{"name":"reverseGeocode","tagname":"method","owner":"Geo","id":"method-reverseGeocode","meta":{}},{"name":"startNavigator","tagname":"method","owner":"Geo","id":"method-startNavigator","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Geo","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/geo.html#Geo' target='_blank'>geo.js</a></div></pre><div class='doc-contents'><p>Provide useful method for geolocation events</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-config' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Geo'>Geo</span><br/><a href='source/geo.html#Geo-property-config' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Geo-property-config' class='name expandable'>config</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>gpsAccuracy: Accuracy of Geo. ...</div><div class='long'><ul>\n<li><strong>gpsAccuracy</strong>: Accuracy of Geo. Must be one of <code>'ACCURACY_HIGH'</code>, <code>'ACCURACY_LOW'</code></li>\n<li><strong>geocodeUseGoogle</strong>: Tell to use Google Services instead of Titanium geocoding services.</li>\n<li><strong>clusterPixelRadius</strong>: The clustering radius expressed in PX. Default: <code>15</code></li>\n<li><strong>clusterRemoveOutofBB</strong>: Tell the clustering to remove pins that are out of the bounding box. Default: <code>true</code></li>\n<li><strong>clusterMaxDelta</strong>: The value before the clustering is off. Default: <code>0.3</code></li>\n</ul>\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-checkForDependencies' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Geo'>Geo</span><br/><a href='source/geo.html#Geo-method-checkForDependencies' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Geo-method-checkForDependencies' class='name expandable'>checkForDependencies</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Check if the Google Play Services are installed and updated, otherwise Maps doesn't work and the app crashes. ...</div><div class='long'><p>Check if the Google Play Services are installed and updated, otherwise Maps doesn't work and the app crashes.</p>\n\n<p>It the check fail, an error is displayed that redirect to the Play Store, and the app is terminated.</p>\n\n<p>On iOS, this check simply return true</p>\n</div></div></div><div id='method-distanceInKm' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Geo'>Geo</span><br/><a href='source/geo.html#Geo-method-distanceInKm' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Geo-method-distanceInKm' class='name expandable'>distanceInKm</a>( <span class='pre'>lat1, lon1, lat2, lon2</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the distance express in km between two points of the earth ...</div><div class='long'><p>Return the distance express in km between two points of the earth</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lat1</span> : Number<div class='sub-desc'><p>The latitude of first point</p>\n</div></li><li><span class='pre'>lon1</span> : Number<div class='sub-desc'><p>The longitude of first point</p>\n</div></li><li><span class='pre'>lat2</span> : Number<div class='sub-desc'><p>The latitude of second point</p>\n</div></li><li><span class='pre'>lon2</span> : Number<div class='sub-desc'><p>The longitude of second point</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The distance expressed in km</p>\n</div></li></ul></div></div></div><div id='method-enableServicesAlert' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Geo'>Geo</span><br/><a href='source/geo.html#Geo-method-enableServicesAlert' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Geo-method-enableServicesAlert' class='name expandable'>enableServicesAlert</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Alert the user that Location is off ...</div><div class='long'><p>Alert the user that Location is off</p>\n</div></div></div><div id='method-geocode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Geo'>Geo</span><br/><a href='source/geo.html#Geo-method-geocode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Geo-method-geocode' class='name expandable'>geocode</a>( <span class='pre'>request</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the coordinates of an address ...</div><div class='long'><p>Return the coordinates of an address</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>request</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getCurrentPosition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Geo'>Geo</span><br/><a href='source/geo.html#Geo-method-getCurrentPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Geo-method-getCurrentPosition' class='name expandable'>getCurrentPosition</a>( <span class='pre'>opt</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the current GPS coordinates of user using Ti.Geolocation.getCurrentPosition\n\nA geo.start event is triggered at st...</div><div class='long'><p>Get the current GPS coordinates of user using <code>Ti.Geolocation.getCurrentPosition</code></p>\n\n<p>A <code>geo.start</code> event is triggered at start,\nand a <code>geo.end</code> event is triggered on end</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>opt</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRegionBounds' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Geo'>Geo</span><br/><a href='source/geo.html#Geo-method-getRegionBounds' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Geo-method-getRegionBounds' class='name expandable'>getRegionBounds</a>( <span class='pre'>array, mulGap</span> ) : Map.MapRegionType<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the minimum MapRegion to include all annotations in array ...</div><div class='long'><p>Get the minimum MapRegion to include all annotations in array</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : Object<div class='sub-desc'><p>An array of annotations</p>\n</div></li><li><span class='pre'>mulGap</span> : Number<div class='sub-desc'><p>Gap multiplier</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Map.MapRegionType</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-markerCluster' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Geo'>Geo</span><br/><a href='source/geo.html#Geo-method-markerCluster' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Geo-method-markerCluster' class='name expandable'>markerCluster</a>( <span class='pre'>e, markers, [keys]</span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Process a set of markers and cluster them\n\nEach marker must be in this format:\n\n{\n    lat:    {Number},\n    lng:    {...</div><div class='long'><p>Process a set of markers and cluster them</p>\n\n<p>Each marker must be in this format:</p>\n\n<pre><code class=\"javascript\">{\n    lat:    {Number},\n    lng:    {Number},\n    id:     {Number (unique)}\n}\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'><p>The arguments retrived from TiMap.addEventListener('regionchanged', <strong>event</strong>)</p>\n</div></li><li><span class='pre'>markers</span> : Object<div class='sub-desc'><p>The markers <strong>must be</strong> an instance of <code>Backbone.Collection</code> or an Object id-indexed</p>\n</div></li><li><span class='pre'>keys</span> : Object (optional)<div class='sub-desc'><p>The keys of the object to get informations. Default: <code>{ latitude: 'lat', longitude: 'lng', id: 'id' }</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>An array of markers in this format:</p>\n\n<p>If the marker is a cluster, an object like\n<code>{ latitude: {Number}, longitude: {Number}, count: {Number} }</code> is passed,\notherwise, the ID of the marker in your marker collections.</p>\n\n<p>This is a sample code:</p>\n\n<pre><code>var Geo = T('geo');\nvar TiMap = require('ti.map');\n\nvar Me = Alloy.createCollection('whatever');\nMe.fetch({\n    success: function() {\n        updateMap(_.extend($.mapView.region, { source: $.mapView }));\n        $.mapView.addEventListener('regionchanged', updateMap);\n   }\n});\n\nfunction updateMap(e) {\n    var data = <a href=\"#!/api/Geo-method-markerCluster\" rel=\"Geo-method-markerCluster\" class=\"docClass\">Geo.markerCluster</a>(e, Me);\n    var annotations = [];\n\n    _.each(data, function(c){\n        if (_.isNumber(c)) {\n            var marker = Me.get(c);\n            annotations.push(TiMap.createAnnotation({\n                id: c,\n                latitude: marker.get('lat'),\n                longitude: marker.get('lng'),\n                title: marker.get('title'),\n            }));\n        } else {\n            annotations.push(TiMap.createAnnotation({\n                latitude: c.latitude,\n                longitude: c.longitude\n            }));\n        }\n    });\n\n    $.mapView.annotations = annotations;\n}\n</code></pre>\n</div></li></ul></div></div></div><div id='method-originalErrorHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Geo'>Geo</span><br/><a href='source/geo.html#Geo-method-originalErrorHandler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Geo-method-originalErrorHandler' class='name expandable'>originalErrorHandler</a>( <span class='pre'>e</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>The original error handler ...</div><div class='long'><p>The original error handler</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-reverseGeocode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Geo'>Geo</span><br/><a href='source/geo.html#Geo-method-reverseGeocode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Geo-method-reverseGeocode' class='name expandable'>reverseGeocode</a>( <span class='pre'>request</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the address with the specified coordinates ...</div><div class='long'><p>Return the address with the specified coordinates</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>request</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-startNavigator' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Geo'>Geo</span><br/><a href='source/geo.html#Geo-method-startNavigator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Geo-method-startNavigator' class='name expandable'>startNavigator</a>( <span class='pre'>lat, lng, [mode]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Open Apple Maps on iOS, Google Maps on Android and route from user location to defined location ...</div><div class='long'><p>Open Apple Maps on iOS, Google Maps on Android and route from user location to defined location</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lat</span> : Number<div class='sub-desc'><p>Desination latitude</p>\n</div></li><li><span class='pre'>lng</span> : Number<div class='sub-desc'><p>Destination longitude</p>\n</div></li><li><span class='pre'>mode</span> : String (optional)<div class='sub-desc'><p>GPS mode used (walking,driving)</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});
Ext.data.JsonP.UIFactory({"tagname":"class","name":"UIFactory","autodetected":{},"files":[{"filename":"uifactory.js","href":"uifactory.html#UIFactory"}],"author":[{"tagname":"author","name":"Flavio De Stefano","email":"flavio.destefano@caffeinalab.com"}],"members":[{"name":"createLabel","tagname":"method","owner":"UIFactory","id":"method-createLabel","meta":{}},{"name":"createListView","tagname":"method","owner":"UIFactory","id":"method-createListView","meta":{}},{"name":"createNavigationWindow","tagname":"method","owner":"UIFactory","id":"method-createNavigationWindow","meta":{}},{"name":"createTabbedBar","tagname":"method","owner":"UIFactory","id":"method-createTabbedBar","meta":{}},{"name":"createTextArea","tagname":"method","owner":"UIFactory","id":"method-createTextArea","meta":{}},{"name":"createTextField","tagname":"method","owner":"UIFactory","id":"method-createTextField","meta":{}},{"name":"createWindow","tagname":"method","owner":"UIFactory","id":"method-createWindow","meta":{}},{"name":"createYoutubeVideoWebView","tagname":"method","owner":"UIFactory","id":"method-createYoutubeVideoWebView","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-UIFactory","short_doc":"Provide XP UI elements to handle differences between platforms\n\nInspired to FokkeZB UTIL, thanks!\n\nYou can use in All...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/uifactory.html#UIFactory' target='_blank'>uifactory.js</a></div></pre><div class='doc-contents'><p>Provide XP UI elements to handle differences between platforms</p>\n\n<p>Inspired to FokkeZB UTIL, thanks!</p>\n\n<p>You can use in Alloy XML Views with <code>module=\"T/uifactory\"</code></p>\n\n<p>All new methods can be called automatically on UI-creation with its relative property.</p>\n\n<p>For example, if a module expose the method <code>setFooProperty</code>, you can assign\non creation using:</p>\n\n<pre><code>var me = T('uifactory').createBar({ fooProperty: 'a' })\n</code></pre>\n\n<p><strong>DON'T</strong> use the <code>me.fooProperty = [NEW VALUE]</code> syntax to assign the property, use <code>setFooProperty</code> instead.</p>\n\n<p><strong>DON'T</strong> use the <code>me.fooProperty</code> syntax to get the value, use <code>getFooProperty</code> instead.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-createLabel' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UIFactory'>UIFactory</span><br/><a href='source/uifactory.html#UIFactory-method-createLabel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UIFactory-method-createLabel' class='name expandable'>createLabel</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-createListView' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UIFactory'>UIFactory</span><br/><a href='source/uifactory.html#UIFactory-method-createListView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UIFactory-method-createListView' class='name expandable'>createListView</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-createNavigationWindow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UIFactory'>UIFactory</span><br/><a href='source/uifactory.html#UIFactory-method-createNavigationWindow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UIFactory-method-createNavigationWindow' class='name expandable'>createNavigationWindow</a>( <span class='pre'>args</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-createTabbedBar' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UIFactory'>UIFactory</span><br/><a href='source/uifactory.html#UIFactory-method-createTabbedBar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UIFactory-method-createTabbedBar' class='name expandable'>createTabbedBar</a>( <span class='pre'>args</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-createTextArea' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UIFactory'>UIFactory</span><br/><a href='source/uifactory.html#UIFactory-method-createTextArea' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UIFactory-method-createTextArea' class='name expandable'>createTextArea</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-createTextField' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UIFactory'>UIFactory</span><br/><a href='source/uifactory.html#UIFactory-method-createTextField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UIFactory-method-createTextField' class='name expandable'>createTextField</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-createWindow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UIFactory'>UIFactory</span><br/><a href='source/uifactory.html#UIFactory-method-createWindow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UIFactory-method-createWindow' class='name expandable'>createWindow</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-createYoutubeVideoWebView' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UIFactory'>UIFactory</span><br/><a href='source/uifactory.html#UIFactory-method-createYoutubeVideoWebView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/UIFactory-method-createYoutubeVideoWebView' class='name expandable'>createYoutubeVideoWebView</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});
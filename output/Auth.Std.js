Ext.data.JsonP.Auth_Std({"tagname":"class","name":"Auth.Std","autodetected":{},"files":[{"filename":"std.js","href":"std.html#Auth-Std"}],"author":[{"tagname":"author","name":"Flavio De Stefano","email":"flavio.destefano@caffeinalab.com"}],"members":[{"name":"handleLogin","tagname":"method","owner":"Auth.Std","id":"method-handleLogin","meta":{}},{"name":"login","tagname":"method","owner":"Auth.Std","id":"method-login","meta":{}},{"name":"logout","tagname":"method","owner":"Auth.Std","id":"method-logout","meta":{}},{"name":"lost","tagname":"method","owner":"Auth.Std","id":"method-lost","meta":{}},{"name":"reset","tagname":"method","owner":"Auth.Std","id":"method-reset","meta":{}},{"name":"signup","tagname":"method","owner":"Auth.Std","id":"method-signup","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Auth.Std","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/std.html#Auth-Std' target='_blank'>std.js</a></div></pre><div class='doc-contents'><p>Auth driver to handle Standard authentication</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-handleLogin' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Auth.Std'>Auth.Std</span><br/><a href='source/std.html#Auth-Std-method-handleLogin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Auth.Std-method-handleLogin' class='name expandable'>handleLogin</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Login to the API server using stored data ...</div><div class='long'><p>Login to the API server using stored data</p>\n</div></div></div><div id='method-login' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Auth.Std'>Auth.Std</span><br/><a href='source/std.html#Auth-Std-method-login' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Auth.Std-method-login' class='name expandable'>login</a>( <span class='pre'>data, success</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Login to the API server ...</div><div class='long'><p>Login to the API server</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Data passed to API</p>\n</div></li><li><span class='pre'>success</span> : Function<div class='sub-desc'><p>Callback when login success</p>\n</div></li></ul></div></div></div><div id='method-logout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Auth.Std'>Auth.Std</span><br/><a href='source/std.html#Auth-Std-method-logout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Auth.Std-method-logout' class='name expandable'>logout</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove any user data ...</div><div class='long'><p>Remove any user data</p>\n</div></div></div><div id='method-lost' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Auth.Std'>Auth.Std</span><br/><a href='source/std.html#Auth-Std-method-lost' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Auth.Std-method-lost' class='name expandable'>lost</a>( <span class='pre'>data, cb</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Send the password lost request to the API server ...</div><div class='long'><p>Send the <em>password lost</em> request to the API server</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Data passed to API</p>\n\n</div></li><li><span class='pre'>cb</span> : Function<div class='sub-desc'><p>Success callback</p>\n\n</div></li></ul></div></div></div><div id='method-reset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Auth.Std'>Auth.Std</span><br/><a href='source/std.html#Auth-Std-method-reset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Auth.Std-method-reset' class='name expandable'>reset</a>( <span class='pre'>data, cb</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Alias for lost ...</div><div class='long'><p>Alias for <a href=\"#!/api/Auth.Std-method-lost\" rel=\"Auth.Std-method-lost\" class=\"docClass\">lost</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Data passed to API</p>\n\n</div></li><li><span class='pre'>cb</span> : Function<div class='sub-desc'><p>Success callback</p>\n\n</div></li></ul></div></div></div><div id='method-signup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Auth.Std'>Auth.Std</span><br/><a href='source/std.html#Auth-Std-method-signup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Auth.Std-method-signup' class='name expandable'>signup</a>( <span class='pre'>data, callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Signup to the API server ...</div><div class='long'><p>Signup to the API server</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Data passed to API</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>Success callback</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});
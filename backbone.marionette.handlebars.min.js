/*! Backbone.Marionette.Handlebars - v0.2.0
------------------------------
Build @ 2012-09-13
Documentation and Full License Available at:
http://asciidisco.github.com/Backbone.Marionette.Handlebars/index.html
git://github.com/asciidisco/Backbone.Marionette.Handlebars.git
Copyright (c) 2012 Sebastian Golasch <public@asciidisco.com>

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the

Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.*/
(function(e,t,n,r,i,s,o){"use strict";typeof r=="object"?i.exports=s(n("underscore"),n("backbone"),n("backbone.marionette")):typeof n=="function"&&typeof t=="function"&&t.amd?n(["underscore","backbone","backbone.marionette"],function(t,n){return t=t===o?e._:t,n=n===o?e.Backbone:n,e.returnExportsGlobal=s(t,n,e)}):e.returnExportsGlobal=s(e._,e.Backbone)})(this,this.define,this.require,this.exports,this.module,function(e,t,n,r){"use strict";var i;return i=t.Marionette.Renderer.render,t.Marionette.Renderer.render=function(t,n){return e.isObject(t)&&t.type==="handlebars"?t.template(e.extend(n,t.data),t.options):i(t,n)},t.Marionette});
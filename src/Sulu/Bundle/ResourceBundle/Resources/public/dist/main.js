require.config({paths:{suluresource:"../../suluresource/dist",suluresourcecss:"../../suluresource/css","type/conditionSelection":"../../suluresource/dist/components/condition-selection/condition-selection-type","filtersutil/toolbarExtensionHandler":"../../suluresource/dist/components/filters/util/toolbar-extension-handler"}}),define(["filtersutil/toolbarExtensionHandler","css!suluresourcecss/main"],function(a){"use strict";return{name:"SuluResourceBundle",initialize:function(b){var c=b.sandbox;b.components.addSource("suluresource","/bundles/suluresource/dist/components"),c.mvc.routes.push({route:"resource/filters/:type",callback:function(a){var c=b.sandbox.sulu.getDefaultContentLocale();return'<div data-aura-component="filters@suluresource" data-aura-display="list" data-aura-type="'+a+'" data-aura-locale="'+c+'"/>'}}),c.mvc.routes.push({route:"resource/filters/:type/:locale/add",callback:function(a,b){return'<div data-aura-component="filters@suluresource" data-aura-display="form" data-aura-type="'+a+'" data-aura-locale="'+b+'"/>'}}),c.mvc.routes.push({route:"resource/filters/:type/:locale/edit::id/:details",callback:function(a,b,c){return'<div data-aura-component="filters@suluresource" data-aura-display="form" data-aura-type="'+a+'" data-aura-locale="'+b+'" data-aura-id="'+c+'"/>'}}),a.initialize(b)}}});
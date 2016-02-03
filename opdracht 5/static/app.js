
(function() {
	
	"use strict"

	var app = {
		init: function() {
			routes.init();
		}
	};

	var routes = {
		init: function() {
			window.addEventListener('hashchange', function(hash) {
				console.log(hash);
			}, false);
		}
	};

	var sections = {
		toggle: function(route) {
			

		}
	}

	
	
	app.init();

}());
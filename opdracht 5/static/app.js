
(function() {  // use IIFE to avoid global vars
	
	"use strict" // with strict mode, you can not, for ecemple, use undeclared variables

	var app = { // literal object
		init: function() { 
			routes.init(); // run the function app.routes.init.
		}
	};


	var routes = { //routes function

	    oldUrl: "",
	    newUrl: "",

		init: function () { //method
			sections.toggle(null, 'home'); 
			window.addEventListener('hashchange', function (event) { //if the hash changes run sections.toggle

				this.newUrl = event.newURL.split('#')[1];
				this.oldUrl = event.oldURL.split('#')[1];

				sections.toggle(this.oldUrl, this.newUrl);

			}, false);
		}
	};

	var sections = { // toggle between the sections
		toggle: function (oldRoute, newRoute) {
			var oldRouteElement,
			    newRouteElement = false;


			// desired section is shown and will be hidden from all the other sections
			if (oldRoute) {

				oldRouteElement = document.getElementById(oldRoute);
				oldRouteElement.classList.add('invisible');
			}

			newRouteElement = document.getElementById(newRoute);
			newRouteElement.classList.remove('invisible');

		}
	}

	app.init(); //run the app

}());
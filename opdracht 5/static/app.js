
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
	    oldHash: "",
	    newHash: "",

		init: function () { //method
			sections.toggle(null, 'home'); 
			window.addEventListener('hashchange', function (event) { //if the hash changes run sectons.toggle

				this.newUrl = event.newURL.split('#'); //https://css-tricks.com/snippets/javascript/get-url-and-url-parts-in-javascript/
				this.oldUrl = event.oldURL.split('#');

				this.newHash = this.newUrl[1];

				this.oldHash = oldUrl[1];

				sections.toggle(oldHash, newHash);

			}, false);
		}
	};

	var sections = { //toggle between the sections
		toggle: function (oldHash, newHash) {
			var oldHashElement,
			    newHashElement = false;


			// gewenste sectie wordt getoond en alle andere secties (in dit geval één) worden verborgen
			if (oldHash) {

				oldHashElement = document.getElementById(oldHash); 
				oldHashElement.classList.add('invisible');
			}

			newHashElement = document.getElementById(newHash);
			newHashElement.classList.remove('invisible');

		}
	}

	
	
	app.init(); //run the app

}());
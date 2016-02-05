
(function() { 
	
	"use strict" 

	var app = { 
		init: function() { 
			routes.init(); //routes init aanroepen
		}
	};


	var routes = {//object literal

	    oldUrl: "",
	    newUrl: "",
	    oldHash: "",
	    newHash: "",

		init: function () { //method
			sections.toggle(null, 'home'); 
			window.addEventListener('hashchange', function (event) { // De eventlistener verwijst naar sections.toggle(route) met de route die je hebt aangeklikt als parameter

				this.newUrl = event.newURL.split('#'); //https://css-tricks.com/snippets/javascript/get-url-and-url-parts-in-javascript/
				this.oldUrl = event.oldURL.split('#');


				this.newHash = this.newUrl[1];
				// console.log('newHash: ' + this.newHash);

				this.oldHash = oldUrl[1];
				// console.log('oldHash: ' + this.oldHash);

				sections.toggle(oldHash, newHash);

			}, false);
		}
	};

	var sections = {
		toggle: function (oldHash, newHash) {
			var oldHashElement,
			    newHashElement = false;


			// gewenste sectie wordt getoond en alle andere secties (in dit geval één) worden verborgen
			if (oldHash) {

				oldHashElement = document.getElementById(oldHash); //id?
				oldHashElement.classList.add('invisible');
			}

			newHashElement = document.getElementById(newHash);
			newHashElement.classList.remove('invisible');

		}
	}

	
	
	app.init(); //applicatie starten

}());
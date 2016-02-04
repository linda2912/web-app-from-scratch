
(function() {
	
	"use strict"

	var app = {
		init: function() {
			routes.init();
		}
	};

	var routes = {

	    oldUrl: "",
	    newUrl: "",
	    oldHash: "",
	    newHash: "",

		init: function () {
			window.addEventListener('hashchange', function (event) {
				console.log(event);

				this.newUrl = event.newURL.split('#');
				this.oldUrl = event.oldURL.split('#');

				this.newHash = this.newUrl[1];
				console.log('newHash: ' + this.newHash);

				this.oldHash = oldUrl[1];
				console.log('oldHash: ' + this.oldHash);

				sections.toggle(oldHash, newHash);

			}, false);
		}
	};

	var sections = {
		toggle: function (oldHash, newHash) {

			var oldHashElement,
			    newHashElement = false;


			// Oldroute uitzetten
			if (oldHash) {

				oldHashElement = document.getElementById(oldHash);
				oldHashElement.classList.add('invisible');
			}

			newHashElement = document.getElementById(newHash);
			newHashElement.classList.remove('invisible');

		}
	}

	
	
	app.init();

}());
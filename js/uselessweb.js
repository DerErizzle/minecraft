function uselessWebButton(button, popup) {
	// UI elements
	var buttonElement = button;
	var popupElement = popup;

	var initialClick = false;
	var randomRange = 6;

	// Useless websites: url | uses flash
	// Commented out websites which have crashed.
	var sitesList = [
		["https://www.youtube.com/embed/2YIFmYUH8pk", false],
		["https://www.youtube.com/embed/txTup-COEW4", false],
		["https://www.youtube.com/embed/1gKuzvWTVJw", false],
		//["https://www.youtube.com/embed/J8NzIiCfIFY", false], //Crashed warum auch immer
		["https://www.youtube.com/embed/8g5hf2j54V0", false],
		["https://www.youtube.com/embed/NMV2iVetgg8", false],
		["https://www.youtube.com/embed/lR2UOUTglOM", false],
		["https://www.youtube.com/embed/MirHomiL2t0", false],
		["https://www.youtube.com/embed/YQAuu-WHWA8", false],
		//["https://www.youtube.com/embed/ARAAx5q5lxQ", false], Citybuild
		["https://www.youtube.com/embed/siKBgyKJMxA", false],
		["https://www.youtube.com/embed/PL5MWmaVlAg", false],
		["https://www.youtube.com/embed/yRmI8r92rxE", false],
		["https://www.youtube.com/embed/XFtuITgBLEQ", false],
		["https://www.youtube.com/embed/Aq_5k-MhwpQ", false],
		["https://www.youtube.com/embed/mJBcazUWEZI", false],
		["https://www.youtube.com/embed/RVXxIQWmtiY", false],
		["https://www.youtube.com/embed/gx2yBqAgb24", false],
		["https://www.youtube.com/embed/yi9q6W9AZIU", false],
		["https://www.youtube.com/embed/u_G3RU0j-rY", false],
		["https://www.youtube.com/embed/sS13Ov_fDHU", false],
		["https://www.youtube.com/embed/uDTZd3sGs2E", false],
		["https://www.youtube.com/embed/VIAoCArhf7k", false],
		["https://www.youtube.com/embed/Qlvp8s7ekoM", false],
		["https://www.youtube.com/embed/GwgfUZm-K1s", false],
		["https://www.youtube.com/embed/a_uGWShWFIk", false],
		["https://www.youtube.com/embed/0RArt1rpi7A", false],
		["https://www.youtube.com/embed/i5uimp9Gy4A", false],
		["https://www.youtube.com/embed/LO1K5Pjzhr8", false],
		["https://www.youtube.com/embed/G8VqnNrXiOQ", false],
		["https://www.youtube.com/embed/-eVEF8Wgzwo", false],
		["https://www.youtube.com/embed/NMV2iVetgg8", false],
		["https://www.youtube.com/embed/WIloIhgP7VQ", false],
		["https://www.youtube.com/embed/dEO2r5RcwZY", false],
		
		//["https://www.youtube.com/embed/", false],
	];

	var sites = null;

	// Prepares and binds the button
	var init = function() {
		button.onclick = onButtonClick;

		// If the browser doesn't support flash. Remove flash websites from the list.
		// if ( !swfobject.hasFlashPlayerVersion("1") ) {
		// 	removeFlashWebsites();
		// }

		sites = sitesList.slice(0);

		// If the Browser supports html5 storage
		if (supportsHtmlStorage() === true) {
			// Check for past data
			if (localStorage["sites"] !== undefined) {
				loadSites();
			}
		}
	};

	// Removes flash websites from the list
	var removeFlashWebsites = function() {
		var i, site;
		var newList = [];

		for (i = 0; i < sitesList.length; i++) {
			site = sitesList[i];
			if (site[1] === false) {
				newList.push(site);
			}
		}

		sitesList = newList;
	};

	// Selects and removes the next website from the list
	var selectWebsite = function() {
		var site, range, index;

		range = randomRange > sites.length ? sites.length : randomRange;
		index = Math.floor(Math.random() * range);

		site = sites[index];
		sites.splice(index, 1);

		return site;
	};

	// Opens the given url in a new window
	var openSite = function(url) {
		window.open(url);
	};

	var onButtonClick = function() {
		// Track click count.
		_gaq.push(["_trackEvent", "user", "clicks", "button"]);

		// Change text from "TO A"
		if (initialClick === false) {
			document.getElementById("joint").innerHTML = "EIN WEITERES";
			initialClick = true;
		}

		var url = selectWebsite()[0];
		openSite(url);

		// User has visited ALL the sites... refresh the list.
		if (sites.length == 0) {
			// If the browser doesn't support flash. Remove flash websites from the list.
			// if ( !swfobject.hasFlashPlayerVersion("1") ) {
			// 	removeFlashWebsites();
			// }

			sites = sitesList.slice(0);
		}

		storeSites();
	};

	// Save the current list of sites for the new user.
	var storeSites = function() {
		localStorage["sites"] = JSON.stringify(sites);
	};

	// Load the list of sites, so new users see new sites.
	var loadSites = function() {
		sites = JSON.parse(localStorage["sites"]);
	};

	init();
}

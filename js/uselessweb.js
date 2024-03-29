function uselessWebButton(button, popup) {
	// UI elements
	var buttonElement = button;
	var popupElement = popup;

	var initialClick = false;
	var randomRange = 6;

	// Websites: url | uses flash
	var sitesList = [
		["https://www.youtube.com/embed/txTup-COEW4?autoplay=1", false],
		["https://www.youtube.com/embed/1gKuzvWTVJw?autoplay=1", false],
		["https://www.youtube.com/embed/PL5MWmaVlAg?autoplay=1", false],
		["https://www.youtube.com/embed/yRmI8r92rxE?autoplay=1", false],
		["https://www.youtube.com/embed/XFtuITgBLEQ?autoplay=1", false],
		["https://www.youtube.com/embed/Aq_5k-MhwpQ?autoplay=1", false],
		["https://www.youtube.com/embed/mJBcazUWEZI?autoplay=1", false],
		["https://www.youtube.com/embed/yi9q6W9AZIU?autoplay=1", false],
		["https://www.youtube.com/embed/uDTZd3sGs2E?autoplay=1", false],
		["https://www.youtube.com/embed/Qlvp8s7ekoM?autoplay=1", false],
		["https://www.youtube.com/embed/a_uGWShWFIk?autoplay=1", false],
		["https://www.youtube.com/embed/0RArt1rpi7A?autoplay=1", false],
		["https://www.youtube.com/embed/i5uimp9Gy4A?autoplay=1", false],
		["https://www.youtube.com/embed/G8VqnNrXiOQ?autoplay=1", false],
		["https://www.youtube.com/embed/-eVEF8Wgzwo?autoplay=1", false],
		["https://www.youtube.com/embed/-2I-5_nR4T0?autoplay=1", false],
		["https://www.youtube.com/embed/dEO2r5RcwZY?autoplay=1", false],
		["https://www.youtube.com/embed/ycSPczkV9XY?autoplay=1", false],
		["https://www.youtube.com/embed/Tbpw2YdGP6U?autoplay=1", false],
		["https://www.youtube.com/embed/1n_xEGiY1Yk?autoplay=1", false],
		["https://www.youtube.com/embed/GXd3AleK7kg?autoplay=1", false],
		["https://www.youtube.com/embed/1VdqT-4o-Ok?autoplay=1", false],
		["https://www.youtube.com/embed/LpC0Oa-ULTo?autoplay=1", false],
		["https://www.youtube.com/embed/xqdQ5j1cbnA?autoplay=1", false],
		["https://www.youtube.com/embed/5VMQ3jx6ny4?autoplay=1", false],
		["https://www.youtube.com/embed/NdO69zclH1U?autoplay=1", false],
		["https://www.youtube.com/embed/itPmSIDgTT0?autoplay=1", false],
		["https://www.youtube.com/embed/rE9GrJVCchg?autoplay=1", false],
		["https://www.youtube.com/embed/eFaIBHuczYM?autoplay=1", false],
		["https://www.youtube.com/embed/i9HxBjM4tlQ?autoplay=1", false],
		["https://www.youtube.com/embed/q-1vpBAdCN4?autoplay=1", false],
		["https://www.youtube.com/embed/6hXrQ0eh4kg?autoplay=1", false],
		["https://www.youtube.com/embed/pIc-pNuWM8o?autoplay=1", false],
		["https://www.youtube.com/embed/BUrh_Xh3_tk?autoplay=1", false],
		["https://www.youtube.com/embed/NNTiiqRZgug?autoplay=1", false],
		["https://www.youtube.com/embed/wtaLX4OObqM?autoplay=1", false],
		["https://www.youtube.com/embed/V-XaqqUKnk0?autoplay=1", false],
		["https://www.youtube.com/embed/PEggQ7CTqy0?autoplay=1", false],
		

		//["https://www.youtube.com/embed/?autoplay=1", false],
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

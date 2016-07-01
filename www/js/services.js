angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

/**
 * The gamesManager service will make our game data available to
 * different controllers.
 */
.service('gamesManager', [function(){

	var service = this;

	service.gameData = {}, // We'll store our game data in here
	service.toggleGameFavourite = toggleGameFavourite;





	// Set the default game data
	service.gameData = {
		spit: {
			name: 'Spit',
			isFavourite: 0
		},
		irish: {
			name: 'Irish Snap',
			isFavourite: 0
		},
		spoon:{
			name: 'Spoons',
			isFavourite: 0 
		},
		egyptian:{
			name: 'Egyptian Ratscrew',
			isFavourite: 0
		},
		bridge:{
			name: 'Bridge',
			isFavourite: 0
		},
		fish:{
			name: 'Go Fish',
			isFavourite: 0
		},
		whist:{
			name: 'Whist',
			isFavourite: 0
		},
		cheat:{
			name: 'Cheat',
			isFavourite: 0
		},
		maid:{
			name: 'Old Maid',
			isFavourite: 0
		},
		blackjack:{
			name: 'Blackjack',
			isFavourite: 0
		},
		war:{
			name: 'War',
			isFavourite: 0
		},
		ranks:{
			name: "Hand rankings",
			isFavourite: 0
		},
		betting:{
			name: "Betting",
			isFavourite: 0
		},
		texas:{
			name: "Texas Hold'em",
			isFavourite: 0
		},
		omaha:{
			name: "Omaha",
			isFavourite: 0
		}
	};



	

	/**
	 * Set the value of isFavourite using the supplied data
	 * @param {string} gameName       The name of the game we're updating
	 */
	function toggleGameFavourite(gameName) {

		// Is it already a favourite?
		if(service.gameData[gameName].isFavourite === 1)
			// Set the favourite to 1
			service.gameData[gameName].isFavourite = 0;
		else
			// Set the favourite to 0
			service.gameData[gameName].isFavourite = 1;

	}



}]);


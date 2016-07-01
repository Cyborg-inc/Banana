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


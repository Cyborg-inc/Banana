angular.module('app.controllers', [])
  
.controller('homeCtrl', function(
	$scope,
	gamesManager
) {

	var vm = this;

	// Get the game data from our gamesManager service and
	// make it available to our view
	vm.gameData = gamesManager.gameData;

})
   
.controller('favoritesCtrl', function($scope) {


})
      
.controller('spitCtrl', function(
	$scope,
	gamesManager
) {

	var vm = this,
		currentGameName = 'spit'; // The name of the current game

	// Make toggle method available to view model
	vm.toggleFavourite = toggleFavourite;
	// Get the data of the current game from the gameData service
	vm.currentGameData = gamesManager.gameData[currentGameName];

	// The toggle method
	function toggleFavourite() {

		// Call the service to toggle the data
		gamesManager.toggleGameFavourite(currentGameName);

	}

})
   
.controller('irishSnapCtrl', function($scope) {

})
   
.controller('spoonsCtrl', function($scope) {

})
   
.controller('egyptianRatscrewCtrl', function($scope) {

})
   
.controller('bridgeCtrl', function($scope) {

})
   
.controller('goFishCtrl', function($scope) {

})
   
.controller('whistCtrl', function($scope) {

})
   
.controller('cheatCtrl', function($scope) {

})
   
.controller('oldMaidCtrl', function($scope) {

})
   
.controller('blackJackCtrl', function($scope) {

})
   
.controller('warCtrl', function($scope) {

})
   
.controller('pokerCtrl', function($scope) {

})
   
.controller('bettingCtrl', function($scope) {

})
   
.controller('handRanksCtrl', function($scope) {

})
   
.controller('texasHoldEmCtrl', function($scope) {

})
   
.controller('omahaCtrl', function($scope) {

})
 
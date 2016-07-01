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
   
.controller('favoritesCtrl', function(
	$scope,
	gamesManager
) {

	var vm = this;

	vm.gameData = gamesManager.gameData;

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
   
.controller('irishSnapCtrl', function(
	$scope,
	gamesManager
) {

	var vm =this,
		currentGameName ='irish';

	vm.toggleFavourite = toggleFavourite;

	vm.currentGameData = gamesManager.gameData[currentGameName];

	function toggleFavourite() {
		gamesManager.toggleGameFavourite(currentGameName)
	}

})
   
.controller('spoonsCtrl', function(
	$scope,
	gamesManager
) {
	var vm =this,
		currentGameName ='spoon';

	vm.toggleFavourite = toggleFavourite;

	vm.currentGameData = gamesManager.gameData[currentGameName];

	function toggleFavourite(){
		gamesManager.toggleGameFavourite(currentGameName)
	}

})
   
.controller('egyptianRatscrewCtrl', function(
	$scope,
	gamesManager
) {
	var vm = this,
		currentGameName ='egyptian';

	vm.toggleFavourite = toggleFavourite;

	vm.currentGameData = gamesManager.gameData[currentGameName];

	function toggleFavourite(){
		gamesManager.toggleGameFavourite(currentGameName)
	}

})
   
.controller('bridgeCtrl', function(
	$scope,
	gamesManager
) {
	var vm = this,
		currentGameName ='bridge';

	vm.toggleFavourite = toggleFavourite;

	vm.currentGameData = gamesManager.gameData[currentGameName];

	function toggleFavourite(){
		gamesManager.toggleGameFavourite(currentGameName)
	}

})
   
.controller('goFishCtrl', function(
	$scope,
	gamesManager
) {
	var vm = this,
		currentGameName ='fish';

	vm.toggleFavourite = toggleFavourite;

	vm.currentGameData = gamesManager.gameData[currentGameName];

	function toggleFavourite(){
		gamesManager.toggleGameFavourite(currentGameName)
	}

})
   
.controller('whistCtrl', function(
	$scope,
	gamesManager
) {
	var vm = this,
		currentGameName ='whist';

	vm.toggleFavourite = toggleFavourite;

	vm.currentGameData = gamesManager.gameData[currentGameName];

	function toggleFavourite(){
		gamesManager.toggleGameFavourite(currentGameName)
	}

})
   
.controller('cheatCtrl', function(
	$scope,
	gamesManager
) {
	var vm = this,
		currentGameName ='cheat';

	vm.toggleFavourite = toggleFavourite;

	vm.currentGameData = gamesManager.gameData[currentGameName];

	function toggleFavourite(){
		gamesManager.toggleGameFavourite(currentGameName)
	}

})
   
.controller('oldMaidCtrl', function(
	$scope,
	gamesManager
) {
	var vm = this,
		currentGameName ='maid';

	vm.toggleFavourite = toggleFavourite;

	vm.currentGameData = gamesManager.gameData[currentGameName];

	function toggleFavourite(){
		gamesManager.toggleGameFavourite(currentGameName)
	}

})
   
.controller('blackJackCtrl', function(
	$scope,
	gamesManager
) {
	var vm = this,
		currentGameName ='blackjack';

	vm.toggleFavourite = toggleFavourite;

	vm.currentGameData = gamesManager.gameData[currentGameName];

	function toggleFavourite(){
		gamesManager.toggleGameFavourite(currentGameName)
	}

})
   
.controller('warCtrl', function(
	$scope,
	gamesManager
) {
	var vm = this,
		currentGameName ='war';

	vm.toggleFavourite = toggleFavourite;

	vm.currentGameData = gamesManager.gameData[currentGameName];

	function toggleFavourite(){
		gamesManager.toggleGameFavourite(currentGameName)
	}

})
   
.controller('pokerCtrl', function($scope) {

})
   
.controller('bettingCtrl', function(
	$scope,
	gamesManager
) {
	var vm = this,
		currentGameName ='betting';

	vm.toggleFavourite = toggleFavourite;

	vm.currentGameData = gamesManager.gameData[currentGameName];

	function toggleFavourite(){
		gamesManager.toggleGameFavourite(currentGameName)
	}

})
   
.controller('handRanksCtrl', function(
	$scope,
	gamesManager
) {
	var vm = this,
		currentGameName ='ranks';

	vm.toggleFavourite = toggleFavourite;

	vm.currentGameData = gamesManager.gameData[currentGameName];

	function toggleFavourite(){
		gamesManager.toggleGameFavourite(currentGameName)
	}

})
   
.controller('texasHoldEmCtrl', function(
	$scope,
	gamesManager
) {
	var vm = this,
		currentGameName ='texas';

	vm.toggleFavourite = toggleFavourite;

	vm.currentGameData = gamesManager.gameData[currentGameName];

	function toggleFavourite(){
		gamesManager.toggleGameFavourite(currentGameName)
	}

})
   
.controller('omahaCtrl', function(
	$scope,
	gamesManager
) {
	var vm = this,
		currentGameName ='omaha';

	vm.toggleFavourite = toggleFavourite;

	vm.currentGameData = gamesManager.gameData[currentGameName];

	function toggleFavourite(){
		gamesManager.toggleGameFavourite(currentGameName)
	}

})
 
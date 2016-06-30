angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.home', {
    url: '/Home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.favorites', {
    url: '/Faves',
    views: {
      'tab3': {
        templateUrl: 'templates/favorites.html',
        controller: 'favoritesCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.spit'
      2) Using $state.go programatically:
        $state.go('tabsController.spit');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/Spit
      /page1/tab3/Spit
  */
  .state('tabsController.spit', {
    url: '/Spit',
    views: {
      'tab1': {
        templateUrl: 'templates/spit.html',
        controller: 'spitCtrl'
      },
      'tab3': {
        templateUrl: 'templates/spit.html',
        controller: 'spitCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.irishSnap'
      2) Using $state.go programatically:
        $state.go('tabsController.irishSnap');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/Irish
      /page1/tab3/Irish
  */
  .state('tabsController.irishSnap', {
    url: '/Irish',
    views: {
      'tab1': {
        templateUrl: 'templates/irishSnap.html',
        controller: 'irishSnapCtrl'
      },
      'tab3': {
        templateUrl: 'templates/irishSnap.html',
        controller: 'irishSnapCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.spoons'
      2) Using $state.go programatically:
        $state.go('tabsController.spoons');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/Spoon
      /page1/tab3/Spoon
  */
  .state('tabsController.spoons', {
    url: '/Spoon',
    views: {
      'tab1': {
        templateUrl: 'templates/spoons.html',
        controller: 'spoonsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/spoons.html',
        controller: 'spoonsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.egyptianRatscrew'
      2) Using $state.go programatically:
        $state.go('tabsController.egyptianRatscrew');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/Egyptian
      /page1/tab3/Egyptian
  */
  .state('tabsController.egyptianRatscrew', {
    url: '/Egyptian',
    views: {
      'tab1': {
        templateUrl: 'templates/egyptianRatscrew.html',
        controller: 'egyptianRatscrewCtrl'
      },
      'tab3': {
        templateUrl: 'templates/egyptianRatscrew.html',
        controller: 'egyptianRatscrewCtrl'
      }
    }
  })

  .state('tabsController.bridge', {
    url: '/Bridge',
    views: {
      'tab1': {
        templateUrl: 'templates/bridge.html',
        controller: 'bridgeCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.goFish'
      2) Using $state.go programatically:
        $state.go('tabsController.goFish');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/Fish
      /page1/tab3/Fish
  */
  .state('tabsController.goFish', {
    url: '/Fish',
    views: {
      'tab1': {
        templateUrl: 'templates/goFish.html',
        controller: 'goFishCtrl'
      },
      'tab3': {
        templateUrl: 'templates/goFish.html',
        controller: 'goFishCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.whist'
      2) Using $state.go programatically:
        $state.go('tabsController.whist');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/Whist
      /page1/tab3/Whist
  */
  .state('tabsController.whist', {
    url: '/Whist',
    views: {
      'tab1': {
        templateUrl: 'templates/whist.html',
        controller: 'whistCtrl'
      },
      'tab3': {
        templateUrl: 'templates/whist.html',
        controller: 'whistCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.cheat'
      2) Using $state.go programatically:
        $state.go('tabsController.cheat');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/Cheat
      /page1/tab3/Cheat
  */
  .state('tabsController.cheat', {
    url: '/Cheat',
    views: {
      'tab1': {
        templateUrl: 'templates/cheat.html',
        controller: 'cheatCtrl'
      },
      'tab3': {
        templateUrl: 'templates/cheat.html',
        controller: 'cheatCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.oldMaid'
      2) Using $state.go programatically:
        $state.go('tabsController.oldMaid');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/Maid
      /page1/tab3/Maid
  */
  .state('tabsController.oldMaid', {
    url: '/Maid',
    views: {
      'tab1': {
        templateUrl: 'templates/oldMaid.html',
        controller: 'oldMaidCtrl'
      },
      'tab3': {
        templateUrl: 'templates/oldMaid.html',
        controller: 'oldMaidCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.blackJack'
      2) Using $state.go programatically:
        $state.go('tabsController.blackJack');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/Blackjack
      /page1/tab3/Blackjack
  */
  .state('tabsController.blackJack', {
    url: '/Blackjack',
    views: {
      'tab1': {
        templateUrl: 'templates/blackJack.html',
        controller: 'blackJackCtrl'
      },
      'tab3': {
        templateUrl: 'templates/blackJack.html',
        controller: 'blackJackCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.war'
      2) Using $state.go programatically:
        $state.go('tabsController.war');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/War
      /page1/tab3/War
  */
  .state('tabsController.war', {
    url: '/War',
    views: {
      'tab1': {
        templateUrl: 'templates/war.html',
        controller: 'warCtrl'
      },
      'tab3': {
        templateUrl: 'templates/war.html',
        controller: 'warCtrl'
      }
    }
  })

  .state('tabsController.poker', {
    url: '/Poker',
    views: {
      'tab1': {
        templateUrl: 'templates/poker.html',
        controller: 'pokerCtrl'
      }
    }
  })

  .state('tabsController.betting', {
    url: '/Betting',
    views: {
      'tab1': {
        templateUrl: 'templates/betting.html',
        controller: 'bettingCtrl'
      }
    }
  })

  .state('tabsController.handRanks', {
    url: '/ranks',
    views: {
      'tab1': {
        templateUrl: 'templates/handRanks.html',
        controller: 'handRanksCtrl'
      }
    }
  })

  .state('tabsController.texasHoldEm', {
    url: '/Texas',
    views: {
      'tab1': {
        templateUrl: 'templates/texasHoldEm.html',
        controller: 'texasHoldEmCtrl'
      }
    }
  })

  .state('tabsController.omaha', {
    url: '/Omaha',
    views: {
      'tab1': {
        templateUrl: 'templates/omaha.html',
        controller: 'omahaCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/Home')

  

});
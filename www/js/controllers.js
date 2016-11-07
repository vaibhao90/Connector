angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $rootScope, StorageService, $state) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
  
   

   
    $rootScope.openModal = function() {
         // Form data for the login modal
        $rootScope.authenticatedUser = false;
        $rootScope.checkLogin();
    };
    $scope.closeModal = function() {
        $scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
        // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
        // Execute action
    });
    $rootScope.authenticatedUser = {};
    $rootScope.loginData = { username:  "tester@yopmail.com", password: "Password@vd01"};
    $rootScope.authenticated = false;
   
 $rootScope.doLogin = function(loginData) {
      console.log(" loginData", loginData);
       if(loginData.username && loginData.password && loginData.username == "tester@yopmail.com" && loginData.password == "Password@vd01"){
             $timeout(function() {
                $rootScope.authenticated = true;
                $rootScope.authenticatedUser = loginData;
                $rootScope.authenticatedUser.fullname= "John Doe";
                $rootScope.authenticatedUser.profile_image = "img/prof2.jpg";
                $rootScope.modal.hide();
                $state.go("app.home");
            }, 1000);
       }else{
        $rootScope.loginMessage = "Please enter valid "
       }
      
    };
    
     $rootScope.checkLogin = function(){
      var items = StorageService.getAll() ? StorageService.getAll() : {};
      $rootScope.authenticatedUser = items.authenticatedUser || {};
      $rootScope.authenticated =  items.authenticated || false;
      if(!$rootScope.authenticated) {
        $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $rootScope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $rootScope.modal = modal;  
                $rootScope.modal.show();
  
    });
      }

    } 
})

.controller('LoginPageCtrl', function($scope, $rootScope, $timeout, $state) {
    $rootScope.authenticated = false;
    $rootScope.currentUser = {};
    console.log(" State ", $state);
    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
            $rootScope.authenticated = true;
            $state.go("app.home");
        }, 1000);
    };

})

.controller('PlaylistsCtrl', function($scope) {
    $scope.playlists = [
        { title: 'Reggae', id: 1 },
        { title: 'Chill', id: 2 },
        { title: 'Dubstep', id: 3 },
        { title: 'Indie', id: 4 },
        { title: 'Rap', id: 5 },
        { title: 'Cowbell', id: 6 }
    ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {})
    .controller('HomePageCtrl', function($scope, $stateParams, ionicDatePicker) {
        $scope.startDate = new Date();
        $scope.endDate = new Date();
        var ipObj1 = {
            callback: function(val) { //Mandatory
                // console.log('Return value from the datepicker popup is : ' + val, new Date(val));
                $scope.startDate = new Date(val);
            },
            disabledDates: [ //Optional
                // new Date(2016, 2, 16),
                // new Date(2015, 3, 16),
                // new Date(2015, 4, 16),
                // new Date(2015, 5, 16),
                // new Date('Wednesday, August 12, 2015'),
                // new Date("08-16-2016"),
                // new Date(1439676000000)
            ],
            from: new Date(2012, 1, 1), //Optional
            to: new Date(2016, 10, 30), //Optional
            inputDate: new Date(), //Optional
            mondayFirst: true, //Optional
            disableWeekdays: [0], //Optional
            closeOnSelect: false, //Optional
            templateType: 'popup' //Optional
        };
        var ipObj2 = {
            callback: function(val) { //Mandatory
                // console.log('Return value from the datepicker popup is : ' + val, new Date(val));
                $scope.endDate = new Date(val);
                // return  startDate
            },
            disabledDates: [ //Optional
                // new Date(2016, 2, 16),
                // new Date(2015, 3, 16),
                // new Date(2015, 4, 16),
                // new Date(2015, 5, 16),
                // new Date('Wednesday, August 12, 2015'),
                // new Date("08-16-2016"),
                // new Date(1439676000000)
            ],
            from: new Date(2012, 1, 1), //Optional
            to: new Date(2016, 10, 30), //Optional
            inputDate: new Date(), //Optional
            mondayFirst: true, //Optional
            disableWeekdays: [0], //Optional
            closeOnSelect: false, //Optional
            templateType: 'popup' //Optional
        };

        $scope.openDatePicker = function() {
            ionicDatePicker.openDatePicker(ipObj1);
        };

        $scope.openDatePicker2 = function() {
            ionicDatePicker.openDatePicker(ipObj2);
        };
    });

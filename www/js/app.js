// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ionic-datepicker', 'ngStorage'])

.run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })
    .config(function(ionicDatePickerProvider) {
        var datePickerObj = {
            inputDate: new Date(),
            titleLabel: 'Select a Date',
            setLabel: 'Set',
            todayLabel: 'Today',
            closeLabel: 'Close',
            mondayFirst: false,
            weeksList: ["S", "M", "T", "W", "T", "F", "S"],
            monthsList: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
            templateType: 'popup',
            from: new Date(2012, 8, 1),
            to: new Date(2018, 8, 1),
            showTodayButton: true,
            dateFormat: 'dd MMMM yyyy',
            closeOnSelect: false,
            disableWeekdays: []
        };
        ionicDatePickerProvider.configDatePicker(datePickerObj);
    })

.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
        })

        .state('app.login', {
            url: '/login',
            views: {
                'menuContent': {
                    templateUrl: 'templates/login_scene.html',
                    controller: 'LoginPageCtrl'
                }
            }
        })

        .state('app.home', {
            url: '/home',
            views: {
                'menuContent': {
                    templateUrl: 'templates/home.html',
                    controller: 'HomePageCtrl'
                }
            }
        })

        .state('app.contacts', {
                url: '/contacts',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/browse.html'
                    }
                }
            })
            .state('app.playlists', {
                url: '/playlists',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/playlists.html',
                        controller: 'PlaylistsCtrl'
                    }
                }
            })

        .state('app.single', {
            url: '/playlists/:playlistId',
            views: {
                'menuContent': {
                    templateUrl: 'templates/playlist.html',
                    controller: 'PlaylistCtrl'
                }
            }
        })

        .state('app.sky', {
            url: '/sky',
            views: {
                'menuContent': {
                    templateUrl: 'templates/playlist.html',
                    controller: 'PlaylistCtrl'
                }
            }
        });
        // if none of the above states are matched, use this as the fallback

        $urlRouterProvider.otherwise('/app/home');
    })
    .factory('StorageService', function($localStorage) {

        var _getAll = function() {
            return $localStorage.things;
        };

        var _add = function(thing) {
            $localStorage.things.push(thing);
        }

        var _remove = function(thing) {
            $localStorage.things.splice($localStorage.things.indexOf(thing), 1);
        }

        return {
            getAll: _getAll,
            add: _add,
            remove: _remove
        };
    })

// .directive('daterangepicker', ['$parse', '$rootScope', function($parse, $rootScope) {
//     return {
//         restrict: 'A',
//         transclude: 'true',
//         scope: {
//             vdDateStart: '=?datestart',
//             vdDateEnd: '=?dateend',
//             applyChanges: '&applychange'
//         },
//         link: function(scope, element, attrs) {
//              element.daterangepicker({
//                         autoUpdateInput: false,
//                         maxDate: new Date(),
//                         locale: {
//                             cancelLabel: 'Clear',
//                             format: 'YYYY-MM-DD'
//                         }
//                     });

//               element.on('apply.daterangepicker', function(ev, picker) {
//                 $(this).val(' From: ' + picker.startDate.format('YYYY-MM-DD') + ' To: ' + picker.endDate.format('YYYY-MM-DD'));
//                 scope.$apply(function() {
//                     var date = { startDate: picker.startDate, endDate: picker.endDate };
//                     scope.vdDateEnd = date.endDate;
//                     scope.vdDateStart = date.startDate;

//                     scope.applyChanges({ start_date: picker.startDate.format('YYYY-MM-DD'), end_date: picker.endDate.format('YYYY-MM-DD') });
//                 });
//             });

//             element.on('cancel.daterangepicker', function(ev, picker) {

//                 $(this).val(' Change Date Range');

//                 var date = { startDate: '', endDate: '' };
//                 scope.vdDateEnd = date.endDate;
//                 scope.vdDateStart = date.startDate;
//                 scope.applyChanges({ start_date: '', end_date: '' });
//             });
//        }      
//     }
// }]);

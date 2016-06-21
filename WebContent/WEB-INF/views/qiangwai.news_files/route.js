/**
 * Created by gcc on 2015/11/19.
 */
lifeix.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {controller: 'ListController', templateUrl: 'views/list/list.html'})
        .when('/category/:catId', {controller: 'ListController', templateUrl: 'views/list/list.html'})
        .when('/category/content/:catId', {controller: 'CategoryController', templateUrl: 'views/category/category.html'})
        .when('/detail/:id', {controller: 'DetailController', templateUrl: 'views/detail/detail.html'})
        .when('/myhome', {controller: '', templateUrl: 'views/myhome.html'})
        .otherwise({redirectTo: '/'});
}]);
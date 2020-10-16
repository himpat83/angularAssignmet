angular.module('myApp', []).controller('namesCtrl', function($scope, $http) {
    $http.get("MOCK_DATA.JSON").then(function(response) {
        $scope.myData = response.data;
        $scope.clearInput = function() {
            $scope.inputtext = '';
            $scope.searchText = '';
        }
        console.log("mydata =" + response.data);
    });
    // $scope.names = [
    //     'Jani',
    //     'Carl',
    //     'Margareth',
    //     'Hege',
    //     'Joe',
    //     'Gustav',
    //     'Birgit',
    //     'Mary',
    //     'Kai'
    // ];
});